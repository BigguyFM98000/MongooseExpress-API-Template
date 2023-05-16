# MongooseExpress-API-Template
A CRUD and Auth Backend API Template with Node.js, Express, and MongoDB. Which uses Mongoose for interacting with the MongoDB Atlas instance.

# Tools that I will be using to build the api
1. Express - is one of the most popular web frameworks for node.js. It is built on top of the node.js HTTP module and adds support for routing, middleware, view system, etc. It is very simple and minimal, unlike other frameworks that try to do way too much, thereby reducing the flexibility for developers to have their own design choices.
2. Mongoose - is an ODM (Object Document Mapping) tool for Node.js and MongoDB. It helps you convert the objects in your code to documents in the database and vice versa. Mongoose provides a straightforward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
3. CRUD(Create, Read, Update, Delete) - It is a set of operations we get servers to execute.

# Definitions
1. Middlewares - is a function that has access to request and response objects. It can execute any code, transform the request object, or return a response.
2. Models - are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.
3. Routing - is the part where the APIs are actually created and hosted.
4. CREATE -> is used to request data from a specified resource.
5. POST -> is used to send data to a server to create/update a resource.
6. PUT -> Replaces all the current representations of the target resource with the uploaded content.
7. DELETE -> Removes all the current representations of the target resource given by URI.
8. CONNECT: -> Establishes a tunnel to the server identified by a given URI.

# System overview
Systems like Node JS are currently operated on an MVC (Model View Controller) architecture. It's a design pattern. The idea is that it helps to focus on a specific part of the application and build it on a modular basis. The components are:
1. Model: It represents the structure and constraints of the data stored in the database.
2. View: It is the way the required data is presented to the user as per the need of the user.
3. Controller: This section controls the requests of the user and generates the appropriate response which is fed to the user.

# Purpose of routes
When a client sends a request for an endpoint using an HTTP request (GET, POST, PUT, DELETE), we need to determine how the server will respond by setting up the routes.

