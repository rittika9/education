import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"



export const FetchBanner=createAsyncThunk('fetchBannerData',async()=>{
    try{
     
const res= await axios.get('https://restapinodejs.onrender.com/api/banner')
return res?.data


    }catch(error){
        console.log(error)
    }
})








const initialState={
    banner_data:[],
    status:"success"
}

// create slice

export const BannerSlice=createSlice({
    name:"banner",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchBanner.pending]:(state)=>{
    state.status="loding..."
    state.banner_data=null
},

[FetchBanner.fulfilled]:(state,{payload})=>{
    state.status='success'
state.banner_data=payload
},

[FetchBanner.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})