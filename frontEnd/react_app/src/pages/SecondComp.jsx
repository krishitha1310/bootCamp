import React from 'react'
import ThirdComp from './ThirdComp'

function SecondComp({info}) {
    console.log(info)
  return (
    <div>
      <ThirdComp info={info}/>
    </div>
  )
}

export default SecondComp
