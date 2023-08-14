import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"



export const FetchService=createAsyncThunk('fetchServiceData',async()=>{
    try{
     
const res= await axios.get('https://restapinodejs.onrender.com/api/service')
return res?.data


    }catch(error){
        console.log(error)
    }
})

const initialState={
    service_data:[],
    status:"success"
}

// create slice

export const ServiceSlice=createSlice({
    name:"service",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchService.pending]:(state)=>{
    state.status="loding..."
    state.service_data=null
},

[FetchService.fulfilled]:(state,{payload})=>{
    state.status='success'
state.service_data=payload
},
[FetchService.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})