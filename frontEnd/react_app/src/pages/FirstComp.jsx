import React from 'react'
import SecondComp from './SecondComp'

function FirstComp() {
    const info="message to 3rd component from 1st component"
  return (
    <div>
      <SecondComp info={info}/>
    </div>
  )
}

export default FirstComp
