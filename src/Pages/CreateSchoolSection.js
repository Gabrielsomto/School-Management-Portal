import React from 'react';

const CreateSchoolSection = () => {
  return (
    <>
      CreateSchoolSection
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Section Name</h6>
        <input type="text"/>
      </div>
      <div className="reg-inp">
        <h6>Section Short Name(eg. Pri, Jss, SSS,)</h6>
        <input type="text"/>
      </div>
      <div className="reg-inp">
        <h6>Section Head</h6>
        <input type="text"/>
      </div>
      <div className="reg-inp">
      <button className="btn">Upload Signature</button>
        <input type="text"/>
      </div>
      </div>
      <button className="btn">Submit</button>
    
    </>
  );
}

export default CreateSchoolSection;
