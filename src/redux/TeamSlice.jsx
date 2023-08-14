import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"



export const FetchTeam=createAsyncThunk('fetchTeamData',async()=>{
    try{
     
const res= await axios.get('https://restapinodejs.onrender.com/api/team')

// const res= axiosIntance.get('/testimonial')

return res?.data


    }catch(error){
        console.log(error)
    }
})

const initialState={
    team_data:[],
    status:"success"
}

// create slice

export const TeamSlice=createSlice({
    name:"team",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchTeam.pending]:(state)=>{
    state.status="loding..."
    state.team_data=null
},

[FetchTeam.fulfilled]:(state,{payload})=>{
    state.status='success'
state.team_data=payload
},
[FetchTeam.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})