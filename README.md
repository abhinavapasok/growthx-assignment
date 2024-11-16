# growthx-assignment 
## Features 

### User 
- Register and login.
 - Upload assignments to specific admins. 
- View available admins for assignment tagging.

### Admin 
- Register and login. 
- View all assignments assigned to them. 
- Accept or reject assignments.

--- 

## Technologies Used 
- **Backend Framework**: Node.js with Express.js 
- **Database**: MongoDB (Mongoose ORM) 
- **Authentication**: JSON Web Tokens (JWT) 
- **Validation**: Express Validator 
- **Environment Management**: dotenv 

--- 

## Installation 
1. Clone the repository: 
    ```bash 
    git clone https://github.com/abhinavapasok/growthx-assignment.git
    cd growthx-assignment 
3. Install dependencies: 
   ```bash
   npm install

3.Set up the environment variables: 

Create a .env file in the root directory and add the following: 

PORT=5000 
MONGO_URI=<your_mongodb_connection_string> 
JWT_SECRET=<your_secure_jwt_secret>
 
4.Start the server: 
  ```bash 
    npm start
