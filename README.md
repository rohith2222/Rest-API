# NodeJS Project - User Management API

This project is a simple User Management API built with Node.js and MongoDB using Mongoose. It provides endpoints to create, read, update, and delete users.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/rohith-sai-007/Rest-API-Implementation.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Rest-API-Implementation
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the MongoDB server (if not already running):
    ```bash
    mongod
    ```

5. Start the application:
    ```bash
    node app.js
    ```

## API Endpoints

### Get All Users

- **URL**: [users](http://_vscodecontentref_/1)
- **Method**: `GET`
- **Description**: Retrieves all users from the database.
- **Response**: JSON array of user objects.

### Get User by ID

- **URL**: `/users/:id`
- **Method**: `GET`
- **Description**: Retrieves a user by their ID.
- **Response**: JSON object of the user.

### Create New User

- **URL**: [users](http://_vscodecontentref_/2)
- **Method**: `POST`
- :**Description** Creates a new user.
- **Request Body**:
    ```json
    {
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com",
        "gender": "Male",
        "job_title": "Software Engineer"
    }
    ```
- **Response**: JSON object with a success message and the ID of the created user.

### Update User by ID

- **URL**: `/users/:id`
- **Method**: `PATCH`
- **Description**: Updates a user's first name by their ID.
- **Request Body**:
    ```json
    {
        "first_name": "Jane"
    }
    ```
- **Response**: JSON object with a status message.

### Delete User by ID

- **URL**: `/users/:id`
- **Method**: `DELETE`
- **Description**: Deletes a user by their ID.
- **Response**: JSON object with a status message.

## File Structure

- `app.js`: Entry point of the application.
- [user.js](http://_vscodecontentref_/3): Contains the controller functions for handling user-related requests.
- [user.js](http://_vscodecontentref_/4): Defines the Mongoose schema and model for the user.
- [user.js](http://_vscodecontentref_/5): Defines the routes for user-related endpoints.
