import React from 'react'

function Alert(props) {
  return (
    <div id="alertPopup">
    {
        props.alert &&  
        <div className="alert alert-danger" role="alert">
          {props.alert.msg}
        </div>

    }
    </div>
  )
}

export default Alert