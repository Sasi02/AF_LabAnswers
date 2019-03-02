'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './Component/AppContainer.jsx';

ReactDOM.render(<AppContainer /> , document.getElementById('app'));

/*
    1. Create a node project.
        npm init

    2. Install webpack and babel related dependencies.
        npm install parcel-bundler --save-dev
        
    3. Install React JS dependencies.
        npm install react react-dom prop-types --save-dev

    4. Create index.html file.

    5. Create main application container file as AppContainer.jsx

    6. Add new JSX file (main.jsx) as the entry point for the React application.

    7. Add start script into the scripts block in package.json file.
        "start": "parcel index.html"

    8. Run the application.
        npm start

    9. Create a file called User.jsx to display information belong to a single user in a table row.

    10. Create a file called Users.jsx to handle displaying user list. Use the previously created User
    component in Users component.

    11. Add Users component to AppContainer component.

    12. Create another component AddUser to add new users.

    13. Update AppContainer component to cater user adding.
    
    14. Run the application can check the output.
        npm start
*/


