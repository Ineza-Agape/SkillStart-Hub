from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'

users = {
    'user@example.com': 'password123'
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        if users.get(email) == password:
            session['user'] = email
            return redirect(url_for('dashboard'))
        else:
            return 'Oh Oh! Invalid credentials, try again please.'
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    if 'user' not in session:
        return redirect(url_for('login'))
    return f'Welcome, {session["user"]}! You are now successfully logged in.'

if __name__ == '__main__':
    app.run(debug=True)