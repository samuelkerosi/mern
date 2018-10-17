const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//model
const StudentSchema = new Schema({
  _id: {
    type: String,
    unique: true
  },

  studentname: {
    type: String,
    require: true
  },

  studentGPA: {
    type: String,
    default: "0.00"
  }
});

module.exports = students = mongoose.model("student", StudentSchema);
