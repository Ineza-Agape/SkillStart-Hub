# SkillStart Hub

SkillStart Hub is a platform designed to empower young Africans by providing skill-building resources, mentorship programs, and a talent marketplace to promote job creation. It serves as a one-stop hub to help individuals enhance their skills, connect with potential employers, and track their progress as they move toward securing jobs and building their careers.


## Key Features
- **User Authentication (Login/Signup)**: Secure user registration and login system, ensuring users can manage their profiles safely.
- **Skill-Building Courses**: Access to a variety of courses designed to help users develop key skills for career advancement.
- **Job Opportunities Section**: A dedicated space where users can explore job listings that match their skills and interests.
- **Milestone Tracking (Dashboard)**: Users can track their progress with an interactive dashboard showing their achievements, milestones, and progress towards skill development.

## Setup Instructions

### 1. Clone the Repository
Start by cloning the repository to your local machine:
```sh
git clone https://github.com/your-username/SkillStart-Hub.git
cd SkillStart-Hub
```

### 2. Install Dependencies
Install the required Node.js dependencies to run both the frontend and backend:
```sh
npm install
```

### 3. Run the Backend Server
To run the backend server, navigate to the `servers` directory, compile the TypeScript code, and start the server:
```sh
cd servers
npx tsc  
node dist/server.js  
```
The backend will now be running at `http://localhost:5000`.

### 4. Open the Frontend
You can easily open the frontend by opening the `templates/index.html` file directly in your browser, or use a simple HTTP server to serve it locally:
```sh
npx http-server templates
```
This will make the frontend accessible at `http://localhost:8080`.

## Conclusion
SkillStart Hub is a platform that not only focuses on skill-building but also aims to create job opportunities, helping users gain access to a broader talent pool. By offering a variety of learning resources, opportunities to connect with employers, and a dashboard to track personal progress, SkillStart Hub is designed to empower young individuals and foster job creation across Africa.