import { createReducer } from "@reduxjs/toolkit";

const initialState = {
     "emp_fullname": "",    
     "emp_phone_no": "",    
     "emp_state":"",    
     "emp_city": "",    
     "emp_hotel": "",    
      "emp_social_security":"",
      "emp_date": "",    
      "employee_address":"",    
      "emp_gender": "",    
      "emp_postal_code":"",    
      "emp_civil_status":"",    
      "emp_degree":"",    
      "emp_hire_date":"",    
      "emp_salary":"",    
      "emp_average_hours_per_week":"",    
      "emp_position_title_second_job":"",    
      "emp_company_name" :"",    
      "emp_responsibility" :"",    
      "emp_incident_details" :"",   
      "emp_incident_date":"",  // 12/12/2023   
      "emp_today_date" :"", // "20/11/2023"   
      "emp_incident_time":"",  // "10:30"    
      "emp_start_time_shift":"", // "04:50"    
      "emp_workers_compensation_claims":"",    
      "supervisor_state" :"",    
      "supervisor_city":"",    
      "supervisor_hotel" :"",    
      "supervisor_postal_code":"" ,    
      "supervisor_name" :"",    
      "supervisor_phone_no":"" ,     
      "injured_part":"",     
      "damage":"",     
      "claim_questionable":"",    
      "claim_answer":"" ,     
      "medical_center_state":"",    
      "medical_center_city" :"",     
      "medical_center_postel_code":"",     
      "medical_center_name":"",     
      "representative_name":"",     
      "suit":"",
}


export const reportFeilds = createReducer(initialState, (builder) => {
     builder
     .addCase('emp_fullname', (state, action) => {
          state.emp_fullname = action.payload;
     })
     .addCase('emp_phone_no', (state, action) => {
          state.emp_phone_no = action.payload
     })
     .addCase('emp_state', (state, action) => {
          state.emp_state = action.payload
     })
     .addCase('emp_city', (state, action) => {
               state.emp_city = action.payload
     })
     .addCase('emp_hotel', (state, action) => {
          state.emp_hotel = action.payload
     })
     .addCase('emp_social_security', (state, action) => {
          state.emp_social_security = action.payload
     })
     .addCase('emp_date', (state, action) => {
          state.emp_date = action.payload
     })
     .addCase('employee_address', (state, action) => {
          state.employee_address = action.payload
     })
     .addCase('emp_gender', (state, action) => {
          state.emp_gender = action.payload
     })
     .addCase('emp_postal_code', (state, action) => {
          state.emp_postal_code = action.payload
     })
     .addCase('emp_civil_status', (state, action) => {
          state.emp_civil_status = action.payload
     })
     .addCase('emp_degree', (state, action) => {
          state.emp_degree = action.payload
     })
     .addCase('emp_hire_date', (state, action) => {
          state.emp_hire_date = action.payload
     })
     .addCase('emp_salary', (state, action) => {
          state.emp_salary = action.payload
     })
     .addCase('emp_average_hours_per_week', (state, action) => {
          state.emp_average_hours_per_week = action.payload
     })
     .addCase('emp_position_title_second_job', (state, action) => {
          state.emp_position_title_second_job = action.payload
     })
     .addCase('emp_company_name', (state, action) => {
          state.emp_company_name = action.payload
     })
     .addCase('emp_responsibility', (state, action) => {
          state.emp_responsibility = action.payload
     })
     .addCase('emp_incident_details', (state, action) => {
          state.emp_incident_details = action.payload
     })
     .addCase('emp_incident_date', (state, action) => {
          state.emp_incident_date = action.payload
     })
     .addCase('emp_today_date', (state, action) => {
          state.emp_today_date = action.payload
     })
     .addCase('emp_incident_time', (state, action) => {
          state.emp_incident_time = action.payload
     })
     .addCase('emp_start_time_shift', (state, action) => {
          state.emp_start_time_shift = action.payload
     })
     .addCase('emp_workers_compensation_claims', (state, action) => {
          state.emp_workers_compensation_claims = action.payload
     })


     .addCase('supervisor_state', (state, action) => {
          state.supervisor_state = action.payload
     })
     .addCase('supervisor_city', (state, action) => {
          state.supervisor_city = action.payload
     })
     .addCase('supervisor_hotel', (state, action) => {
          state.supervisor_hotel = action.payload
     })
     .addCase('supervisor_postal_code', (state, action) => {
          state.supervisor_postal_code = action.payload
     })
     .addCase('supervisor_name', (state, action) => {
          state.supervisor_name = action.payload
     })
     .addCase('supervisor_phone_no', (state, action) => {
          state.supervisor_phone_no = action.payload
     })
     .addCase('injured_part', (state, action) => {
          state.injured_part = action.payload
     })
     .addCase('damage', (state, action) => {
          state.damage = action.payload
     })
     .addCase('claim_questionable', (state, action) => {
          state.claim_questionable = action.payload
     })
     .addCase('claim_answer', (state, action) => {
          state.claim_answer = action.payload
     })


     .addCase('medical_center_state', (state, action) => {
          state.medical_center_state = action.payload
     })
     .addCase('medical_center_city', (state, action) => {
          state.medical_center_city = action.payload
     })
     .addCase('medical_center_postel_code', (state, action) => {
          state.medical_center_postel_code = action.payload
     })
     .addCase('medical_center_name', (state, action) => {
          state.medical_center_name = action.payload
     })
     .addCase('representative_name', (state, action) => {
          state.representative_name = action.payload
     })
     .addCase('suit', (state, action) => {
          state.suit = action.payload
     })
})


