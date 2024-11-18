[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/tazDMbQj)


# Task Tracker Application

## Overview
The application has two parts: Front-end and Back-end Implementation.

## Application Features
### 1. Task Creation
- Add New Tasks: Users can create new tasks by providing a title, description, and other relevant details.
- Form Validation: Ensures that all required fields are filled out before submitting the form.

### 2. Task Viewing
- Task List Display: Displays a list of all tasks with their titles and truncated descriptions.
- Detailed View: Allows users to expand tasks to view full details, including the complete description and creation date.

### 3. Task Search and Filter
- Search By Title: Users can search for tasks by their titles.
- Search By Description: Users can search for tasks by their descriptions.
- Filter By Completion Status: Users can filter tasks based on whether they are completed or not.
- Date Range Filter: Users can filter tasks by start and end dates.
- Search by Task Id: Users can search for a particular task by its Id.

### 4. Task Editing
- Edit Tasks: Users can edit task details such as title and description.
- Toggle Task State: Users can mark tasks as completed or incomplete by toggling a checkbox.

### 5. Task Deletion
- Delete Tasks: Users can delete tasks from the list.

### 6. User Feedback
- Success Messages: Alerts to inform users when a task is successfully created, updated, or deleted.

### 7. Responsive Design
- Material UI Components: Utilizes Material UI components for a consistent and responsive design across different devices.
- Custom Styling: Uses CSS for additional styling to enhance the visual appeal of the application.

### 8. Performance and Development
- Fast Development with Vite: Leveraging Vite for fast build times and hot module replacement, enhancing the development experience.
- Type Safety with TypeScript: Ensures robust and maintainable code with TypeScript, reducing runtime errors through type checking.

### 9. Modular and Scalable Architecture
- Component-Based Structure: The application is divided into reusable and maintainable React components, making it easy to scale and manage.
- Service Layer: Separate services for API calls and business logic, ensuring clean separation of concerns and easier testing.

### 10. Data Persistence (Backend Integration)
- API Integration: The application communicates with a backend API to fetch, create, update, and delete tasks, ensuring data is persisted and synchronized.


## (A) Front-end Implementation:
This Task Tracker App is a React-based application for managing tasks. It allows users to create, update, delete, and search for tasks. The app uses Material-UI (MUI) components for the UI and integrates with a backend service for task operations.

## Technologies Used
- ReactJS: A popular JavaScript library for building user interfaces, particularly single-page applications. It allows for the creation of reusable UI components.
- TypeScript: A statically typed superset of JavaScript that helps in catching errors early through type checking, enhancing the development experience and maintaining code quality.
- Vite: A fast build tool and development server for modern web projects, offering a significantly faster development experience with instant hot module replacement (HMR).
- Material UI: A popular React component library that implements Google’s Material Design, providing pre-designed and customizable components to speed up UI development.
- CSS: Used for styling components to ensure the application has a visually appealing and responsive design.

## Front-end Structure
The project is organized into several directories to maintain a clean and scalable codebase:

- src: Contains the source code for the application.
  - components: Reusable React components (like SearchTaskById, SearchTasks, TaskItem, TaskList).
  - models: TypeScript interfaces and types.
  - services: Functions for API calls and other service-related logic.
  - styles: Global and component-specific CSS files.
  - App.tsx: The root component that defines the main structure of the application.
  - main.tsx: The entry point of the React application.

## Installation and Run Guide:
- Install npm and other dependencies like vite, MaterialUI, React.js
- Start the development server using "npm run dev"
- Open your browser and go to `http://localhost:5000`.
- Use the interface to add, edit, delete, view and search for tasks.


## (B) Backend Implementation:
Backend for the application was developed using Express.js, node.js, mongoDB, Mongoose object modeling tool. 
Built RESTful APIs with Node.js and Express.js, utilizing MongoDB for data storage. It provides endpoints for managing tasks, including creation, filtering, retrieval, updating, and deletion operations.

## Features
- Create New Task: Endpoint for adding new tasks to the database.
- Get All Tasks: Endpoint to retrieve a list of all tasks.
- Get Task by ID: Endpoint to fetch a specific task by its unique identifier.
- Filter Tasks: Filter a list of task based on specific parameters.
- Update Task: Endpoint to modify an existing task's details.
- Delete Task: Endpoint to remove a task from the database.

## Technologies Used
- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for persistent data storage.
- Mongoose: MongoDB object modeling tool for Node.js, providing schema-based solutions.
- Bruno Tool: Bruno tool which acted as a client for hitting the server APIs.
- MongoDB Compass: GUI for MongoDB to manage database graphically.
- MongoDB Atlas: Managed Cloud storage for MongoDB 

## Backend Structure:
Implemeted the project using various layers to handle different aspects of the application functionality.
-  Model Layer : The model layer defines the structure of data and interacts directly with the database. Models are defined using schemas.
- Service Layer: The service layer contains business logic that operates on the data models. It encapsulates complex logic and ensures separation of concerns between data access (models) and business operations.
- Controller Layer: Controllers handle incoming HTTP requests, execute application logic using services, and send HTTP responses back to the client. They serve as the bridge between the client (e.g., a web browser or mobile app) and the application's business logic.
- Route Layer: Routes define endpoints (URL paths) in the application and map them to specific controller functions. They provide a clear and organized way to handle different types of requests and direct them to the appropriate controller actions.
- App.js - The file where the application and MongoDB database are connected and application routes are initialised.
- Server.js - The file where the Express server is started.

## Installation and Run Guide:
- Install npm and other dependencies like Express, dotenv, mongoose, debug, cors
- Connect the MongoDB Atlas with MongoDB compass for better GUI management.
- Connect the MongoDB Atlas with the application server using .env variables.
- Implement and start the Express server using "node server.js"
- Using mongoose, connect to the MondoDB server.
- Using any client tool, test and run the implemented APIs to get and store data.
