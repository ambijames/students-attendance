const { Student } = require("../model/student");

async function createStudent(req, res) {
  let { email, fullName } = req.body;
  if (!fullName || !email) {
    res.status(400).json({
      message: "fields not complete",
    });
  }
  try {
    let data = await Student.findOneAndUpdate({ email }, { ...req.body });
    const allData = await Student.find({ email });
    // console.log(data);
    if (data) {
      res.status(200).json({
        message: "successful",
        data: allData,
      });
      return;
    }
    const newStudent = new Student({
      ...req.body,
    });
    await newStudent.save();
    res.status(201).json({
      message: "Successfully created!",
      data: allData,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: `${error.message}`,
    });
  }
}
function getMessage(req, res) {
  res.status(200).json({
    message: "server deployed suceeded",
  });
}

// async function getStudent(req, res) {
// const student = await Student.find({  });
// res.status(200).json({
// message: "sucessful",
// data: student,
// });
// }
module.exports = { createStudent, getMessage };
