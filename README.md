This file describes the installation and running process of URL Shortener app for Deep Origin.
==============================================================================================
## Project Description
This project is a URL shortening service designed to take long URLs and generate short, unique aliases that redirect users to the original addresses.
The main purpose of the service is to provide a convenient way to share lengthy URLs in a compact form.

## Technology Stack:
- Frontend: React + Vite + TypeScript
- Backend: NestJS + TypeScript
- Database: PostgreSQL + TypeORM
- Containerization: Docker

## Environment Configuration
In the **apps/backend/**, create a .env file and assign the variables listed in **apps/backend/.env.dist** with db credentials, required backend port and corresponding frontend URL.
In the **apps/frontend/**, create a .env file and assign the variables listed in **apps/frontend/.env.dist** with frontend port and backend URL.

## Running the project locally:
### Pre-installation setup
1. You need to have Node.js version 22 LTS or higher installed on your system to run this project. Please navigate to https://nodejs.org and download the appropriate version for your operating system.
2. Create a PostgreSQL server instance to serve as the database, use the credentials defined from earlier Environment Configuration section.
3. Create a table running the command defined in ```db/init.sql``` file.

### Installation
To install the project, follow these steps:
1. Clone the repository:

    ```git clone https://github.com/vagison/deep-origin-url-shortener.git```

2. Navigate to the project directory:

    ```cd deep-origin-url-shortener```

3. Navigate to the backend app directory:

    ```cd apps/backend```

4. Install the dependencies:

    ```npm i```

5. Navigate to the frontend app directory:

    ```cd ../../apps/frontend```

6. Install the dependencies:

    ```npm i```

### Running
To run the project, navigate to both the frontend and backend directories, and inside each, follow one of these approaches:

1. To start the compiled application located in the dist directory using Node you have to run the following commands:

    ```npm run build``` and ```npm start```

2. Alternatively to run the app in development mode with nodemon you have to run the following command:

    ```npm run dev```


## Running the project locally with Docker:
To run the project, you need Docker Compose version v2.35.1 or higher. Please navigate to the root directory and run:
    ```docker compose up --build```

This docker-compose file defines three services:
- **frontend**: builds and runs the React frontend on port 3000, depends on the backend.
- **backend**: builds and runs the NestJS backend on port 4000, loads environment variables, connects to the PostgreSQL database service.
- **db**: runs a PostgreSQL 15 database with persistent storage and initializes the database using a SQL script.

A named volume postgres_data is used to persist database data.
Note: The exposed ports should match the port configurations defined in each app’s .env file.


## Using API endpoints
To use the endpoints, you can visit the Postman URL below and then either fork or download the collection:

https://www.postman.com/grey-equinox-5383/workspace/deep-origin/collection/37208907-0f13d178-b50f-4038-ad2e-409fe9e8fcb5?action=share&creator=37208907

The request names are self-explanatory, and any additional information can be found within the requests themselves.

Note that the global variables for a workspace should be manually set in your Postman client according to your usage, defaults are:
- **backendURL**: http://localhost:4000
- **apiVersion**: api/v1
- **frontendURL**: http://localhost:3000

other variables are set during API calls.


## Using GUI
To access the app through the frontend, simply open the app in the address where your frontend app is running (default is http:/localhost:3000) and enjoy the GUI!

