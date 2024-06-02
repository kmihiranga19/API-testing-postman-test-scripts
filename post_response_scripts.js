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

