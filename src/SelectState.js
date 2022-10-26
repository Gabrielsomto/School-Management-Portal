import React, { useState } from "react";

const SelectState = () => {
  const [State, setState] = useState("");
  const stateItems = [
    { value: "", name: "--Selcect State--" },
    { value: "abia", name: "Abia" },
    { value: "adamawa", name: "Adamawa" },
    { value: "akwaibom", name: "Akwaibom" },
    { value: "anambra", name: "Anambra" },
  ];

  return (
    <>
      <select
        name=""
        id=""
        value={State}
        onChange={(e) => {
          const SelectedState = e.target.value;
          setState(SelectedState);
        }}
      >
        {stateItems.map((State, index) => (
          <option key={index} value={State.value}>
            {State.name}
          </option>
        ))}
      </select>
      {console.log(JSON.stringify(State))}
    </>
  );
};

export default SelectState;
