"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Complaint, School, School_Access, Child, Guardian, Black_list
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity

api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def create_token():
    if request.json is None:
        return jsonify({"msg": "Body Empty!"}), 401
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for email and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "User not found!"}), 401
    data = School_Access.query.filter_by(user_id=user.id)
    roles = [{"school_id":sa.school_id, "role":sa.role} for sa in data]
    
    # create a new token with the user id inside
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
    return jsonify({**user.serialize(),"token":access_token})

@api.route("/guardian", methods=["POST"])
@jwt_required()
def create_guardian():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    first_name = request.json.get("firstName", None)
    last_name = request.json.get("lastName", None)
    seats_available = request.json.get("seats_available",None)
    payment_info = request.json.get("payment_info",None)
    address = request.json.get("address", None)
    guardian = Guardian(first_name=first_name, last_name=last_name, seats_available= seats_available,payment_info=payment_info, address=address)
    db.session.add(guardian)
    db.session.commit()
    return jsonify(guardian.serialize())

@api.route("/school", methods=["POST"])
def create_school():
    school_name= request.json.get("school_name", None)
    school_address= request.json.get("school_address", None)
    school_logo_url= request.json.get("school_logo_url", None)
    db.session.add(guardian)
    db.session.commit()
    return jsonify(guardian.serialize())

@api.route("/guardian", methods=["GET"])
@jwt_required()
def get_guardian():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    first_name = request.json.get("firstName", None)

@api.route("/school_access/<int:school_access_id>/accept", methods=["GET"])
def accept_school_invite(school_access_id):
    current_user_id=get_jwt_identity()
    school_access = SchoolAccess.query.get(school_access_id)
    school_access.accepted=True
    db.session.add(school_access)
    db.session.commit()
    return f"<h1>Invite Accepted,You can now login to {school_access.school.school_name}</h1>"

@api.route("/guardian", methods=["POST"])
def create_school_access():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    guardian = Guardian(first_name=first_name, last_name=last_name, seats_available= seats_available,payment_info=payment_info, address=address)
    db.session.add(guardian)
    db.session.commit()
    return jsonify(guardian.serialize())
    