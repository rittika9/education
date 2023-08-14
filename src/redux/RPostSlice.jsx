import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"



export const FetchPost=createAsyncThunk('fetchPostData',async()=>{
    try{
     
const res= await axios.get('https://restapinodejs.onrender.com/api/letest-post')
return res?.data


    }catch(error){
        console.log(error)
    }
})

const initialState={
    post_data:[],
    status:"success"
}

// create slice

export const RPostSlice=createSlice({
    name:"post",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchPost.pending]:(state)=>{
    state.status="loding..."
    state.post_data=null
},

[FetchPost.fulfilled]:(state,{payload})=>{
    state.status='success'
state.post_data=payload
},
[FetchPost.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})