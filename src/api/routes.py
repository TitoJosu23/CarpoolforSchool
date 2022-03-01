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
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })