import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isOpen:false
}

export const menuToggle= createSlice({
    name:"menuToggle",
    initialState,
    reducers:{
        setToggle: (state)=>{
            if(state.isOpen){
                state.isOpen=false;
            }else{
                state.isOpen=true;
            }
        }
    }
})

export const {setToggle} = menuToggle.actions;

export default menuToggle.reducer;
