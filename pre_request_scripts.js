// Create global variable
pm.globals.set("Global_URL", "http://localhost:3000");

// Create collections variable
pm.collectionVariables.set("Collection_URL", "http://localhost:3000");

// Create envirounment variable
pm.environment.set("environment_userID", "1")

// Create local variable
pm.variables.set("local_user_name", "Jhon")


// ----------------------------------------------------------------------------------------------------

// Create POST request with random generated user details(for request body) then set those details to collection variables

var gender = ["male", "female"];
var status = ["active", "inactive"]
var random = Math.random().toString(30).substring(2)
var no = Math.round(Math.random())


var name = "Jhon" + random;
var email = name + "@gmail.com"
var gender = gender[no]
var status = status[no]

pm.collectionVariables.set("user_name", name);
pm.collectionVariables.set("user_email", email);
pm.collectionVariables.set("gender", gender);
pm.collectionVariables.set("status", status);


// POST request body should be 

// {
//     "name": "{{user_name}}",
//     "email": "{{user_email}}",
//     "gender": "{{gender}}",
//     "status": "{{status}}"
// }





