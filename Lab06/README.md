# **Application frameworks**
##### **Lab session 3 – ExpressJS and Mongoose**

**Objective:** Teach main features of expressJS and MongooseJS

1. Initialize a nodeJS project directory.
   <br/>
2. Install expressJS module to the nodeJS project.

        npm install express --save

3. Serve HTML page via expressJS.
    Hint: https://expressjs.com/en/starter/static-files.html
    <br/>
4. Create a POST REST route to save a user object to in memory array.
Hint: https://expressjs.com/en/starter/basic-routing.html
    a. User object should contain firstName, secondName and birthday attributes.
    b. Unique id should be generated at the server and should be added into the user object before saving it.
    c. Date.now() method returns the milliseconds elapsed since 1970-01-01 00:00:00. Use this value as the ID.
    d. Save birthday as a date not as a String (Use Date() constructor).
    e. user Array.push() method to add items to users array.
    f. In order to accept JSON in request body user the module body parser and add bodyParser.json() method as an express middleware.
    <br/>
5. Add another 3 routes to;
Hint: https://expressjs.com/en/starter/basic-routing.html
    a. Get all users.
    b. Get an user by ID (Hint: Use Array.find or Array.findIndex method).
    c. Update an user (Hint: Use Array.find or Array.findIndex method).
    d. Delete an user by ID (Hint: Use Array.find or Array.findIndex method and Array.splice method).
    <br/>
6. Use MongoDB to save users
Hint: https://expressjs.com/en/starter/basic-routing.html
Hint: http://mongoosejs.com/docs/
    a. Install mongoose dependency.
        
        npm install --save mongoose

    b. Connect to the mongoDB (make sure local mongo instance is up and running.
    c. Create a model for user.
    d. MongoDB has auto generated _id field use that instead of previously created id.
    <br/>
7. Change all operations (get all, get one, update and delete) to use mongoDB.
Hint: https://expressjs.com/en/starter/basic-routing.html
Hint: http://mongoosejs.com/docs/