import React, { useState } from "react";

const SelectApp = () => {
  const [Gender, setGender] = useState("none");
  const genderItems = [
    { value: "", name: "--Selcect Gender--" },
    { value: "male", name: "Male" },
    { value: "female", name: "Female" },
    { value: "other", name: "Other" },
  ];

  return (
    <>
      <select
        name=""
        id=""
        value={Gender}
        onChange={(e) => {
          const SelectedGender = e.target.value;
          setGender(SelectedGender);
        }}
      >
        {genderItems.map((gender, index) => (
          <option key={index} value={gender.value}>
            {gender.name}
          </option>
        ))}
      </select>
      {console.log(JSON.stringify(Gender))}
    </>
  );
};

export default SelectApp;
