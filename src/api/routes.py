"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Complaint, School, School_Access, Child, Guardian, Black_list, Ride_request
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity

api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def create_token():
    if request.json is None:
        return jsonify({"msg": "Body Empty!"}), 401
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        raise APIException("User Not Found!")
    check_admin = School_Access.query.filter_by(user_id=user.id,role="admin").first()
    if check_admin is not None:
        role = "admin"
    check_guardian=Guardian.query.filter_by(user_id=user.id).first()
    if check_guardian is not None:
        role = "guardian"
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id, "role":role})

@api.route("/user", methods=["POST"])
def create_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User(email=email, password=password)
    db.session.add(user)
    db.session.commit()
    return jsonify(**user.serialize())

@api.route("/guardian", methods=["POST"])
def create_guardian():
    user_email= request.json.get("email")
    user = User.query.filter_by(email=user_email).first()
    check_admin = School_Access.query.filter_by(user_id=user.id,role="admin").first()
    print("this is check_admin", check_admin)
    if check_admin is not None:
        raise APIException("Please Create Seperate Account For Guardian")
    check_guardian=Guardian.query.filter_by(user_id=user.id).first()
    if check_guardian is not None:
        raise APIException("Guardian Already Established!")
    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)
    seats_available = None
    payment_info = None
    address = None
    phone = request.json.get("phone", None)
    guardian = Guardian(user_id=user.id,first_name=first_name.capitalize(), last_name=last_name.capitalize(), seats_available= seats_available,payment_info=payment_info, address=address, phone=phone)
    db.session.add(guardian)
    db.session.commit()
    return jsonify(guardian.serialize())

@api.route("/guardian", methods=["PUT"])
@jwt_required()
def update_guardian():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    guardian = Guardian.query.filter_by(user_id=user.id).first()
    guardian.first_name = request.json.get("first_name")
    guardian.last_name = request.json.get("last_name")
    guardian.address = request.json.get("address")
    guardian.phone = request.json.get("phone")
    db.session.add(guardian)
    db.session.commit()
    return jsonify(guardian.serialize()),200

@api.route("/child", methods=["POST"])
@jwt_required()
def create_child():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    guardian = Guardian.query.filter_by(user_id=current_user_id).first()
    if guardian is None:
        raise APIException ("Please register as a guardian first!")
    print(guardian.first_name,guardian.last_name)
    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)
    class_grade = request.json.get("class_grade",None)
    school_id = request.json.get("school_id",None)
    age = request.json.get("age",None)
    child = Child(first_name=first_name, last_name=last_name,class_grade=class_grade,age=age,school_id=school_id)
    db.session.add(child)
    added_child = Child.query.filter_by(first_name=first_name, last_name=last_name,class_grade=class_grade,age=age,school_id=school_id).first()
    if added_child is None:
        raise APIException ("Failed to add child!")
    print(added_child)
    guardian.children.append(added_child)
    db.session.add(guardian)
    db.session.commit()
    return jsonify(child.serialize()),200

@api.route("/access", methods=["GET"])
@jwt_required()
def get_self():
    current_user_id=get_jwt_identity()
    access = School_Access.query.filter_by(user_id=current_user_id,role="admin").first()
    guardian = Guardian.query.filter_by(user_id=current_user_id).first()
    if access is not None:
        school = School.query.filter_by(id = access.school_id).first()
        school = school.serialize()
        return jsonify(school)
    if guardian is not None:
        guardian = guardian.serialize()
        return jsonify(guardian)

@api.route("/children", methods=["GET"])
@jwt_required()
def get_children():
    current_user_id=get_jwt_identity()
    guardian = Guardian.query.filter_by(user_id=current_user_id).first()
    if guardian is None:
        raise APIException ("No Guardian Found")
    guardian = guardian.serialize()
    children = guardian["children"]
    if children is None:
        raise APIException ("No Children Found")
    return jsonify(children)

@api.route("/school", methods=["POST"])
def create_school():
    user_email= request.json.get("email")
    user = User.query.filter_by(email=user_email).first()
    check_admin = School_Access.query.filter_by(user_id=user.id,role="admin").first()
    if check_admin is not None:
        raise APIException("Cannot Create Multiple Schools!")
    school_name= request.json.get("school_name", None)
    school_address= request.json.get("school_address", None)
    school_logo_url= request.json.get("school_logo_url", None)
    school_phone= request.json.get("school_phone", None)
    school = School(school_name=school_name,school_address=school_address,school_logo_url=school_logo_url,school_phone=school_phone)
    db.session.add(school)
    added_school = School.query.filter_by(school_name=school_name).first()
    if added_school is None:
        raise APIException("School registration failed!")
    school_id = added_school.id
    school_access = School_Access(user_id=user.id,school_id=school_id,role="admin",accepted=True)
    db.session.add(school_access)
    db.session.commit()
    return jsonify(school_access.serialize()),200

@api.route("/school/access", methods=["POST"])
@jwt_required()
def create_school_access():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    guardian = Guardian.query.filter_by(user_id=current_user_id).first()
    requested_school = request.json.get("school_id", None)
    school = School.query.filter_by(id=requested_school).first()
    if school is None:
        raise APIException("School Does Not Exist!")
    check_access_true = School_Access.query.filter_by(user_id=current_user_id,school_id=requested_school,accepted=True).first()
    if check_access_true is not None:
        raise APIException("You already belong to that school")
    check_access_false = School_Access.query.filter_by(user_id=current_user_id,school_id=requested_school,accepted=False).first()
    if check_access_false is not None:
        raise APIException("You have a pending request, please be patient")
    school_access = School_Access(user_id=current_user_id,school_id=school.id,role="guardian")
    db.session.add(school_access)
    db.session.commit()
    return jsonify(school_access.serialize())

@api.route("/access/pending", methods=["GET"])
@jwt_required()
def get_pending_requests():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    check_admin = School_Access.query.filter_by(user_id=current_user_id,role="admin").first()
    if check_admin is None:
        raise APIException("You Do Not Have Admin Rights!")
    requested_school = check_admin.school_id
    school_access_list = School_Access.query.filter_by(school_id=requested_school,accepted=False)
    pending_requests = []
    for items in school_access_list:
        if items is not None:
            items.serialize()
            pending_requests.append(items.serialize())
    people_requesting=[]
    for people in pending_requests:
        guardian = Guardian.query.filter_by(user_id=people["user_id"]).first()
        if guardian is not None:
            people_requesting.append({"first_name":guardian.first_name, "last_name":guardian.last_name,"phone":guardian.phone})
    if not people_requesting:
        return("You have no pending requests!")
    return jsonify(people_requesting)


@api.route("/school_access/accept", methods=["PUT"])
@jwt_required()
def accept_school_access():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    check_admin = School_Access.query.filter_by(user_id=current_user_id,role="admin").first()
    if check_admin is None:
        raise APIException("You Do Not Have Admin Rights!")
    guardian_phone = request.json.get("phone", None)
    guardian = Guardian.query.filter_by(phone=guardian_phone).first()
    access_request = School_Access.query.filter_by(user_id=guardian.user_id).first()
    access_request.accepted=True
    db.session.add(access_request)
    db.session.commit()
    return ("Guardian Access Succesfully Granted")

@api.route("/user/schools", methods=["GET"])
@jwt_required()
def get_schools():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    user_access = School_Access.query.filter_by(user_id=user.id,accepted=True)
    list_of_access = []
    for item in user_access:
        if item is not None:
            list_of_access.append(item.serialize())
    school_list = []
    for item in list_of_access:
        school = School.query.filter_by(id=item["school_id"]).first()
        school_list.append(school)
    school_name_id = []
    for item in school_list:
        name = item.school_name
        school_id = item.id
        school_name_id.append({"School_Name":name,"School_Id":school_id})
    return jsonify(school_name_id)

@api.route("/schools", methods=["GET"])
@jwt_required()
def get_all_schools():
    current_user_id=get_jwt_identity()
    list_of_schools = School.query.all()
    school_name_id = []
    for item in list_of_schools:
        school_name = item.school_name
        school_id = item.id
        school_address = item.school_address
        school_phone = item.school_phone
        school_logo_url = item.school_logo_url
        school_name_id.append({"School_Name":school_name,"School_Id":school_id,"School_phone":school_phone,"School_logo_url":school_logo_url,"School_address":school_address})
    return jsonify(school_name_id)

@api.route("/school/detail", methods=["GET"])
@jwt_required()
def get_school(school_id):
    current_user_id=get_jwt_identity()
    request = request.json.get("school_id")
    school = School.query.filter_by("School")
    return jsonify(school)

@api.route("/school/<int:school_id>/complaint/<int:flagged_guardian_id>", methods=["POST"])
@jwt_required()
def create_complaint(flagged_guardian_id):
    current_user_id=get_jwt_identity()
    if current_user_id == flagged_guardian_id:
        raise APIException("Cannot Complain Against Self!")
    guardian= Guardian.query.get(flagged_guardian_id)
    if guardian is None:
        raise APIException("Guardian does not exist!")
    comment = request.json.get("comment")
    if comment is None:
        raise APIException("Comment does not exist!")
    check_complaint=Complaint.query.filter_by(flagged_guardian_id=flagged_guardian_id,flag_creator_id=current_user_id).first()
    if check_complaint is not None:
        raise APIException("Complaint against this guardian already exists!")
    complaint = Complaint(flagged_guardian_id=flagged_guardian_id,flag_creator_id=current_user_id,flag_comment=comment)
    db.session.add(complaint)
    db.session.commit()
    return ("Complaint Succesfully Filed!"),200

@api.route("/complaint", methods=["GET"])
@jwt_required()
def get_complaint():
    current_user_id=get_jwt_identity()
    check_admin = School_Access.query.filter_by(user_id=current_user_id,role="admin").first()
    if check_admin is None:
        raise APIException("You Do Not Have Admin Rights!")
    access_list = School_Access.query.filter_by(school_id=check_admin.school_id,accepted=True,role="guardian")
    serial_access=[item.serialize() for item in access_list]
    print(serial_access)
    serialized_access = [item.serialize() for item in access_list]
    guardian_list = []
    for item in serialized_access:
        guardian = Guardian.query.filter_by(user_id=item["user_id"]).first()
        guardian = guardian.serialize()
        guardian_list.append(guardian)
    complaint_list = []
    for item in guardian_list:
        complaints = Complaint.query.filter_by(flagged_guardian_id=item["id"])
        print("THIS IS COMPLAINTS!!!!!!!!!!!!!!!!!!!!",complaints)
        for complaint in complaints:
            complaint.serialize()
            complaint_list.append(complaint)
    if not complaint_list:
        raise APIException("No Complaints Found!")
    active_complaints=[]
    # for item in complaint_list:
    #     complaining_guardian = Guardian.query.filter_by(id=item.flag_creator_id).first()
    #     complaining_guardian=complaining_guardian = f'{complaining_guardian.first_name} {complaining_guardian.last_name}'
    #     complaint_guardian = Guardian.query.filter_by(id=item.flagged_guardian_id).first()
    #     complaint_guardian =complaint_guardian = f'{complaint_guardian.first_name} {complaint_guardian.last_name}'
    #     active_complaints.append({"complaining_guardian":complaining_guardian,"complaint_guardian":complaint_guardian,"Complaint":item.flag_comment})
    print(complaint_list)
    return ("")
    
@api.route("/ride/requests", methods=["GET"])
@jwt_required()
def get_requested_rides():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    check_access = School_Access.query.filter_by(user_id=current_user_id,accepted=True)
    if check_access is None:
        raise APIException("You Do Not Belong To Any Schools!")
    requested_list = []
    for item in check_access:
        if item is not None:
            get_school = item.school_id
            requested_list.append(get_school)
    pending_requests = []
    for access in requested_list:
        school_request = Ride_request.query.filter_by(requested_school_id=access).first()
        school_request = school_request.serialize()
        pending_requests.append(school_request)
    return jsonify(pending_requests)
@api.route("/access/guardians", methods=["GET"])
@jwt_required()
def get_related_guardians():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    check_access = School_Access.query.filter_by(user_id=current_user_id,accepted=True)
    if check_access is None:
        raise APIException("You Do Not Belong To Any Schools!")
    requested_list = []
    for item in check_access:
        if item is not None:
            get_school = item.school_id
            requested_list.append(get_school)
    related_access = []
    for access in requested_list:
        access_list = School_Access.query.filter_by(school_id=access,accepted=True)
        print(access_list)
        # for item in access_list:
        #     related_guardians.append(item)
    return jsonify(requested_list)