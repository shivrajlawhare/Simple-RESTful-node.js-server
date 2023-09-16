# Simple-RESTful-node.js-server
Simple restful node.js server using express.js for basic curd operations.

This is code for a Simple restful node.js server using express.js for basic curd operations.
It has two endpoint:
1. ("/") root endpoint with get request.
2. ("/api") with post, put and delete request.
 
code file contains 'names.json' file to store the name and email of the users. 
Basic CURD operations are to be performed on this file using post, put and delete request and fs(file system).

link for the api: https://myserver-ubvo.onrender.com/

1.get request on root endpoint displays all the users in json object format.


2.post request on /api endpoint with some values for name and email in request body in json format will add that data of perticular user in file.
  post request on /api:
  {
    "name" : "shivraj",
    "email" : "shivraj@gmail.com"
  }
  this will add one user with name: 'shivraj' and email: 'shivraj@gmail.com' in names.json file.


3.put request on /api endpoint will help to update the email of existing user .
  put request on /api:
  {
    "name" : "shivraj",
    "email" : "shivraj123@gmail.com"
  }
  this will update the email of user with name: 'shivraj' to 'shivraj123@gmail.com' and if user with name: 'shivraj' is not present then will give response as 'name not found'.


4.delete request on /api endpoint will help to delete the perticular user in our file.
  delete request on /api:
  {
    "name" : "shivraj"
  }
  this request will delete the user with name: 'shivraj' and if user with name: 'shivraj' is not present then will give response as 'name not found'
