import React,{useState} from 'react';
// import SelectClass from "../SelectClass";
// import SelectSubject from "../SelectSubject";


const SelectSubjectMembers = () => {
  const [ClassMembers, setClassMembers] = useState('');
  const classMembersItems = 
  [
   {value: '', name: '--Selcect Class--', }, 
   {value: 'JSS1', name: 'JSS1', },
   {value: 'JSS2', name: 'JSS2', },
   {value: 'JSS3', name: 'JSS3',},
   {value: 'SSS1', name: 'SSS1', },
   {value: 'SSS2', name: 'SSS2', },
   {value: 'SSS3', name: 'SSS3',}
  
  ]
  const [SubjectMembers, setSubjectMembers] = useState('');
  const SubjectMembersItems = 
  [
   {value: '', name: '--Selcect subject--', }, 
   {value: 'English', name: 'English', },
   {value: 'Maths', name: 'Maths', },
   {value: 'Igbo', name: 'Igbo', }

  ]
  return (
    <>
      SelectSubjectMembers
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Select Class</h6>
        {/* <SelectClass/> */}
        <select name="" id="" value={ClassMembers} onChange={ (e) => {
      const SelectedClassMembers = e.target.value;
      setClassMembers(SelectedClassMembers);
    } }>
      {classMembersItems.map((ClassMembers, index) => (
                        <option key={index} value={ClassMembers.value}>{ClassMembers.name}</option>    
       ))}
 
</select>
{ 
console.log(JSON.stringify(ClassMembers))}
      </div>
      <div className="reg-inp">
        <h6>Select Subject</h6>
        {/* <SelectSubject/> */}
        <select name="" id="" value={SubjectMembers} onChange={ (e) => {
      const SelectedSubjectMembers = e.target.value;
      setSubjectMembers(SelectedSubjectMembers);
    } }>
      {SubjectMembersItems.map((SubjectMembers, index) => (
                        <option key={index} value={SubjectMembers.value}>{SubjectMembers.name}</option>    
       ))}
 
</select>
{ 
console.log(JSON.stringify(SubjectMembers))}
      </div>
      
      </div>
      <button className="btn">Load</button>
    
    </>
  );
}

export default SelectSubjectMembers;
