import React from 'react';

const ResultManager = () => {
  return (
    <>
     Veiw Result
     <div className="reg-stu">
      <div className="reg-inp">
        <h6>Choose Class</h6>
        <input type="text"/>
      </div>
      <div className="reg-inp">
        <h6>Choose Session</h6>
        <input type="text"/>
      </div>
      <div className="reg-inp">
        <h6>Choose Term</h6>
        <input type="text"/>
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

export default ResultManager;
