from flask import jsonify, url_for
# from api.models import School_Access
# from flask_jwt_extended import get_jwt_identity

class APIException(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

def has_no_empty_params(rule):
    defaults = rule.defaults if rule.defaults is not None else ()
    arguments = rule.arguments if rule.arguments is not None else ()
    return len(defaults) >= len(arguments)

def generate_sitemap(app):
    links = ['/admin/']
    for rule in app.url_map.iter_rules():
        # Filter out rules we can't navigate to in a browser
        # and rules that require parameters
        if "GET" in rule.methods and has_no_empty_params(rule):
            url = url_for(rule.endpoint, **(rule.defaults or {}))
            if "/admin/" not in url:
                links.append(url)

    links_html = "".join(["<li><a href='" + y + "'>" + y + "</a></li>" for y in links])
    return """
        <div style="text-align: center;">
        <img style="max-height: 80px" src='https://github.com/4GeeksAcademy/react-flask-hello/blob/4677c732f09717c85156fbd71c147f0d98fcac6f/docs/assets/rigo-baby.jpg?raw=true' />
        <h1>Rigo welcomes you to your API!!</h1>
        <p>API HOST: <script>document.write('<input style="padding: 5px; width: 300px" type="text" value="'+window.location.href+'" />');</script></p>
        <p>Start working on your project by following the <a href="https://start.4geeksacademy.com/starters/full-stack" target="_blank">Quick Start</a></p>
        <p>Remember to specify a real endpoint path like: </p>
        <ul style="text-align: left;">"""+links_html+"</ul></div>"

# def school_member(role=None):
#     def decorator(function):
#         def wrapper(*args, **kwargs):
#             school_id = None
#             if "school_id" in kwargs:
#                 school_id=kwargs["school_id"]
#             elif "school_id" in request.GET:
#                 school_id = request.GET["school_id"]
#             if school_id is None:
#                 raise APIException("Missing School ID on the request!",401)
#             current_user_id=get_jwt_identity()
#             school_access=School_Access.query.filter_by(user_id=current_user_id,role=role,school_id=school_id).first()
#             if school_access is None:
#                 raise APIException("School Accesss Denied!",401)
#             kwargs["school_access"]=school_access
#             print("hello!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
#             return function(*args, **kwargs)

#         return wrapper

#     return decorator
