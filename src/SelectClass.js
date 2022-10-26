import React, { useState } from "react";

const SelectClass = () => {
  const [Class, setClass] = useState("");
  const classItems = [
    { value: "", name: "--Selcect Class--" },
    { value: "JSS1", name: "JSS1" },
    { value: "JSS2", name: "JSS2" },
    { value: "JSS3", name: "JSS3" },
    { value: "SSS1", name: "SSS1" },
    { value: "SSS2", name: "SSS2" },
    { value: "SSS3", name: "SSS3" },
  ];

  return (
    <>
      <select
        name=""
        id=""
        value={Class}
        onChange={(e) => {
          const SelectedClass = e.target.value;
          setClass(SelectedClass);
        }}
      >
        {classItems.map((Class, index) => (
          <option key={index} value={Class.value}>
            {Class.name}
          </option>
        ))}
      </select>
      {console.log(JSON.stringify(Class))}
    </>
  );
};

export default SelectClass;
