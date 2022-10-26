import React from 'react';

const ManageSchoolTraits = () => {
  return (
    <>
      ManageSchoolTraits
      <table>
  <tr>
    <th>S/No.</th>
    <th>Trait Category</th>
    <th>Description</th>
    <th>Action</th>
    
  </tr>
  <tr>
    <td>1</td>
    <td>Social Behaviour</td>
    <td>Measure of students behaviour in social settings</td>
    <td><button className="btn">Add/Remove Trait</button></td>
    
  </tr>
  <tr>
  
  <td>2</td>
    <td>Motor Skills</td>
    <td>Measure of students ability to perform physical tasks</td>
    <td><button className="btn">Add/Remove Trait</button></td>
  </tr>
  
</table>

    </>
  );
}

export default ManageSchoolTraits;
