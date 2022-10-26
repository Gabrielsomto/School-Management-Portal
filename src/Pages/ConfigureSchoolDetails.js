import React from 'react';

const ConfigureSchoolDetails = () => {
  return (
    <>
      ConfigureSchoolDetails
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>School Name</h6>
        <input type="text"/>
      </div>
      
      
      </div>
      <button className="btn">Save</button>
    <h3 className="margin-top">Set Next Term Resumption Date</h3>
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Next Term Session Starts?</h6>
        <input type="text"/>
      </div>
      
      
      </div>
      <button className="btn">Save Changes</button>
    
      <h3 className="margin-top">Configure School Session and Term</h3>
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Choose Session</h6>
        <input type="text"/>
      </div>
      <div className="reg-inp">
        <h6>Choose Term</h6>
        <input type="text"/>
      </div>
      
      
      </div>
      <button className="btn">Save Changes</button>
    
    </>
  );
}

export default ConfigureSchoolDetails;
