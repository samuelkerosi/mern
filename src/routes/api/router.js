const express = require("express");
const router = express.Router();
const student = require("../../model/student");

router.get("/getstudent", (require, response) => {
  student.find().then(list => response.json(list));
  //response.send("hly ashit it works")
});

// creating a new student
router.post("/newstudent", (request, response) => {
  const registerStudent = new student({
    studentname: request.body.name,
    _id: request.body.id,
    studentGPA: request.body.gpa
  });

  //saving to database
  registerStudent.save().then(item => response.json(item));
});
router.get("/", (request, response) => {
  response.send("Welcome to student API");
});

router.delete("/destroystudent/:id", (response, request) => {
  student
    .findById(request.params.id)
    .then(data => data.remove().then(() => response.json({})));
});
module.exports = router;
