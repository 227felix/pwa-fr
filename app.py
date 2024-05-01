from flask import Flask, flash, redirect, render_template, request
from werkzeug.security import generate_password_hash, check_password_hash

from helpers import login_required, apology

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