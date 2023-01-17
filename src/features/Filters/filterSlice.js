import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  serverParams:{
    s: "pokemon",
    apikey: '32e9d15',
    page: 1,
    type: "",
    y: ""
  }
};


export const filterSlice = createSlice({
  name: 'filterCenter',
  initialState,

  reducers: {
   handleServerParams: (state, action)=>{
    state.serverParams = action.payload
   }
  },
 
});

export const { handleServerParams } = filterSlice.actions;
export const params = (state) => state.filterCenter.serverParams;

export default filterSlice.reducer;
