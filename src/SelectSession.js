import React, { useState } from "react";

const SelectSession = () => {
  const [Session, setSession] = useState("");
  const SessionItems = [
    { value: "", name: "--Selcect Session--" },
    { value: "2020/2021", name: "2020/2021" },
    { value: "2021/2022", name: "2021/2022" },
    { value: "2022/2023", name: "2022/2023" },
  ];

  return (
    <>
      <select
        name=""
        id=""
        value={Session}
        onChange={(e) => {
          const SelectedSession = e.target.value;
          setSession(SelectedSession);
        }}
      >
        {SessionItems.map((Session, index) => (
          <option key={index} value={Session.value}>
            {Session.name}
          </option>
        ))}
      </select>
      {console.log(JSON.stringify(Session))}
    </>
  );
};

export default SelectSession;
