  
import os
from flask_admin import Admin
from .models import db, User, Guardian, Black_list, Child, School_Access, School, Complaint, Child_to_guardian, Ride_request
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='Data Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Guardian, db.session))
    admin.add_view(ModelView(Black_list, db.session))
    admin.add_view(ModelView(Child, db.session))
    admin.add_view(ModelView(School_Access, db.session))
    admin.add_view(ModelView(School, db.session))
    admin.add_view(ModelView(Complaint, db.session))
    admin.add_view(ModelView(Ride_request, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))