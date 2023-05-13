HOW TO SETUP YOUR SERVER:

[] Bring express into your project with these terminal commands: - `npm init --yes` and `npm install express`
[] Make a .gitignore - add these files to the git ignore:
  node_modules/
  package-lock.json
[] Make sure that in your package.json you have a `script` that (at least) has this line:
  - "scripts": {
    "start": "node server/server.js"
    },
[] create an instance of express by adding this to your server.js file:
    - const express = require("express"); - const app = express();
[] now set up port in server.js: 
    - const port = [port number here]
[] give express its 'jumping off point' by directing it to the public folder using this code in server.js: 
    - app.use(express.static("server/public"));
[] start the server and check that the server is running by adding this code to server.js:
    app.listen(port, () => {
        console.log("listening on port", port);
    });
[] start your server! See it do things.
  - `npm start`in terminal
  - Go to page in browser and type in the port name (e.g. http://localhost:8000/). Whatever is in your html file is what you should see on the page.

CLIENT.JS ToDos


