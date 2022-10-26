import React,{useState} from 'react';
import CalendarComp from '../Calender';
import CalenderComp from "../Calender";
// import SelectApp from "../SelectApp";
// import SelectState from "../SelectState";




const RegularStaff = () => {

  const StaffBio_Data = {
    FirstName: ''
  };
  const StaffBio_basic = {
    FirstName: ''
  };
  const StaffBio_secondary = {
    FirstName: ''
  };
  const StaffBio_higher = {
    FirstName: ''
  };
  const StaffBio_nysc = {
    Year: ''
  };
  const StaffBio_kin = {
    FirstName: ''
  };
  const [StaffGender, setStaffGender] = useState('');
    const StaffgenderItems = 
    [
     {value: '', name: '--Selcect Gender--', }, 
     {value: 'male', name: 'Male', },
     {value: 'female', name: 'Female', },
     {value: 'other', name: 'Other',}
    ]
    const [StaffOriginState, setStaffOriginState] = useState('');
    const StaffOriginstateItems = 
    [
     {value: '', name: '--Selcect State--', }, 
     {value: 'abia', name: 'Abia', },
     {value: 'adamawa', name: 'Adamawa', },
     {value: 'akwaibom', name: 'Akwaibom',},
     {value: 'anambra', name: 'Anambra',}
    ]
 

  return (
    <>
      Register Staff
      <h3>Bio-Data</h3>
      <div className="reg-stu">
      <div className="reg-inp">
        
        <label htmlFor="firstname"><h6>First Name</h6></label>

        <input type="text"
         id="firstname"
         name="firstname"
         value={StaffBio_Data.FirstName}/>
      </div>
      <div className="reg-inp">
       
        <label htmlFor="MiddleName"> <h6>Middle Name</h6></label>

        <input type="text"
        id="MiddleName"
        name="MiddleName"
        value={StaffBio_Data.MiddleName}/>
      </div>
      <div className="reg-inp">
      
        <label htmlFor="Surname">  <h6>Surname</h6></label>

        <input type="text"
        id="Surname"
        name="Surname"
        value={StaffBio_Data.Surname}/>
      </div>
      <div className="reg-inp">
      
        <label htmlFor="Title">  <h6>Title</h6></label>

        <input type="text"
         id="Title"
         name="Title"
         value={StaffBio_Data.Title}/>
      </div>
      <div className="reg-inp">
      
        <label htmlFor="MaritalStatus">  <h6>Marital Status</h6></label>

        <input type="text"
         id="MaritalStatus"
         name="MaritalStatus"
         value={StaffBio_Data.MaritalStatus}/>
      </div>
      <div className="reg-inp">
        <label htmlFor="DateOfBirth"><h6>Date Of Birth</h6></label>

        <CalenderComp />
      </div>
      <div className="reg-inp">
        
        <label htmlFor="Choose Gender"><h6>Choose Gender</h6></label>

        {/* <SelectApp/> */}
        <select name="" id="" value={StaffGender} onChange={ (e) => {
      const SelectedStaffGender = e.target.value;
      setStaffGender(SelectedStaffGender);
    } }>
      {StaffgenderItems.map((Staffgender, index) => (
                        <option key={index} value={Staffgender.value}>{Staffgender.name}</option>    
       ))}
 
</select>
{ 
console.log(JSON.stringify(StaffGender))}
      </div>
      <div className="reg-inp">
      <label htmlFor="State Of Origin"><h6>State Of Origin</h6></label>
        
        {/* <SelectState/> */}
        <select name="" id="" value={StaffOriginState} onChange={ (e) => {
      const SelectedStaffOriginState = e.target.value;
      setStaffOriginState(SelectedStaffOriginState);
    } }>
      {StaffOriginstateItems.map((StaffOriginState, index) => (
                        <option key={index} value={StaffOriginState.value}>{StaffOriginState.name}</option>    
       ))}
 
</select>
{ 
console.log(JSON.stringify(StaffOriginState))}
      </div>
      <div className="reg-inp">
      <label htmlFor="Local Government Of Origin"><h6>Local Government Of Origin</h6></label>

        
        <input type="text"
        id="Local Government Of Origin"
        name="Local Government Of Origin"
        value={StaffBio_Data.LocalGovernmentOfOrigin}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Hometown"> <h6>Hometown</h6></label>

        <input type="text"
         id="Hometown"
         name="Hometown"
         value={StaffBio_Data.Hometown}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Residential Address"> <h6>Residential Address</h6></label>

       
        <input type="text"
        id="Residential Address"
        name="Residential Address"
        value={StaffBio_Data.ResidentialAddress}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Staff Category"> <h6>Staff Category</h6></label>

        <input type="text"
         id="Staff Category"
         name="Staff Category"
         value={StaffBio_Data.StaffCategory}/>
      </div>
      
      <div className="reg-inp">
      <label htmlFor="Staff Position"><h6>Staff Position</h6></label>

        <input type="text"
         id="Staff Position"
         name="Staff Position"
         value={StaffBio_Data.StaffPosition}/>
      </div>

      <div className="reg-inp">
      <label htmlFor="Email"><h6>Email</h6></label>

        <input type="text"
        id="Email"
        name="Email"
        value={StaffBio_Data.Email}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Religion"> <h6>Religion</h6></label>

        <input type="text"
         id="Religion"
         name="Religion"
         value={StaffBio_Data.Religion}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Denomination"><h6>Denomination</h6></label>

        <input type="text"
        id="Denomination"
        name="Denomination"
        value={StaffBio_Data.Denomination}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Phone Number"> <h6>Phone Number</h6></label>

        <input type="text"
         id="Phone Number"
         name="Phone Number"
         value={StaffBio_Data.PhoneNumber}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Grade Level"><h6>Grade Level</h6></label>

        <input type="text"
        id="Grade Level"
        name="Grade Level"
        value={StaffBio_Data.GradeLevel}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Rank"><h6>Rank</h6></label>

        <input type="text"
         id="Rank"
         name="Rank"
         value={StaffBio_Data.Rank}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Date Of Appointment"><h6>Date Of Appointment</h6></label>

        <CalendarComp/>
      </div>
      <div className="reg-inp">
        <button className="btn margin-top">Upload Signature Image</button>
        <input className='margin-left' type="text"/>
      </div>
      
      </div>

      <h3>Qualifications</h3>
      <h5>Primary/Basic Education(FSLC Optional)</h5>
      <div className="reg-stu">
      <div className="reg-inp">
      <label htmlFor="Institution"><h6>Institution</h6></label>

        <input type="text"
        id="Institution"
        name="Institution"
        value={StaffBio_basic.Institution}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Institution"><h6>Year</h6></label>

        <input type="text"
        id="Year"
        name="Year"
        value={StaffBio_basic.Year}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="FSLC Grade"><h6>FSLC Grade</h6></label>

        <input type="text"
        id="FSLC Grade"
        name="FSLC Grade"
        value={StaffBio_basic.FSLCGrade}/>
      </div>
      <div className="reg-inp">
        <button className="btn margin-top">Upload FSLC CERTIFICATE</button>
        <input className='margin-left' type="text"/>
      </div>
     
      </div>

      <h6>Secondary School Education</h6>
      <div className="reg-stu">
      
      <div className="reg-inp">
      <label htmlFor="Institution"><h6>Institution</h6></label>

        <input type="text"
         id="Institution"
         name="Institution"
         value={StaffBio_secondary.Institution}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Year"> <h6>Year</h6></label>

        <input type="text"
         id="Year"
         name="Year"
         value={StaffBio_secondary.Year}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Certificate Exam Body"><h6>Certificate Exam Body</h6></label>

        <input type="text"
         id="Certificate Exam Body"
         name="Certificate Exam Body"
         value={StaffBio_secondary.CertificateExamBody}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Number of Sittings"> <h6>Number of Sittings</h6></label>

        <input type="text"
         id="Number of Sittings"
         name="Number of Sittings"
         value={StaffBio_secondary.NumberofSittings}/>
      </div>
      
      <div className="reg-inp">
        <button className="btn margin-top">Upload Certificate</button>
        <input className='margin-left' type="text"/>
      </div>
      
      </div>

      
      <h5>SSCE SUBJECTS</h5>
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Subject</h6>
        <input type="text"/>
      </div>
      <div className="reg-inp">
        <h6>Grade</h6>
        <input type="text"/>
      </div>
      </div>
      <button className="btn">ADD</button>

      <h5 className='margin-top'>HIGHER EDUCATION</h5>
      <div className="reg-stu">
      <div className="reg-inp">
      <label htmlFor="Institution Attended"><h6>Institution Attended</h6></label>

        <input type="text"
        id="Institution Attended"
        name="Institution Attended"
        value={StaffBio_higher.InstitutionAttended}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Institution Attended"><h6>Qualification</h6></label>

        <input type="text"
        id="Institution Attended"
        name="Institution Attended"
        value={StaffBio_higher.InstitutionAttended}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Grade"><h6>Grade</h6></label>

        <input type="text"
         id="Grade"
         name="Grade"
         value={StaffBio_higher.Grade}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Course of Study"><h6>Course of Study</h6></label>

        <input type="text"
         id="Course of Study"
         name="Course of Study"
         value={StaffBio_higher.CourseofStudy}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Year"><h6>Year</h6></label>

        <input type="text"
        id="Year"
        name="Year"
        value={StaffBio_higher.Year}/>
      </div>
      <div className="reg-inp">
        <button className="btn margin-top">Upload Certificate</button>
        <input className='margin-left' type="text"/>
      </div>
      
      </div>
      <button className="btn">Add Other Certificate</button>

    
      <h5 className='margin-top'>NYSC CERTIFICATE(IF AVAILABLE)</h5>
      <div className="reg-stu">
      
      <div className="reg-inp">
      <label htmlFor="Year"><h6>Year</h6></label>

        <input type="text"
        id="Year"
        name="Year"
        value={StaffBio_nysc.Year}/>
      </div>
      <div className="reg-inp">
        <button className="btn margin-top">Upload Certificate</button>
        <input className='margin-left' type="text"/>
      </div>
     
      </div>

      <h5 className='margin-top'>NEXT OF KIN DETAILS</h5>
      <div className="reg-stu">
      <div className="reg-inp">
      <label htmlFor="Title"><h6>Title</h6></label>

        <input type="text"
        id="Title"
        name="Title"
        value={StaffBio_kin.Title}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="First Name"><h6>First Name</h6></label>

        <input type="text"
        id="First Name"
        name="First Name"
        value={StaffBio_kin.FirstName}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Middle Name"><h6>Middle Name</h6></label>

        <input type="text"
        id="Middle Name"
        name="Middle Name"
        value={StaffBio_kin.MiddleName}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Surname"> <h6>Surname</h6></label>

        <input type="text"
        id="Surname"
        name="Surname"
        value={StaffBio_kin.Surname}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Address"> <h6>Address</h6></label>

        <input type="text"
        id="Address"
        name="Address"
        value={StaffBio_kin.Address}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Relationship"><h6>Relationship</h6></label>

        <input type="text"
        id="Relationship"
        name="Relationship"
        value={StaffBio_kin.Relationship}/>
      </div>
      <div className="reg-inp">
      <label htmlFor="Phone Number"><h6>Phone Number</h6></label>

        
        <input type="text"
        id="Phone Number"
        name="Phone Number"
        value={StaffBio_kin.PhoneNumber}/>
      </div>
      
      </div>
      <button className="btn">Submit</button>





    </>
  );
}

export default RegularStaff;
