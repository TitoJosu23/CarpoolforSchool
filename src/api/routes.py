"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Complaint, School, School_Access, Child, Guardian, Black_list
from api.utils import generate_sitemap, APIException, school_member
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
    data = School_Access.query.filter_by(user_id=user.id)
    roles = [{"school_id":sa.school_id, "role":sa.role} for sa in data]
    if not roles:
        roles = [{"role":None}]
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id, "roles":roles})

@api.route("/user", methods=["POST"])
def create_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User(email=email, password=password)
    db.session.add(user)
    db.session.commit()
    access_token = create_access_token(identity=user.id)
    return jsonify({**user.serialize(),"token":access_token,"roles":[{"role":None}]})

@api.route("/guardian/create", methods=["POST"])
@jwt_required()
def create_guardian():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    check_guardian=Guardian.query.filter_by(user_id=current_user_id).first()
    if check_guardian is not None:
        raise APIException("Guardian Already Established!")
    first_name = request.json.get("firstName", None)
    last_name = request.json.get("lastName", None)
    seats_available = request.json.get("seats_available",None)
    payment_info = request.json.get("payment_info",None)
    address = request.json.get("address", None)
    phone = request.json.get("phone", None)
    guardian = Guardian(user_id=current_user_id,first_name=first_name, last_name=last_name, seats_available= seats_available,payment_info=payment_info, address=address, phone=phone)
    db.session.add(guardian)
    db.session.commit()
    return jsonify(guardian.serialize())

@api.route("/child/create", methods=["POST"])
@jwt_required()
def create_child():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    guardian = Guardian.query.filter_by(user_id=current_user_id).first()
    if guardian is None:
        raise APIException ("Please register as a guardian first!")
    print(guardian.first_name,guardian.last_name)
    first_name = request.json.get("firstName", None)
    last_name = request.json.get("lastName", None)
    class_grade = request.json.get("classGrade",None)
    gender = request.json.get("gender",None)
    phone = request.json.get("phone", None)
    child = Child(first_name=first_name, last_name=last_name,class_grade=class_grade,gender=gender,phone=phone)
    db.session.add(child)
    added_child = Child.query.filter_by(first_name=first_name, last_name=last_name,class_grade=class_grade,gender=gender,phone=phone).first()
    if added_child is None:
        raise APIException ("Failed to add child!")
    print(added_child)
    # child_to_guardian=Child_to_guardian(guardian_id=guardian.id,child_id=added_child.id)
    # db.session.add(child_to_guardian)
    db.session.commit()
    return jsonify(child.serialize()),200

@api.route("/school/access", methods=["POST"])
@jwt_required()
def create_school_access():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    guardian = Guardian.query.filter_by(user_id=current_user_id).first()
    if guardian is None:
        raise APIException("Register as a guardian before applying to school!")
    requested_school = request.json.get("schoolName", None)
    school = School.query.filter_by(school_name=requested_school).first()
    if school is None:
        raise APIException("School Does Not Exist!")
    check_access_true = School_Access.query.filter_by(user_id=current_user_id,accepted=True).first()
    if check_access_true is not None:
        raise APIException("You already belong to that school")
    check_access_false = School_Access.query.filter_by(user_id=current_user_id,accepted=False).first()
    if check_access_false is not None:
        raise APIException("You have a pending request, please be patient")
    school_access = School_Access(user_id=current_user_id,school_id=school.id,role="guardian")
    db.session.add(school_access)
    db.session.commit()
    return jsonify(school_access.serialize())

@api.route("/school_access/<int:school_access_id>/accept", methods=["GET"])
@jwt_required()
def accept_school_invite(school_access_id):
    current_user_id=get_jwt_identity()
    school_access = SchoolAccess.query.get(school_access_id)
    school_access.accepted=True
    db.session.add(school_access)
    db.session.commit()
    return f"<h1>Invite Accepted,You can now login to {school_access.school.school_name}</h1>"

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

@api.route("/guardian/school/<int:current_school_id>", methods=["GET"])
@jwt_required()
def get_guardian_for_school(current_school_id):
    current_user_id=get_jwt_identity()
    school_access = School_Access.query.filter_by(user_id=current_user_id,school_id=current_school_id,accepted=True).first()
    if school_access is None:
        raise APIException ("School Not Found!")
    school_access = School_Access.query.filter_by(school_id=current_school_id)
    guardian_list=[]
    for access in school_access:
        guardian = Guardian.query.filter_by(user_id=access.user_id).first()
        if guardian is not None:
            guardian_list.append(guardian.serialize())
    return jsonify(guardian_list),200
    
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


@api.route("/complaint/<int:school_id>", methods=["GET"])
@jwt_required()
@school_member(role="admin")
def get_complaint(school_id,school_access):
    current_user_id=school_access.user_id
    school_access_list = School_Access.query.filter_by(school_id=school_id)
    user_list = list(map(lambda school_access: User.query.get(school_access.user_id),school_access_list))
    guardian_list = list(map(lambda user:Guardian.query.filter_by(user_id=user.id).first(),user_list))
    complaint_against_list = list(map(lambda guardian:Complaint.query.filter_by(flagged_guardian_id=guardian.id).first(),guardian_list))
    valid_complaints=[]
    for items in complaint_against_list:
        if items is not None:
            items.serialize()
            valid_complaints.append(items.serialize())
    return jsonify(valid_complaints),200

# @api.route("/school/create", methods=["POST"])
# @jwt_required
# def create_school():
#     current_user_id=get_jwt_identity()
#     user = User.query.get(current_user_id)
#     check_admin = School_Access.query.filter_by(user_id=current_user_id,role="admin").first()
#     if check_admin is not None:
#         raise APIException("Cannot Create Multiple Schools!")
#     school_name= request.json.get("school_name", None)
#     school_address= request.json.get("school_address", None)
#     school_logo_url= request.json.get("school_logo_url", None)
#     school = School(school_name=school_name,school_address=school_address,school_logo_url=school_logo_url)
#     db.session.add(school)
#     added_school = School.query.filter_by(school_name=school_name).first()
#     if added_school is None:
#         raise APIException("School registration failed!")
#     school_id = added_school.id
#     school_access = School_Access(user_id=current_user_id,school_id=school_id,role="admin")
#     db.session.add(school_access)
#     return jsonify(school_access.serialize()),200