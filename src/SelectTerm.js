import React, { useState } from "react";

const SelectTerm = () => {
  const [Term, setTerm] = useState("");
  const TermItems = [
    { value: "", name: "--Selcect term--" },
    { value: "1st Term", name: "1st Term" },
    { value: "2nd Term", name: "2nd Term" },
    { value: "3rd Term", name: "3rd Term" },
  ];

  return (
    <>
      <select
        name=""
        id=""
        value={Term}
        onChange={(e) => {
          const SelectedTerm = e.target.value;
          setTerm(SelectedTerm);
        }}
      >
        {TermItems.map((Term, index) => (
          <option key={index} value={Term.value}>
            {Term.name}
          </option>
        ))}
      </select>
      {console.log(JSON.stringify(Term))}
    </>
  );
};

export default SelectTerm;
