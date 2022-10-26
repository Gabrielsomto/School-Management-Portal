import React from 'react';

const SchoolTraitRating = () => {
  return (
    <>
      SchoolTraitRating
      <table>
  <tr>
    <th>Rating Description</th>
    <th>Rating Value</th>
    
  </tr>
  <tr>
    <td>Excellent</td>
    <td>5</td>
   
  </tr>
  <tr>
  
  <td>Good</td>
    <td>4</td>
   </tr>
   <tr>
  
  <td>Fair</td>
    <td>3</td>
   </tr>
   <tr>
  
  <td>Poor</td>
    <td>2</td>
   </tr>
   <tr>
  
  <td>Very Poor</td>
    <td>1</td>
   </tr>
  
</table>
<button className="btn margin-top2">Change Format</button>
    </>
  );
}

export default SchoolTraitRating;
