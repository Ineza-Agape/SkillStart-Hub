from flask import Flask, render_template, request, redirect, url_for, session
from models import db, User, bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = ''

db.init_app(app)


with app.app_context():
    db.create_all()

app = Flask(__name__)
app.secret_key = ''

users = {
    'user@example.com': {
        'password': 'password123',
        'progress': {
            'skill-building': 40,
            'job-opportunities': 20,
            'mentorship-programs': 70
        }
    }
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/skill-building')
def skill_building():
    return render_template('skill-building.html')

@app.route('/job-opportunities')
def job_opportunities():
    return render_template('Job-opportunities.html')

@app.route('/mentorship-programs')
def mentorship_programs():
    return render_template('mentorship-programs.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        if users.get(email) and users[email]['password'] == password:
            session['user'] = email
            return redirect(url_for('dashboard'))
        else:
            return 'Oh Oh! Invalid credentials, try again please.'
    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        password = request.form['password']
        if email in users:
            return 'User already exists. Please log in.'
        else:
            users[email] = {
            'first_name': first_name,
            'last_name': last_name,
            'password': password,
            'progress': {}
            }
            return redirect(url_for('login'))
    return render_template('signup.html')

@app.route('/dashboard')
def dashboard():
    if 'user' not in session:
        return redirect(url_for('login'))
    
    user_email = session['user']
    user_progress = users[user_email]['progress']
    
    milestones = {
        'skill-building': 'Complete basic courses',
        'job-opportunities': 'Apply for first job',
        'mentorship-programs': 'Finish mentorship phase'
    }
    
    achievements = []
    for skill, progress in user_progress.items():
        if progress >= 100:
            achievements.append(f"Completed {milestones[skill]}")
        elif progress >= 75:
            achievements.append(f"Almost there in {milestones[skill]}")
    
    return render_template('dashboard.html', user_progress=user_progress, achievements=achievements)

@app.route('/test')
def test():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)