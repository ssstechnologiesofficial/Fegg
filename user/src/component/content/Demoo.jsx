import React from 'react'

const Demoo = ({name , age , pancard} ) => {
  return (
    <>
    <div>name = {name}</div>
    <h4> {age >18 ? <h1>you can drive</h1> : <h1>you can't drive</h1> }  </h4>

     <h1> {pancard == true ? <h2>you can apply</h2> : <h2>you can't apply</h2> } </h1>

    </>
  )
}

export default Demoo