import React from 'react';
import SelectClass from "../SelectClass";
import SelectSession from "../SelectSession";


const CreateClass = () => {
  return (
    <>
      CreateClass
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Select Class Level</h6>
        <SelectClass/>
      </div>
      <div className="reg-inp">
        <h6>Select Class Suffix(eg. A, B, Gold, Silver)</h6>
        <input type="text"/>
      </div>
      <div className="reg-inp">
        <h6>Select School Session</h6>
        <SelectSession/>
      </div>
      
      </div>
      <button className="btn">Submit</button>
    
    </>
  );
}

export default CreateClass;
