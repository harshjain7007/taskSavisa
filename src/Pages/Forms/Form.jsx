import React, { useState, useEffect } from 'react'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import FormThree from './FormThree'
import CheckCompletedForms from './CheckCompletedForms'
import "./form.scss"
import { useSelector, useDispatch } from 'react-redux'
import { Form_Submit } from '../../Redux/slices/formSlice'
import Swal from 'sweetalert2'
import { resetFormSubmit } from '../../Redux/slices/formSlice'


const Form = () => {
     const [ selected, setSelected ] = useState(1)
     const dispatch = useDispatch()
     const state = useSelector(state => state.reportAllFeilds)
     const formRes = useSelector(state => state.formSubmit)


     const onSub = (e) => {
      e.preventDefault()
      let allFields = [
        "medical_center_state",
        "medical_center_city",
        "medical_center_postel_code",
        "medical_center_name",
        "representative_name",
        "suit"
      ]
  
  
      let check = false;
      for (let i of allFields) {
        if (state[i] === "") {
          check = false;
          break;
        }
        check = true;
      }
  
      if (!check) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "We need to fill all input fields !",
        });
      }else{
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Submit"
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(Form_Submit(state))
          }
        });
      }
     }


     useEffect(() => {
      if(formRes?.formSubmit?.status){
        setSelected(1)
        dispatch(resetFormSubmit())
        Swal.fire({
              title: "Submited!",
              text: formRes?.message,
              icon: "success"
            });
      }
      if(formRes?.formSubmitFailed){
        dispatch(resetFormSubmit())
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Internal Server Error!",
        });
      }
     }, [formRes?.formSubmit, formRes?.formSubmitFailed])



  
   return <> 
   <CheckCompletedForms selected={selected} />
   <div className='myFormContainer'>
   {formRes?.loading ? <><h1>Loading...</h1></> :
   <form onSubmit={onSub} >
     { selected === 1 &&  <FormOne setSelected={setSelected} /> }
     { selected === 2 &&  <FormTwo setSelected={setSelected} /> }
     { selected === 3 &&  <FormThree setSelected={setSelected} /> }
   </form>}
   </div>
   </>
  }


export default Form


//   {/* switch (selected) {
//      case 1: return 
//      case 2: return <FormTwo setSelected={setSelected} />
//      case 3: return <FormThree setSelected={setSelected} />
//       } */}
      
