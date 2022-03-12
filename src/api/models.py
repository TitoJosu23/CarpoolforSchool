from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    guardian = db.relationship("Guardian")
    school_access_list = db.relationship("School_Access")

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class School(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    school_name = db.Column(db.String(255), unique=True, nullable=False)
    school_address = db.Column(db.String(255), unique=True, nullable=False)
    school_logo_url = db.Column(db.String(255), unique=False, nullable=False)
    active_complaints = db.Column(db.Integer, db.ForeignKey('complaint.id'))
    access_list = db.relationship("School_Access")


    def serialize(self):
        return {
            "id": self.id,
            "school_name": self.school_name,
            "school_address": self.school_address,
            "school_logo_url": self.school_logo_url,
            "active_complaint":self.active_complaints
        }

class School_Access(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    school_id = db.Column(db.Integer, db.ForeignKey('school.id'))
    role = db.Column(db.String(255), unique=False, nullable=False)
    is_driver = db.Column(db.Boolean, unique=False,default=False)
    is_available = db.Column(db.Boolean, unique=False, default=True)
    morning = db.Column(db.Boolean, unique=False, default=False)
    afternoon = db.Column(db.Boolean, unique=False, default=False)
    monday = db.Column(db.Boolean, unique=False, default=False)
    tuesday= db.Column(db.Boolean, unique=False, default=False)
    wednesday = db.Column(db.Boolean, unique=False, default=False)
    thursday = db.Column(db.Boolean, unique=False, default=False)
    friday = db.Column(db.Boolean, unique=False, default=False)
    accepted = db.Column(db.Boolean, unique=False, default=False)
    school = db.relationship("School")
    user = db.relationship("User")
    def __str__ (self):
        user = User.query.get(self.user_id)
        school = School.query.get(self.school_id)
        email = ''
        if user is not None:
            email = user.email
        school_name = ''
        if school is not None:
            school_name = school.school_name
        return email + ' ' + school_name

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "school_id": self.school_id,
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
            "accepted":self.accepted,
        }
Child_to_guardian = db.Table('child_to_guardian',
    db.Column('guardian_id', db.ForeignKey('guardian.id')),
    db.Column('child_id', db.ForeignKey('child.id'))
)
class Child(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_Name = db.Column(db.String(255), unique=False, nullable=False)
    last_name = db.Column(db.String(255), unique=False, nullable=False)
    class_grade = db.Column(db.String(255), unique=False, nullable=False)
    gender = db.Column(db.String(255), unique=False)
    phone = db.Column(db.String(255), unique=True)
    guardians = db.relationship("Guardian",
                    secondary=Child_to_guardian)

    def serialize(self):
        return {
            "id": self.id,
            "first_name":self.first_Name,
            "last_name":self.last_name,
            "class_grade":self.class_grade,
            "gender":self.gender,
            "phone":self.phone,
        }
class Guardian(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    first_name = db.Column(db.String(255), unique=False, nullable=False)
    last_name = db.Column(db.String(255), unique=False, nullable=False)
    seats_available = db.Column(db.Integer)
    payment_info = db.Column(db.String(255), unique=False)
    address = db.Column(db.String(255), unique=True, nullable=False)
    phone = db.Column(db.String(255), unique=True, nullable=False)
    children = db.relationship("Child",
                    secondary=Child_to_guardian)
    user = db.relationship("User")

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "seats_available": self.seats_available,
            "payment_info": self.payment_info,
            "address":self.address,
            "phone":self.phone,
            "children": list(map(lambda child: child.serialize(),self.children))
        }
class Complaint(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    flagged_guardian_id = db.Column(db.Integer, db.ForeignKey("guardian.id"))
    flag_creator_id = db.Column(db.Integer, db.ForeignKey("guardian.id"))
    flag_comment = db.Column(db.String(255), nullable=False)
    flag_creator = db.relationship(Guardian, foreign_keys="Complaint.flag_creator_id",
        backref=db.backref('complaint'))
    flagged_guardian = db.relationship(Guardian, foreign_keys="Complaint.flagged_guardian_id")

    def serialize(self):
        return {
            "id": self.id,
            "flagged_guardian_id": self.flagged_guardian_id,
            "flag_creator_id": self.flag_creator_id,
            "flag_comment": self.flag_comment,
                # do not serialize the password, its a security breach
            }
class Black_list(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    blacklisted_guardian_id = db.Column(db.Integer, db.ForeignKey('guardian.id'))
    blacklisting_guardian_id = db.Column(db.Integer, db.ForeignKey('guardian.id'))
    blacklisted_guardian = db.relationship(Guardian, foreign_keys="Black_list.blacklisted_guardian_id",
        backref=db.backref('black_list'))
    blacklisting_guardian = db.relationship(Guardian, foreign_keys="Black_list.blacklisting_guardian_id")


    def serialize(self):
        return {
            "id": self.id,
            "blacklisted_guardian_id": self.blacklisted_guardian_id,
            "blacklisting_guardian_id": self.blacklisting_guardian_id,
        }