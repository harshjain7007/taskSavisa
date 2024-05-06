import React from 'react'
import Title from '../../Components/Title'
import { Row, Col } from 'react-bootstrap'
import { TextInput, NumberInput } from '../../Components/Inputs'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const FormTwo = (props) => {
  const { setSelected } = props
  const state = useSelector(state => state.reportAllFeilds)

  const handleBack = () => setSelected(prevState => prevState - 1)

  const handleNext = () => {
    let allFields = [
      "supervisor_state",
      "supervisor_city",
      "supervisor_hotel",
      "supervisor_postal_code",
      "supervisor_name",
      "supervisor_phone_no",
      "injured_part",
      "damage",
      "claim_questionable",
      "claim_answer"
    ]

      
      let check = false;
      for(let i of allFields){
        if(state[i] === ""){
          check = false;
          break;
        }
        check = true;
      }

      if(!check){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "We need to fill all input fields !",
        });
      }else{
        setSelected(prevState => prevState + 1)
      }

  }

  return (
    <div>
      <Title title="Supervisor Data" />
      <div className="inputFields">

        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <TextInput name="supervisor_state" val={state.supervisor_state} placeholder="Enter Your State" label="State" />
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <TextInput name="supervisor_city" val={state.supervisor_city} placeholder="Enter Your City" label="City" />
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <TextInput name="supervisor_hotel" val={state.supervisor_hotel} placeholder="Enter Your Hotel Name" label="Hotel" />
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <NumberInput name="supervisor_postal_code" val={state.supervisor_postal_code} placeholder="Enter Your Postal Code" label="Postal Code" />
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <TextInput name="supervisor_name" val={state.supervisor_name} placeholder="Enter Your Supervisor Name" label="Supervisor Name" />
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <NumberInput name="supervisor_phone_no" val={state.supervisor_phone_no} placeholder="Enter_Number_Of_Four" label="Number Of Four" />
          </Col>


          <Col xs={12} sm={12} md={12} lg={12}>
            <TextInput name="injured_part" val={state.injured_part} placeholder="" label="What Part Of The Body Were Injured (left Side, Right Side)" />
          </Col>


          <Col xs={12} sm={12} md={12} lg={12}>
            <TextInput name="damage" val={state.damage} placeholder="" label="What Kind Of Damage? (Cut, Twist, Break etc)" />
          </Col>


          <Col xs={12} sm={12} md={12} lg={12}>
            <TextInput name="claim_questionable" val={state.claim_questionable} placeholder="" label="Do You Have Any Reason To Believe That This Claim Is It Questionable" />
          </Col>

          <Col xs={12} sm={12} md={12} lg={12}>
            <TextInput name="claim_answer" val={state.claim_answer} placeholder="" label="If The Answer Is Yes, Please Explain" />
          </Col>

        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className='formButtons'>
              <button className='myBtn' onClick={handleBack}>Back</button>
              <button className='myBtn' onClick={handleNext}>Next</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FormTwo