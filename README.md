# MERN Stack Boilerplate

This is a basic boilerplate for a MERN (MongoDB, Express.js, React, Node.js) stack application.

## Project Structure

- `backend/`: Contains the Node.js/Express.js server.
- `frontend/`: Contains the React application.

## Getting Started

1.  **Clone this repository** (or create a new branch from this template).
2.  **Install dependencies:**
    ```bash
    npm install
    cd backend && npm install
    cd ../frontend && npm install
    ```
3.  **Configure environment variables:**
    - Create a `.env` file in the `backend/` directory based on `backend/.env.example`.
4.  **Run the application:**
    ```bash
    npm run dev
    ```
    This will concurrently start both the backend server and the frontend development server.

## Backend (`backend/`)

- **Technologies:** Node.js, Express.js, Mongoose, dotenv, cors.
- **Scripts:**
    - `npm start`: Starts the server.
    - `npm run dev`: Starts the server with `nodemon` for automatic restarts.

## Frontend (`frontend/`)

- **Technologies:** React, Vite, Axios.
- **Scripts:**
    - `npm run dev`: Starts the development server.
    - `npm run build`: Builds the application for production.
