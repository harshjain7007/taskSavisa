import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
     formSubmit :  null,
     formSubmitFailed : null,
     loading: false
}


export const Form_Submit = createAsyncThunk("form/Form_Submit", async (data, { rejectWithValue }) => {
     try {
          const config = {
               method: "POST",
               url: "http://16.171.34.145:5000/api/manager/add-accident-report",
               headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYW5hZ2VySWQiOiI2NWI3OGYyZGRlNjcwZmZlNWRiZDY4NDIiLCJlbWFpbCI6InBpeXVzaC52eWFzQHNhdmllc2FpbmZvdGVjaC5jb20iLCJyb2xlIjoiTWFuYWdlciIsImlhdCI6MTcwOTc5MjkxMiwiZXhwIjoyMDE3Mzc2OTEyfQ.VwTxP89LF-tJGLFaHw2vMrDHrQzpTmKU2rvJFgvmU_4`,
                    
                    'Content-Type': 'application/json',
                },
                data,
                referrerPolicy: 'no-referrer-when-downgrade'
          }
          const result = await axios(config);
          return result.data;
     } catch (error) {
          return rejectWithValue(error.response.data)
     }
})


const formSubmitSlice = createSlice({
     name: "form",
     initialState,
     reducers: {
          resetFormSubmit: (state) => {
               state.formSubmit =  null,
               state.formSubmitFailed = null,
               state.loading = false
          }
     },
     extraReducers: (builder) => { 
          builder
          .addCase(Form_Submit.rejected, (state, action) => {
               state.loading = false;
               state.formSubmitFailed = action.payload;
          })
          .addCase(Form_Submit.pending, (state, action) => {
               state.loading = true;
          })
          .addCase(Form_Submit.fulfilled, (state, action) => {
               state.loading = false;
               state.formSubmit = action.payload;
          })

     }
})

export default formSubmitSlice.reducer;
export const { resetFormSubmit } = formSubmitSlice.actions





// ---------------- If you want to send params from clint side to server side then try this :-

// -------------  Calling time send params like this :-
// let data = {
//      params: {
//        page,
//        perPage: rowsPerPage,
//        search: selectorStateSearch === "" ? "all" : selectorStateSearch,
//        type: filterType  === "clear" ? "" : filterType ,
//        selection: filter === "clear" ? "" : filter
//      },
//    }
//    dispatch(All_Listing(data))


// ----------- and get this params  like this :- 
// export const All_Listing = createAsyncThunk(
//      "listing/All_Listing",
//      async (data, { rejectWithValue }) => {
//          const {page = 0, perPage = 10, search = "all", type = '', selection = '' } =  data.params
//          try {
//              const config = {
//                  method: "GET",
//                  url: Base_Url + `user/listings?page=${page + 1}&perPage=${perPage}&search=${search}&type=${type}&selection=${selection}`,
//                  headers: {
//                      Authorization: `Bearer ${Auth_Token()}`,
//                      // 'Content-Type': 'application/json',
//                  },
//                  // data
//              };
//              const results = await axios(config);
//              return results.data;
//          } catch (error) {
//              return rejectWithValue(error.response.data.message);
//          }
//      }
//  );
 