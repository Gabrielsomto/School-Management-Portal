import React, { useState } from "react";
import CalenderComp from "../Calender";
// import SelectApp from "../SelectApp";
// import SelectState from "../SelectState";
// import SelectClass from "../SelectClass";

const RegisterStudent = () => {
  const StudentBio_Data = {
    firstName: "",
    middleName: "",
    Dateofbirth: "",
    StudentGender: "",
    hometown: "",
    stateoforigin: "",
    LGA: "",
    stateofresidence: "",
    residenceaddress: "",
    residencecity: "",
    phonenumber: "",
    religion: "",
    denomination: "",
    dateofadmission: "",
    currentclass: "",

  };

  const parent_info = {
    fatherfirstName: "",
    fathermiddleName: "",
    fathersurname: "",
    fatherphonenumber: "",
    fathertitle: "",
    fatheroccupation: "",
    fatheraddress: "",
    fatherphone: "",
    motherfirstName: "",
    mothermiddleName: "",
    mothersurname: "",
    motherphonenumber: "",
    mothertitle: "",
    motherfoccupation: "",
    motherofficeaddress: "",
    motherofficephone: "",
    doctorname: '',
    doctorphone: '',
    doctoraddress: ''
    
  };

  const medical_info = {
    healthchallenge: "",
    physicalchallenge: "",
    
    
  };



  const [StudentGender, setStudentGender] = useState("");
  const StudentgenderItems = [
    { value: "", name: "--Selcect Gender--" },
    { value: "male", name: "Male" },
    { value: "female", name: "Female" },
    { value: "other", name: "Other" },
  ];
  const [StateOrigin, setStateOrigin] = useState("");
  const stateOriginItems = [
    { value: "", name: "--Selcect State--" },
    { value: "abia", name: "Abia" },
    { value: "adamawa", name: "Adamawa" },
    { value: "akwaibom", name: "Akwaibom" },
    { value: "anambra", name: "Anambra" },
  ];
  const [StateResidence, setStateResidence] = useState("");
  const stateResidenceItems = [
    { value: "", name: "--Selcect State--" },
    { value: "abia", name: "Abia" },
    { value: "adamawa", name: "Adamawa" },
    { value: "akwaibom", name: "Akwaibom" },
    { value: "anambra", name: "Anambra" },
  ];
  const [RegisterClass, setRegisterClass] = useState("");
  const RegisterclassItems = [
    { value: "", name: "--Selcect Class--" },
    { value: "JSS1", name: "JSS1" },
    { value: "JSS2", name: "JSS2" },
    { value: "JSS3", name: "JSS3" },
    { value: "SSS1", name: "SSS1" },
    { value: "SSS2", name: "SSS2" },
    { value: "SSS3", name: "SSS3" },
  ];

  return (
    <>
      RegisterStudent
      <h3>Bio-Data</h3>
      <form action="">
        <div className="reg-stu">
          <div className="reg-inp">
            <label htmlFor="firstname"><h6>firstname :</h6></label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={StudentBio_Data.firstName}
            />
          </div>
          <div className="reg-inp">
            <label htmlFor="middleName"><h6>middleName :</h6></label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={StudentBio_Data.middleName}
            />
          </div>
          <div className="reg-inp">
            <label htmlFor="dateofbirth"><h6>date of birth :</h6></label>
            <div className="calenderWrap">
              <CalenderComp />
            </div>
          </div>
          <div className="reg-inp">
            {/* <SelectApp/> */}
            <label htmlFor="StudentGender"><h6>Student Gender :</h6></label>

            <select
              name="StudentGender"
              id="StudentGender"
              value={StudentGender}
              onChange={(e) => {
                const SelectedStudentGender = e.target.value;
                setStudentGender(SelectedStudentGender);
              }}
            >
              {StudentgenderItems.map((Studentgender, index) => (
                <option key={index} value={Studentgender.value}>
                  {Studentgender.name}
                </option>
              ))}
            </select>
            {console.log(JSON.stringify(StudentGender))}
          </div>
          <div className="reg-inp">
            <label htmlFor="hometown"><h6>hometown :</h6></label>
            <input
              type="text"
              id="hometown"
              name="hometown"
              value={StudentBio_Data.hometown}
            />
          </div>
          <div className="reg-inp">
            {/* <SelectState/> */}
            <label htmlFor="stateoforigin"><h6>state of origin :</h6></label>
            <select
              name="stateoforigin"
              id="stateoforigin"
              value={StateOrigin}
              onChange={(e) => {
                const SelectedStateOrigin = e.target.value;
                setStateOrigin(SelectedStateOrigin);
              }}
            >
              {stateOriginItems.map((StateOrigin, index) => (
                <option key={index} value={StateOrigin.value}>
                  {StateOrigin.name}
                </option>
              ))}
            </select>
            {console.log(JSON.stringify(StateOrigin))}
          </div>
          <div className="reg-inp">
            <label htmlFor="LGA"><h6>LGA of origin :</h6></label>
            <input
              type="text"
              id="LGA"
              name="LGA"
              value={StudentBio_Data.LGA}
            />
          </div>
          <div className="reg-inp">
            {/* <SelectState/> */}
            <label htmlFor="stateofresidence"><h6>state of residence :</h6></label>

            <select
              name="stateofresidence"
              id="stateofresidence"
              value={StateResidence}
              onChange={(e) => {
                const SelectedStateResidence = e.target.value;
                setStateResidence(SelectedStateResidence);
              }}
            >
              {stateResidenceItems.map((StateResidence, index) => (
                <option key={index} value={StateResidence.value}>
                  {StateResidence.name}
                </option>
              ))}
            </select>
            {console.log(JSON.stringify(StateResidence))}
          </div>
          <div className="reg-inp">
            <label htmlFor="residenceaddress"><h6>residence address :</h6></label>
            <input
              type="text"
              id="residenceaddress"
              name="Residencial Address"
              value={StudentBio_Data.residenceaddress}
            />
          </div>
          <div className="reg-inp">
            <label htmlFor="residencecity"><h6>residence city :</h6></label>
            <input
              type="text"
              id="residencecity"
              name="residence city"
              value={StudentBio_Data.residencecity}
            />
          </div>
          <div className="reg-inp">
            <label htmlFor="phonenumber"><h6>phone number :</h6></label>
            <input
              type="text"
              id="phonenumber"
              name="phone number"
              value={StudentBio_Data.phonenumber}
            />
          </div>
          <div className="reg-inp">
            <label htmlFor="religion"><h6>religion :</h6></label>
            <input
              type="text"
              id="religion"
              name="religion"
              value={StudentBio_Data.religion}
            />
          </div>

          <div className="reg-inp">
            <label htmlFor="denomination"><h6>denomination :</h6></label>
            <input
              type="text"
              id="denomination"
              name="denomination"
              value={StudentBio_Data.denomination}
            />
          </div>
        </div>
      </form>
      <h3>Education</h3>
      <div className="reg-stu">
        <div className="reg-inp">
          <label htmlFor="dateofadmission"><h6>date of admission :</h6></label>
          <CalenderComp />
        </div>
        <div className="reg-inp">
          {/* <SelectClass/> */}
          <label htmlFor="currentclass"><h6>current class :</h6></label>

          <select
            name="current class"
            id="currentclass"
            value={RegisterClass}
            onChange={(e) => {
              const SelectedRegisterClass = e.target.value;
              setRegisterClass(SelectedRegisterClass);
            }}
          >
            {RegisterclassItems.map((RegisterClass, index) => (
              <option key={index} value={RegisterClass.value}>
                {RegisterClass.name}
              </option>
            ))}
          </select>
          {console.log(JSON.stringify(RegisterClass))}
        </div>
      </div>
     
      
      
      
      
      <h3>Parent/Guardian Information</h3>
      <h5 className="margin-bottom">
        This refers to who the student is currently living with
      </h5>
      <p>
        <strong>Father's Information</strong>
      </p>
     
     
      <div className="reg-stu">
        <div className="reg-inp">
         
          <label htmlFor="fatherfirstname"> <h6>Father's Firstname</h6></label>
            <input
              type="text"
              id="fatherfirstname"
              name="fatherfirstname"
              value={parent_info.fatherfirstname}/> 
                     </div>
        <div className="reg-inp">
         
          <label htmlFor="fathermiddleName">  <h6>Father's Middle Name</h6></label>
          <input type="text" 
          id="fathermiddleName"
          name="fathermiddleName"
          value={parent_info.fathermiddleName}/>
        </div>
        <div className="reg-inp">
         
          <label htmlFor="fathersurname"> <h6>Father's surname</h6></label>

          <input type="text" 
           id="fathersurname"
           name="fathersurname"
           value={parent_info.fathersurname}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="fathertitle"><h6>Father's Title</h6></label>

          <input type="text" 
           id="fathertitle"
           name="fathertitle"
           value={parent_info.fathertitle}/>
        </div>
        <div className="reg-inp">
         
          <label htmlFor="fatherphonenumber"><h6>Father's Phone Number</h6></label>

          <input type="text" 
           id="fatherphonenumber"
           name="fatherphonenumber"
           value={parent_info.fatherphonenumber}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="fatheroccupation"><h6>Father's Occupation</h6></label>

          <input type="text" 
          id="fatheroccupation"
          name="fatheroccupation"
          value={parent_info.fatheroccupation}/>
        </div>
       
        <div className="reg-inp">
          
          <label htmlFor="fatheraddress"><h6>Father's Office Address</h6></label>

          <input type="text" 
           id="fatheraddress"
           name="fatheraddress"
           value={parent_info.fatheraddress}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="fatherphone"><h6>Father's Office Phone Number</h6></label>

          <input type="text" 
           id="fatherphone"
           name="fatherphone"
           value={parent_info.fatherphone}/>
        </div>
      </div>
      <p>
        <strong>Mother's Information</strong>
      </p>
      <div className="reg-stu">
        <div className="reg-inp">
         
          <label htmlFor="motherfirstName"> <h6>Mother's First Name</h6></label>

          <input type="text" 
          id="motherfirstName"
          name="motherfirstName"
          value={parent_info.motherfirstName}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="mothermiddleName"><h6>Mother's Middle Name</h6></label>

          <input type="text" 
          id="mothermiddleName"
          name="mothermiddleName"
          value={parent_info.mothermiddleName}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="mothermiddleName"><h6>Mother's Surname</h6></label>

          <input type="text" 
          id="mothersurname"
          name="mothersurname"
          value={parent_info.mothersurname}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="mothertitle"><h6>Mother's Title</h6></label>

          <input type="text" 
           id="mothertitle"
           name="mothertitle"
           value={parent_info.mothertitle}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="motherphonenumber"><h6>Mother's Phone Number</h6></label>

          <input type="text" 
          id="motherphonenumber"
          name="motherphonenumber"
          value={parent_info.motherphonenumber}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="motherfoccupation"><h6>Mother's Occupation</h6></label>

          <input type="text" 
          id="motherfoccupation"
          name="motherfoccupation"
          value={parent_info.motherfoccupation}/>
        </div>
        
        <div className="reg-inp">
         
          <label htmlFor="motherofficeaddress"> <h6>Mother's Office Address</h6></label>

          <input type="text" 
          id="motherofficeaddress"
          name="motherofficeaddress"
          value={parent_info.motherofficeaddress}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="motherofficephone"> <h6>Mother's Office Phone Number</h6></label>

          <input type="text" 
          id="motherofficephone"
          name="motherofficephone"
          value={parent_info.motherofficephone}/>
        </div>
        <div className="reg-inp">
         
          <label htmlFor="doctorname"> <h6>Family Doctor's Name</h6></label>

          <input type="text" 
          id="doctorname"
          name="doctorname"
          value={parent_info.doctorname}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="doctorphone"><h6>Family Doctor's Number</h6></label>

          <input type="text" 
           id="doctorphone"
           name="doctorphone"
           value={parent_info.doctorphone}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="doctoraddress"><h6>Family Doctor's Hospital Address</h6></label>

          <input type="text" 
          id="doctoraddress"
          name="doctoraddress"
          value={parent_info.doctoraddress}/>
        </div>
      </div>
      <h3>Medical Information</h3>
      <div className="reg-stu">
        <div className="reg-inp">
          
          <label htmlFor="healthchallenge"><h6>Health Challenges</h6></label>

          <input type="text" 
          id="healthchallenge"
          name="healthchallenge"
          value={medical_info.healthchallenge}/>
        </div>
        <div className="reg-inp">
          
          <label htmlFor="physicalchallenge"><h6>Physical Challenges</h6></label>

          <input type="text" 
           id="physicalchallenge"
           name="physicalchallenge"
           value={medical_info.physicalchallenge}/>
        </div>
      </div>
      <div className="reg-inp">
        <button className="btn">Submit</button>
      </div>
    </>
  );
};

export default RegisterStudent;
