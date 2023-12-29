import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({

    name:"users",
    initialState:null,
    reducers:{
        addUser:(store,action)=>{
            return action.payload;
        },
        removeUser:(store,action)=>{
            return null;
        }
    }


});

export const{addUser,removeUser}=UserSlice.actions;

export default UserSlice.reducer;