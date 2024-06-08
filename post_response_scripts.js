// Response status validation

pm.test("Status code is 200", () =>{
    pm.response.to.have.status(200);
})

pm.test("Status name is OK", () =>{
    pm.response.to.have.status("OK");
})

pm.test("Succsfull get request", () =>{
    pm.expect(pm.response.code).to.be.oneOf([200,201]);
})


// Response header validation

pm.test("Header content-type is present", () =>{
    pm.response.to.have.header("Content-Type");
})

pm.test("Header content-Type is application/json", () =>{
    pm.expect(pm.response.headers.get("Content-Type")).to.eql('application/json');
})


// Response cookies validation

pm.test("Cookie 'language' is present", () => {
    pm.cookies.has('language');
})

pm.test("cookies language is eql1", () =>{
    pm.expect(pm.cookies.get('language')).to.eql('eql1');
})

 
// Response time validation
pm.test("Response time is less than 50ms", () =>{
    pm.expect(pm.response.responseTime).to.below(50);
})


// Asserting  or validate response body value type
const jsonData = pm.response.json()

pm.test("Test data type is correct", () => {
    pm.expect(jsonData).to.be.an("object");
    pm.expect(jsonData.user_id).to.be.a("number");
    pm.expect(jsonData.email).to.be.a("string");
    pm.expect(jsonData.name).to.be.a("string");
    pm.expect(jsonData.nicknames).to.be.an("array");
})


// Asserting array properties
pm.test("Array one properties is correct", () => {
    pm.expect(jsonData.nicknames).to.include("test");
    pm.expect(jsonData.nicknames).to.have.include(["test","test 2", "test 3", "test 4"]);
})


// Validate response body value
pm.test("Test data values is correct", () => {
    pm.expect(jsonData.user_id).to.eql(1);
    pm.expect(jsonData.email).to.eql("test@test.com");
    pm.expect(jsonData.name).to.eql("test@test.com");
    pm.expect(jsonData.nicknames[0]).to.eql("test");
    pm.expect(jsonData.email_verified).to.eql("true");
})

// Validate response schema

// genarated schema ex-
var schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "user_id": {
      "type": "integer"
    },
    "email": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "nicknames": {
      "type": "array",
      "items": [
        {
          "type": "string"
        },
        {
          "type": "string"
        },
        {
          "type": "string"
        },
        {
          "type": "string"
        }
      ]
    },
    "logins_count": {
      "type": "integer"
    },
    "email_verified": {
      "type": "boolean"
    }
  },
  "required": [
    "user_id",
    "email",
    "name",
    "nicknames",
    "logins_count",
    "email_verified"
  ]
}


pm.test("Valid schema", () =>{
    pm.expect(tv4.validate(jsonData, schema)).to.be.true;
});






