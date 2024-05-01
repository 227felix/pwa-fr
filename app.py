from flask import Flask, flash, redirect, render_template, request, session
from werkzeug.security import generate_password_hash, check_password_hash

from functools import wraps

#from helpers import login_required, apology

## helpers.py
def login_required(f):
    """
    Decorate routes to require login.
    """

    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("user_id") is None:
            return redirect("/login")
        return f(*args, **kwargs)

    return decorated_function


def apology(message, code=400):
    """Render message as an apology to user."""

    def escape(s):
        """
        Escape special characters.

        https://github.com/jacebrowning/memegen#special-characters
        """
        for old, new in [("-", "--"), (" ", "-"), ("_", "__"), ("?", "~q"),
                         ("%", "~p"), ("#", "~h"), ("/", "~s"), ("\"", "''")]:
            s = s.replace(old, new)
        return s

    return render_template("apology.html", top=code, bottom=escape(message)), code

# end of helpers.py



app = Flask(__name__)
app.secret_key = 'your_secret_key_here'


@app.route('/')
def index():  # put application's code here
    return render_template('index.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        print(username, password)
        if not username:
            return apology('must provide username', 403)
        elif not password:
            return apology('must provide password', 403)
        elif username != 'admin' or not password == 'admin':
            return apology('invalid username and/or password', 403)
        flash('You were successfully logged in')
        return redirect('/')
    return render_template('login.html')


