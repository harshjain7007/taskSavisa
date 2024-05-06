import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import "./components.scss"
import { Row, Col } from 'react-bootstrap'



export const TextInput = (props) => {
  const { name, placeholder, label, val } = props
  const dispatch = useDispatch()
  

  const handleChng = (e) => {
    const { name, value } = e.target
    dispatch({ type: name, payload: value })
  }

  return (
    <div className='inpContainer'>
      <label htmlFor={name} className='labelTxt'>{label}</label>
      <input type="text" className='textInp' onChange={handleChng} id={name} name={name} placeholder={placeholder} value={val} />
    </div>
  )
}


export const NumberInput = (props) => {
  const { name, placeholder, label, val } = props
  const dispatch = useDispatch()

  const handleChng = (e) => {
    const { name, value } = e.target
    dispatch({ type: name, payload: String(value) })
  }

  return (
    <div className='inpContainer'>
      <label htmlFor={name} className='labelTxt'>{label}</label>
      <input type="number" className='textInp' onChange={handleChng} id={name} name={name} placeholder={placeholder} value={val} />  
    </div>
  )
}


export const DateInput = (props) => {
  const { name, placeholder, label, val } = props
  const dispatch = useDispatch()

  const handleChng = (e) => {
    const { name, value } = e.target
    dispatch({ type: name, payload: value })
  } 

  return (
    <div className='inpContainer'>
      <label htmlFor={name} className='labelTxt'>{label}</label>
      <input type="date" className='textInp' onChange={handleChng} id={name} name={name} placeholder={placeholder} value={val}  />
    </div>
  )
}




export const SelectionInput = (props) => {
  const { name, placeholder, label, options, val } = props
  const dispatch = useDispatch()

  const handleChng = (e) => {
    const { name, value } = e.target
    dispatch({ type: name, payload: value })
  }

  return (
    <div className='inpContainer'>
      <label htmlFor={name} className='labelTxt'>{label}</label>
      <select type="text" name={name} id={name} onChange={handleChng} placeholder={placeholder} className='textInp' value={val}>
        {options?.map((curElem, index) => {
          return <option key={index} value={curElem}>{curElem}</option>
        })}
      </select>
    </div>
  )
}



export const TextAreaInput = (props) => {
  const { name, placeholder, label, val } = props
  const dispatch = useDispatch()

  const handleChng = (e) => {
    const { name, value } = e.target
    dispatch({ type: name, payload: value })
  }

  return (
    <div className='inpContainer'>
      <label htmlFor={name} className='labelTxt'>{label}</label>
      <textarea className='textInp ' onChange={handleChng} id={name} name={name} placeholder={placeholder} rows='4' cols="50" value={val} >
      </textarea>
    </div>
  )
}




export const NumberDateInput = (props) => {
  const [ time, setTime ] = useState({ hours: "00", minutes: "00" })

  const { name, label, val } = props
  const dispatch = useDispatch()

  const handleChng = (e) => {
    const { name, value } = e.target
    setTime(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  useEffect(() => {
    dispatch({ type: name, payload: String(time?.hours + ":" + time?.minutes) })
  }, [time?.hours, time?.minutes])

  return (
    <div className='inpContainer'>
      <label htmlFor={name} className='labelTxt'>{label}</label>
      <Row>
        <Col xs={3} sm={3} md={3} lg={3}>
        {/* <label htmlFor={name} className='labelTxt'>Hours</label> */}
          <input type="number" className='textInp' onChange={handleChng} id={name} name={"hours"} placeholder={"Hours"} maxLength={2} value={time?.hours}  />
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
        {/* <label htmlFor={name} className='labelTxt'>Minutes</label> */}
          <input type="number" className='textInp' onChange={handleChng} id={name} name={"minutes"} placeholder={"Minutes"} maxLength={2} value={time?.minutes} />
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
        <select type="text" name={name} id={name} className='textInp'>
        {["AM", "PM"]?.map((curElem, index) => {
          return <option key={index} value={curElem}>{curElem}</option>
        })}
      </select>
        </Col>
      </Row>
    </div>
  )
}