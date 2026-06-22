import React from 'react'

function StudentStatus({rollno,name,status}) {
  return (
    <tr>
        <td>{rollno}</td>
        <td>{name}</td>
        <td>{status}</td>
    </tr>
  )
}

export default StudentStatus