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