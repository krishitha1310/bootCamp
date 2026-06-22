import React, { use } from 'react'

function Students() {
  const user=useContext(useContext)
  console.log(user)
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default Students

