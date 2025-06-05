import React from 'react'

function Alert(props) {
    console.log(props.alert);
  return (
    props.alert && (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type} </strong>:{props.alert.msg}
   
    </div>)
  )
}

export default Alert
