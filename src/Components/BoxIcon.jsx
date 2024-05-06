import React from 'react'
import "./components.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const BoxIcon = (props) => {
     const { faUser, bgColor } = props
  return (
    <div className='boxParent'  style={{ backgroundColor: bgColor ? "#eeb57c" : "whitesmoke", color:  bgColor ?  "whitesmoke" : "#ff8000"  }}>
    <FontAwesomeIcon icon={faUser} className='icon' />
    </div>
  )
}

export default BoxIcon