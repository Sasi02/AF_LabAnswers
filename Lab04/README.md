# **Application frameworks**
## Lab session 4 – MongoDB

**Objective:** Teach set of basic concepts in MongoDB and Git.

1. Start MongoDB instance locally by issuing the following command inside the bin folder inside MongoDB installation directory.
    ```
        cd C:\Program Files\MongoDB\Server\3.4\bin
        mongod
    ```
    Above command will only work if you have C:\data\db folder created(assuming you have installed MongoDB in C: drive). Otherwise you need to provide data directory path by issuing the following command. Data directory is used by MongoDB to save all the files related to databases.
    
        mongod --dbpath [PATH_TO_DATA_DIRECTORY]

2. Check MongoDB is working by connecting to the local instance using an IDE. Default port for MongoDB is 27017.

3. Add the following document to the database sliit;

    ```
        {
            "name": "John",
            "dateOfBirth": "1990-01-01T00:00:00Z",
            "subjects": ["Application frameworks", "Computer architecture"]
        }
    ```
    - We always make sure to add dates in MongoDB as a UTC date since MongoDB by default deals with UTC timezone and format.
  
4. Find the document by ‘name’.

5. Find the document by ’_id’.

6. Add ‘Distributed Computing’ to the subject list.

7. Add the following 2 document to the same collection;

    ```
        {
            "name": "Smith",
            "dateOfBirth": "1990-01-15T00:00:00Z",
            "subjects": ["Application frameworks", "Computer architecture"],
            "isActive": true
        }

        {
            "name": "Smith",
            "dateOfBirth": "1990-01-15T00:00:00Z",
            "subjects": ["Application frameworks", "Computer architecture"],
            "isActive": false
        }
    ```
8. Find the document with the name ‘Smith’ and isActive flag is true and add Distributed computing to subjects.

9.  Update the first document ‘isActive’ to false.

10. Remove the first document created.