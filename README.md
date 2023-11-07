# REST API Project README

## Project Overview

This README file provides an overview and instructions for a REST API project that allows users to Create, Read, Update, and Delete (CRUD) user records. The project utilizes MongoDB as the database for storing user information. This project is built using Node.js and the Express.js framework.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Endpoints](#endpoints)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Prerequisites

Before running this project, ensure you have the following prerequisites installed on your system:

- Node.js: You can download and install Node.js from [nodejs.org](https://nodejs.org/).

- MongoDB: You need to have MongoDB installed and running on your local system or have access to a MongoDB server. You can download MongoDB from [mongodb.com](https://www.mongodb.com/).

## Project Structure

The project structure is organized as follows:

```
project-root/
  ├── app.js                # Main application entry point
  ├── routes/               # Route definitions
  │    ├── userRoutes.js    # User-related routes
  ├── controllers/          # Controller logic
  │    ├── userController.js # User controller logic
  ├── models/               # Data models
  │    ├── User.js          # User model schema
  ├── config/               # Configuration files
  │    ├── database.js      # MongoDB connection configuration
  ├── package.json           # Node.js dependencies
  └── README.md              # This README file
```

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/HarshDeep61034/REST_API_MONGODB.git
   cd REST_API_MONGODB
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root directory and configure your MongoDB connection URL. You can use a local MongoDB instance or a cloud-based MongoDB service. Here's an example of what your `.env` file might look like:

   ```
   MONGODB_URI=mongodb://localhost:27017/RestAPIProject
   PORT=7777
   ```

4. Start the application:

   ```bash
   npm start
   ```

The API will be accessible at `http://localhost:7777`.

## Endpoints

The API provides the following endpoints for user management:

- **GET** `/api/users` - Retrieve a list of all users.
- **GET** `/api/users/:id` - Retrieve a specific user by their ID.
- **POST** `/api/users` - Create a new user.
- **PATCH** `/api/users/:id` - Update a specific user by their ID.
- **DELETE** `/api/users/:id` - Delete a specific user by their ID.

## Usage

You can interact with the API using tools like [Postman](https://www.postman.com/) or by sending HTTP requests directly from your application.

Example Request (using cURL):

```bash
# Create a new user
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}' http://localhost:7777/api/users
```

For detailed information on how to use each endpoint, refer to the API documentation or the route and controller files in the project.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are well-documented.
4. Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to reach out to the project maintainers or contributors if you have any questions or need assistance. Happy coding!
