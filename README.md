# SkillStart Hub

SkillStart Hub is a platform dedicated to skill-building and job creation. A platform that empowers young Africans with skill-building resources, mentorship programs, and a talent marketplace to foster job creation.
This project includes a frontend built with HTML, CSS, and JavaScript, along with a backend powered by TypeScript and Express.js.

## Project Structure
```
SkillStart-Hub/
├── templates/            # Contains HTML files (index.html, dashboard.html, etc.)
├── static/               # Contains CSS and JavaScript files
│   ├── style.css         # Main stylesheet
│   ├── script.js         # Main JavaScript file
├── servers/              # Contains backend logic
│   ├── server.ts         # Express.js backend server
│   ├── routes/           # API routes
│   ├── controllers/      # Controllers for handling logic
├── package.json          # Node.js dependencies and scripts
├── netlify.toml          # Netlify deployment configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Prerequisites
Before setting up the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 20 recommended)
- [TypeScript](https://www.typescriptlang.org/) (`npm install -g typescript`)
- [Git](https://git-scm.com/)

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
npx tsc  # Compile TypeScript to JavaScript
node dist/server.js  # Start the server
```
The backend will be running at `http://localhost:5000`

### 4. Open the Frontend
Simply open `templates/index.html` in your browser or use a simple HTTP server like:
```sh
npx http-server templates
```
This will serve the frontend at `http://localhost:8080`.

## Deployment to Netlify
Netlify automatically builds and deploys your frontend. Ensure you have a `netlify.toml` file with:
```toml
[build]
  command = "npm ci && npx tsc"
  publish = "dist"

[context.production.environment]
  NODE_ENV = "production"
  NODE_VERSION = "20"
```

## Features
- User authentication (login/signup)
- Skill-building courses
- Job opportunities section
- Milestone tracking (dashboard)