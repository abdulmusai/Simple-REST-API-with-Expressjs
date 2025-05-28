# Simple-REST-API-with-Expressjs
# Simple Items REST API

## Overview
This is a simple RESTful API built with Node.js and Express.js to manage items using an in-memory datastore.

## Features
- Create, Read, Update, Delete items
- Express middleware and error handling
- Example test cases using Postman

## Setup Instructions
```bash
# Clone the repo
git clone <repo-url>

# Navigate into the project
cd simple-express-api

# Install dependencies
npm install

# Run the server
npm start
API Endpoints

Method		Endpoint		Description

GET		/			Hello World
GET		/items			Get all items
GET		/items/:id		Get single item
POST		/items			Create a new item
PUT		/items/:id		Update existing item
DELETE		/items/:id		Delete an item

Sample JSON for POST/PUT

{
"name": "New Item",
"description": "Item description"
}

Example Postman Requests
GET All
GET http://localhost:3000/items
GET by ID
GET http://localhost:3000/items/<id>
POST
POST http://localhost:3000/items
Content-Type: application/json
{
"name": "New Item",
"description": "Item description"
}

PUT
PUT http://localhost:3000/items/<id>
Content-Type: application/json

{
"name": "Updated Item",
"description": "Updated description"
}

DELETE
DELETE http://localhost:3000/items/<id>
