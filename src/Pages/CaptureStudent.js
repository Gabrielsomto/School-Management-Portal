import React from 'react';
import SelectClass from "../SelectClass";


const CaptureStudent = () => {
  return (
    <>
      CaptureStudent
     
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Select Class</h6>
        <SelectClass/>
      </div>
      <div className="reg-inp">
        <h6>Select Student</h6>
        <input type="text"/>
      </div>
      
      </div>
      <button className="btn">Save Photo</button>
    </>
  );
}

export default CaptureStudent;
