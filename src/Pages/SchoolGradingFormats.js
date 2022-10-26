import React from 'react';

const SchoolGradingFormats = () => {
  return (
    <>
      SchoolGradingFormats
      <button className="btn margin-bottom">Create New Format</button>
      <p>Format 1</p>

      <table className='margin-top'>
  <tr>
    <th>S/No.</th>
    <th>Description</th>
    <th>Grade</th>
    <th>Min.Score</th>
    <th>Max.Score</th>
   
  </tr>
  <tr>
    <td>1</td>
    <td>Distinction</td>
    <td>A</td>
    <td>70</td>
    <td>100</td>
    
  </tr>
  <tr>
  <td>1</td>
 
    <td>Distinction</td>
    <td>A</td>
    <td>70</td>
    <td>100</td>
    </tr>
    <tr>
 
  <td>1</td>
    <td>Distinction</td>
    <td>A</td>
    <td>70</td>
    <td>100</td>
    </tr>
    <tr>
  <td>1</td>
    <td>Distinction</td>
    <td>A</td>
    <td>70</td>
    <td>100</td>
    </tr>
    <tr>
  
  <td>1</td>
    <td>Distinction</td>
    <td>A</td>
    <td>70</td>
    <td>100</td>
    </tr>
  
    
</table>

<h3 className="margin-top">Assign Grading Format to School Scection</h3>
<table>
  <tr>
    <th>Name</th>
    <th>Short Name</th>
    <th>Assesment Format</th>
    <th>Change Format</th>
    <th>Action</th>

    
  </tr>
  <tr>
    <td>Juniour Secondary</td>
    <td>JSS</td>
    <td>Format 1</td>
    <td><button className="btn">Choose</button></td>
    <td><button className="btn">Save</button></td>

    
  </tr>
  <tr>
  
  <td>Senoir Secondary</td>
    <td>SSS</td>
    <td>Format 1</td>
    <td><button className="btn">Choose</button></td>
    <td><button className="btn">Save</button></td>
</tr>
  
</table>

    </>
  );
}

export default SchoolGradingFormats;
