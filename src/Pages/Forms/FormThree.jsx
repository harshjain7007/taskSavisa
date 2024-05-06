import React from 'react'
import Title from '../../Components/Title'
import { Row, Col } from 'react-bootstrap'
import { TextInput, NumberInput } from '../../Components/Inputs'
import { useSelector } from 'react-redux'

const FormThree = (props) => {
  const { setSelected } = props
  const state = useSelector(state => state.reportAllFeilds)




  // const handleNext = () => {
    

  // }




  return (
    <div>
      <Title title="Medical Center Date" />
      <div className="inputFields">
        <Row>

          <Col xs={12} sm={6} md={6} lg={6}>
            <TextInput name="medical_center_state" val={state.medical_center_state} placeholder="Enter Your State" label="State" />
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <TextInput name="medical_center_city" val={state.medical_center_city} placeholder="Enter Your City" label="City" />
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <NumberInput name="medical_center_postel_code" val={state.medical_center_postel_code} placeholder="Enter Your Postal Code" label="Postal Code" />
          </Col>


          <Col xs={12} sm={6} md={6} lg={6}>
            <TextInput name="medical_center_name" val={state.medical_center_name} placeholder="Medical Center Name" label="Medical Center Name" />
          </Col>

          <Col xs={12} sm={12} md={12} lg={12}>
            <TextInput name="representative_name" placeholder="Enter_Staffing_Representative_Name" val={state.representative_name} label="Staffing Representative Name" />
          </Col>

          <Col xs={12} sm={12} md={12} lg={12}>
            <TextInput name="suit" val={state.suit} placeholder="Enter Suit" label="Suit" />
          </Col>

        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className='formButtons'>
              <button className='myBtn' onClick={() => setSelected(prevState => prevState - 1)}>Back</button>
              <button className='myBtn' type='submit'>Request</button>
            </div>
          </Col>
        </Row>
      </div>


    </div>
  )
}

export default FormThree