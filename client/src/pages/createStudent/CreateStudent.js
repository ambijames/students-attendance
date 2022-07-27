import React, { useState } from "react";

const CreateStudent = () => {
  const [studentFields, setStudentFields] = useState([
    {
      name: "",
      isPresent: false,
    },
  ]);

  const httpRegisterStudent = () => {
    console.log(...studentFields);
  };
  return (
    <>
      <h1>Create A student</h1>
      <form onSubmit={httpRegisterStudent}>
        <div>
          <input
            name="name"
            placeholder="Email"
            onChange={(e) => setStudentFields(e.target.value)}
          />
          <input
            name="name"
            placeholder="fullName"
            onChange={(e) => setStudentFields(e.target.value)}
          />
          <input name="active" placeholder="Is Present?" />
          <button type="submit"> create Student</button>
        </div>
      </form>
    </>
  );
};

export default CreateStudent;
