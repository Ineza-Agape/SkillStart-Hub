# SkillStart Hub

SkillStart Hub is a platform dedicated to skill-building and job creation. A platform that empowers young Africans with skill-building resources, mentorship programs, and a talent marketplace to foster job creation.
This project includes a frontend built with HTML, CSS, and JavaScript, along with a backend powered by TypeScript and Express.js.

## Project Structure
```
SkillStart-Hub/
── templates/            # Contains HTML files (index.html, dashboard.html, etc.)
── static/               # Contains CSS and JavaScript files
   ── style.css         # Main stylesheet
   ── script.js         # Main JavaScript file
── servers/              # Contains backend logic
   ── server.ts         # Express.js backend server
   ── routes/           # API routes
   ── controllers/      # Controllers for handling logic
── package.json          # Node.js dependencies and scripts
── netlify.toml          # Netlify deployment configuration
── tsconfig.json         # TypeScript configuration
── README.md             # Project documentation
```

## Setup Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/SkillStart-Hub.git
cd SkillStart-Hub
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Backend Server
```sh
cd servers
npx tsc  
node dist/server.js  
```
The backend will be running at `http://localhost:5000`

### 4. Open the Frontend
Simply open `templates/index.html` in your browser or use a simple HTTP server like:
```sh
npx http-server templates
```
This will serve the frontend at `http://localhost:8080`.


## Features
- User authentication (login/signup)
- Skill-building courses
- Job opportunities section
- Milestone tracking (dashboard)