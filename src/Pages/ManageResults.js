import React,{useState} from 'react';
// import SelectClass from "../SelectClass";
// import SelectSession from '../SelectSession';
// import SelectTerm from '../SelectTerm';


const ManageResults = () => {
  const [Class, setClass] = useState('');
    const classItems = 
    [
     {value: '', name: '--Selcect Class--', }, 
     {value: 'JSS1', name: 'JSS1', },
     {value: 'JSS2', name: 'JSS2', },
     {value: 'JSS3', name: 'JSS3',},
     {value: 'SSS1', name: 'SSS1', },
     {value: 'SSS2', name: 'SSS2', },
     {value: 'SSS3', name: 'SSS3',}
    
    ]
    const [Session, setSession] = useState('');
    const SessionItems = 
    [
     {value: '', name: '--Selcect Session--', }, 
     {value: '2020/2021', name: '2020/2021', },
     {value: '2021/2022', name: '2021/2022', },
     {value: '2022/2023', name: '2022/2023',},
     
    ]
    const [Term, setTerm] = useState('');
    const TermItems = 
    [
     {value: '', name: '--Selcect term--', }, 
     {value: '1st Term', name: '1st Term', },
     {value: '2nd Term', name: '2nd Term', },
     {value: '3rd Term', name: '3rd Term', }

    ]
  return (
    <>
      ManageResults
      <div className="reg-stu">
      <div className="reg-inp">
        <h6>Choose Class</h6>
        {/* <SelectClass/> */}
        <select name="" id="" value={Class} onChange={ (e) => {
      const SelectedClass = e.target.value;
      setClass(SelectedClass);
    } }>
      {classItems.map((Class, index) => (
                        <option key={index} value={Class.value}>{Class.name}</option>    
       ))}
 
</select>
{ 
console.log(JSON.stringify(Class))}
      </div>
      <div className="reg-inp">
        <h6>Choose Session</h6>
        {/* <SelectSession/> */}
        <select name="" id="" value={Session} onChange={ (e) => {
      const SelectedSession = e.target.value;
      setSession(SelectedSession);
    } }>
      {SessionItems.map((Session, index) => (
                        <option key={index} value={Session.value}>{Session.name}</option>    
       ))}
 
</select>
{ 
console.log(JSON.stringify(Session))}
      </div>
      <div className="reg-inp">
        <h6>Choose Term</h6>
        {/* <SelectTerm/> */}
        <select name="" id="" value={Term} onChange={ (e) => {
      const SelectedTerm = e.target.value;
      setTerm(SelectedTerm);
    } }>
      {TermItems.map((Term, index) => (
                        <option key={index} value={Term.value}>{Term.name}</option>    
       ))}
 
</select>
{ 
console.log(JSON.stringify(Term))}
      </div>
      
      </div>
      <button className="btn">Load</button>
      <button className="btn  margin-left">View All</button>

      <table className='margin-top'>
  <tr>
    <th>S/No.</th>
    <th>Reg No.</th>
    <th>Student Name</th>
    <th>View Result</th>
    
  </tr>
  <tr>
    <td>1</td>
    <td>1234567890</td>
    <td>Tom Riddle</td>
    <td><button className="btn">View Result</button></td>
    
  </tr>
  <tr>
  
  <td>1</td>
    <td>1234567890</td>
    <td>Tom Riddle</td>
    <td><button className="btn">View Result</button></td>
  </tr>
  <tr>
  
  <td>1</td>
    <td>1234567890</td>
    <td>Tom Riddle</td>
    <td><button className="btn">View Result</button></td>
  </tr>
  <tr>
  <td>1</td>
    <td>1234567890</td>
    <td>Tom Riddle</td>
    <td><button className="btn">View Result</button></td>
  </tr>
  <tr>
  <td>1</td>
    <td>1234567890</td>
    <td>Tom Riddle</td>
    <td><button className="btn">View Result</button></td>
  </tr>
  <tr>
  <td>1</td>
    <td>1234567890</td>
    <td>Tom Riddle</td>
    <td><button className="btn">View Result</button></td>
  </tr>
</table>
    </>
  );
}

export default ManageResults;
