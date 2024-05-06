import { configureStore } from "@reduxjs/toolkit";
import { reportFeilds } from "./reducer";
import formSlice from "./slices/formSlice";

const store = configureStore({
     reducer:{
          reportAllFeilds: reportFeilds,
          formSubmit : formSlice
     }
})

export default store