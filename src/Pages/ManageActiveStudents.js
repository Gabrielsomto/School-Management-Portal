import React from 'react';
import SelectSession from '../SelectSession';
import SelectTerm from "../SelectTerm";
import SelectClass from "../SelectClass";


const ManageActiveStudents = () => {
  return (
    <>
      ManageActiveStudents
      SelectSubjectMembers
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Select Class</h6>
        <SelectClass/>
      </div>
      <div className="reg-inp">
        <h6>Select Session</h6>
        <SelectSession/>
      </div>
      <div className="reg-inp">
        <h6>Select Term</h6>
        <SelectTerm/>
      </div>
      
      </div>
      <button className="btn">Load</button>
    
    </>
  );
}

export default ManageActiveStudents;
