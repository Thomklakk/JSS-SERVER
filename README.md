- Authentication -

Sign in: 

Create a “users.json” file, and put the following users' credentials into this file for authentication: 

Username: Admin 
Password: Admin1
Role: admin 

There are 2 types of users for this web application: 

Registered users (Logged in) 
Guest users (Not logged in) 
When the application is started, the users.json file needs to be read, and the data in this file needs to be assigned to the variable RegisteredUsers - This variable should be accessible from all the routes for authentication purposes. 

Users that register should be added to the RegisteredUsers variable to authenticate themselves and use the appropriate routes. 

A registered user should be able to sign into the web application using the existing “Sign in” page (http://localhost:3000/login endpoint). 

Once the user has successfully signed in, they should be redirected to the “Parts” page. 

Only registered users should be able to 
Edit/change Part data. 
Add new parts. 
Non-logged-in users (Guests) can only view the Parts list. 
Register: 

A Guest user should be able to register themselves on the existing “Register” page (http://localhost:300/signup  endpoint). 
Before registering a user, you should check if a user exists in the “users.json” file (There should be no duplicate users).  
If they are NOT already registered, they must be added to the “users.json” file.
- Parts -

Display parts: 

A single API call should be made to http://backend.restapi.co.za/items/cparts when the page is loaded for the first time; when the web application is started.  
API results must be stored in a global object variable – Not in a database or a file. 
The Parts List table should be populated with this object. 
Clicking “Refresh” button will call the API again, overwrite the stored object variable data, and repopulate the table. 
If the stock quantity of a part is 0 - set the quantity value to “No Stock” in the HTML table. 
The endpoint/route to display the parts should be http://localhost:3000/parts.  
If this route does not exist, it should be created. 
Add parts: 

Input data from the “Add parts” view must be captured and added to the stored global object variable as a new Part. 
Input validation should account for data formatting, etc. 
Validation should check if the part already exists in the stored object before adding it (There should be no duplicate parts). 
To add a new part the endpoint/route should be  http://localhost:3000/part/add.  
If this route does not exist, it should be created. 
Edit part: 

The input fields on the “Edit Part” view should be populated with the data from the chosen Part the user wishes to edit/change. 
Any change in the chosen Part’s data should be updated in the stored global object variable. 
The endpoint/route to edit a part should be http://localhost:3000/part/edit. 
If this route does not exist, it should be created. 
