import React from 'react';
import SelectClass from "../SelectClass";


const CaptureStaff = () => {
  return (
    <>
      CaptureStaff
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Select Class</h6>
        <SelectClass/>
      </div>
      <div className="reg-inp">
        <h6>Select Staff</h6>
        <input type="text"/>
      </div>
      
      </div>
      <button className="btn">Save Photo</button>
    </>
  );
}

export default CaptureStaff;
