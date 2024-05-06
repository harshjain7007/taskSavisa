import React from 'react'
// import Inputs from '../../Components/Inputs'
import { TextInput, DateInput, SelectionInput, NumberInput, TextAreaInput, NumberDateInput } from '../../Components/Inputs'
import Title from '../../Components/Title'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'


const FormOne = (props) => {
  const { setSelected } = props
  const state = useSelector(state => state.reportAllFeilds)

  const handleNext = () => {
    let allFields = [
      "emp_fullname",
      'emp_phone_no',
      'emp_state',
      'emp_city',
      'emp_hotel',
      'emp_social_security',
      'emp_date',
      'employee_address',
      'emp_gender',
      'emp_postal_code',
      'emp_civil_status',
      'emp_degree',
      'emp_hire_date',
      'emp_salary',
      'emp_average_hours_per_week',
      'emp_position_title_second_job',
      'emp_company_name',
      'emp_responsibility',
      'emp_incident_details',
      'emp_incident_date',
      'emp_today_date',
      'emp_incident_time',
      'emp_start_time_shift',
      'emp_workers_compensation_claims',
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
      <Title title="Employee Data" />
      <div className="inputFields">

        <Row>

          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="emp_fullname" placeholder="Enter Your Full Name" label="Full Name" val={state.emp_fullname} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <NumberInput name="emp_phone_no" placeholder="Phone No" label="Telephone Contact" val={state.emp_phone_no} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="emp_state" placeholder="Enter Your State" label="State" val={state.emp_state} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="emp_city" placeholder="Enter Your City" label="City" val={state.emp_city} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="emp_hotel" placeholder="Enter Hotel Name" label="Hotel"
              val={state.emp_hotel} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="emp_social_security" placeholder="Enter Social Security" label="Social Security" val={state.emp_social_security} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <DateInput name="emp_date" placeholder="MM/DD/YY" label="Date" val={state.emp_date} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="employee_address" placeholder="Enter Your Address" label="Employee Address" val={state.employee_address} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <SelectionInput name="emp_gender" placeholder="" label="Gender" options={["", "Male", "Female", "Other"]} val={state.emp_gender} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <NumberInput name="emp_postal_code" placeholder="Enter Your Postal Code" label="Postal Code" val={state.emp_postal_code} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="emp_civil_status" placeholder="Enter Your Civil Status" label="Civil Status" val={state.emp_civil_status} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="emp_degree" placeholder="Enter Your Degree" label="Degree" val={state.emp_degree} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <DateInput name="emp_hire_date" placeholder="MM/DD/YY" label="Date Of Hire" val={state.emp_hire_date} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <NumberInput name="emp_salary" placeholder="Enter Your Salary" label="Salary" val={state.emp_salary} />
          </Col>


          <Col xs={12} sm={6} md={4} lg={4}>
            <NumberInput name="emp_average_hours_per_week" placeholder="Enter Your Hours Per Week" label="Average Hour Per Week" val={state.emp_average_hours_per_week} />
          </Col>


          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="emp_position_title_second_job" placeholder="Enter Your Job Title" label="Position Title Second Job" val={state.emp_position_title_second_job} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="emp_company_name" placeholder="Enter Your Company Name" label="Company_Name" val={state.emp_company_name} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <TextInput name="emp_responsibility" placeholder="" label="Responsibility" val={state.emp_responsibility} />
          </Col>

          <Col xs={12} sm={12} md={12} lg={12}>
            <TextAreaInput name="emp_incident_details" placeholder="" label="Incident Details" val={state.emp_incident_details} />
          </Col>


          <Col xs={12} sm={12} md={6} lg={6}>
            <DateInput name="emp_incident_date" placeholder="MM/DD/YY" label="Date Of Incident" val={state.emp_incident_date} />
          </Col>

          <Col xs={12} sm={12} md={6} lg={6}>
            <DateInput name="emp_today_date" placeholder="MM/DD/YY" label="Today Date" val={state.emp_today_date} />
          </Col>

          <Col xs={12} sm={12} md={6} lg={6}>
            <NumberDateInput name="emp_incident_time" label="Incident Time" val={state?.emp_incident_time} />
          </Col>

          <Col xs={12} sm={12} md={6} lg={6}>
            <NumberDateInput name="emp_start_time_shift" label="Start Time Shift" val={state.emp_start_time_shift} />
          </Col>


          <Col xs={12} sm={12} md={12} lg={12}>
            <TextAreaInput name="emp_workers_compensation_claims" placeholder="" label="Have Had Workers' Compensation Claims Previous" val={state.emp_workers_compensation_claims} />
          </Col>

        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className='formButtons'>
              <button className='myBtn' onClick={handleNext}>Next</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FormOne