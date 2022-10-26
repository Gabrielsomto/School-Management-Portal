import React,{useState} from 'react';
// import SelectClass from "../SelectClass";


const ManageClassMembers = () => {
  const [ManageClass, setManageClass] = useState('');
  const ManageclassItems = 
  [
   {value: '', name: '--Selcect Class--', }, 
   {value: 'JSS1', name: 'JSS1', },
   {value: 'JSS2', name: 'JSS2', },
   {value: 'JSS3', name: 'JSS3',},
   {value: 'SSS1', name: 'SSS1', },
   {value: 'SSS2', name: 'SSS2', },
   {value: 'SSS3', name: 'SSS3',}
  
  ]

  return (
    <>
      ManageClassMembers
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Choose Class</h6>
        {/* <SelectClass/> */}
        <select name="" id="" value={ManageClass} onChange={ (e) => {
      const SelectedManageClass = e.target.value;
      setManageClass(SelectedManageClass);
    } }>
      {ManageclassItems.map((ManageClass, index) => (
                        <option key={index} value={ManageClass.value}>{ManageClass.name}</option>    
       ))}
 
</select>
{ 
console.log(JSON.stringify(ManageClass))}
      </div>
      
      
      </div>
      <button className="btn">Load</button>
    </>
  );
}

export default ManageClassMembers;
