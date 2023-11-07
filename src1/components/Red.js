import React from 'react'

const Red = ({name, onClick}) => { //destructuring
    console.log(name)
    var {a}={'a':11,'b':23}
    console.log(a)
    onClick('재오')
  return (
    <div>Red</div>
  )
}

export default Red
// rafc 자동완성