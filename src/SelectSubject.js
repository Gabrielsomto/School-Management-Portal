import React, { useState } from "react";

const SelectSubject = () => {
  const [Subject, setSubject] = useState("");
  const SubjectItems = [
    { value: "", name: "--Selcect subject--" },
    { value: "English", name: "English" },
    { value: "Maths", name: "Maths" },
    { value: "Igbo", name: "Igbo" },
  ];

  return (
    <>
      <select
        name=""
        id=""
        value={Subject}
        onChange={(e) => {
          const SelectedSubject = e.target.value;
          setSubject(SelectedSubject);
        }}
      >
        {SubjectItems.map((Subject, index) => (
          <option key={index} value={Subject.value}>
            {Subject.name}
          </option>
        ))}
      </select>
      {console.log(JSON.stringify(Subject))}
    </>
  );
};

export default SelectSubject;
