from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class School(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    school_name = db.Column(db.String(120), unique=True, nullable=False)
    school_address = db.Column(db.String(80), unique=False, nullable=False)
    school_logo_url = db.Column(db.String(80), unique=False, nullable=False)
    active_complaints = db.Column(db.Integer, db.ForeignKey('complaint.id'))
    complaint = db.relationship(Complaint)

    def serialize(self):
        return {
            "id": self.id,
            "school_name": self.school_name,
            "school_address": self.school_address,
            "school_logo_url": self.school_logo_url,
            "active_complaint":self.complaint.serialize() if self.complaint is not None else None,
        }

class School_Access(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    school_id = db.Column(db.Integer, db.ForeignKey('school.id'))
    role = db.Column(db.String(80), unique=False, nullable=False)
    is_driver = db.Column(db.Boolean(80), unique=False, nullable=False)
    is_available = db.Column(db.Boolean(80), unique=False, nullable=False)
    morning = db.Column(db.Boolean(80), unique=False, nullable=False)
    afternoon = db.Column(db.Boolean(80), unique=False, nullable=False)
    monday = db.Column(db.Boolean(80), unique=False, nullable=False)
    tuesday= db.Column(db.Boolean(80), unique=False, nullable=False)
    wedenesday = db.Column(db.Boolean(80), unique=False, nullable=False)
    thursday = db.Column(db.Boolean(80), unique=False, nullable=False)
    friday = db.Column(db.Boolean(80), unique=False, nullable=False)
    user = db.relationship(User)
    school = db.relationship(School)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user,
            "school_id": self.school,
            "role": self.role,
            "is_driver": self.is_driver,
            "is_available": self.is_available,
            "morning":self.morning,
            "afternoon":self.afternoon,
            "monday":self.monday,
            "tuesday":self.tuesday,
            "wednesday":self.wednesday,
            "thursday":self.thursday,
            "friday":self.friday,
        }
class Guardian(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    child_id = db.Column(db.Integer, db.ForeignKey('child.id'))
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    seats_available = db.Column(db.Integer, nullable=False)
    payment_info = db.Column(db.String(80), unique=False, nullable=False)
    user = db.relationship(User)
    child = db.relationship(Child)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user,
            "child_id": self.child,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "seats_available": self.seats_available,
            "payment_info": self.payment_info,
        }