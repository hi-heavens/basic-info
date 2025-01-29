# BASIC INFORMATION API

This project is a simple public API to retrieve basic information in JSON format. The API is built using Node.js.

## API Features

- Returns the registered email address (for HNG12 Slack workspace).

- Returns the current datetime in ISO 8601 format (UTC).

- Returns the GitHub repository URL containing the project code.

- CORS-compliant.

- Deployed to a publicly accessible [endpoint](https://basic-info.onrender.com/api/v1/person/).

## Technologies Used

- Programming Language: Node.js with Express.js

- Deployment Platform: Render

- Version Control: GitHub

- Response Format: JSON

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS version)

- Git

### Installation and Setup

1.  Clone the repository:

        git clone https://github.com/hi-heavens/basic-info.git

2.  Navigate to the project directory:

        cd basic-info

3.  Install dependencies:

        npm install

4.  Start the application:

        npm start

The server should now be running on http://localhost:3000/

## API Documentation

### Base URL

    https://basic-info.onrender.com/api/v1/person/

### Endpoint

#### GET /

#### Response:

    {
        "email": "ken_adex@yahoo.com",
        "currentDateTime": "2025-01-29T09:37:36.690Z",
        "githubURL": "https://github.com/hi-heavens/basic-info"
    }

### Deployment

This API has been deployed and is accessible [here](https://basic-info.onrender.com/api/v1/person/).

### Additional Resources

For hiring nodejs backend developers, visit [HNG Tech](https://hng.tech/hire/nodejs-developers).

### Author

[Kehinde Adedokun]
