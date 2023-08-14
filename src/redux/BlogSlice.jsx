import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"



export const FetchBlog=createAsyncThunk('fetchUserData',async()=>{
    try{
     
const res= await axios.get('https://restapinodejs.onrender.com/api/allBlog')
return res?.data


    }catch(error){
        console.log(error)
    }
})



const initialState={
    blog_data:[],
    status:"success"
}

// create slice

export const BlogSlice=createSlice({
    name:"blog",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchBlog.pending]:(state)=>{
    state.status="loding..."
    state.blog_data=null
},

[FetchBlog.fulfilled]:(state,{payload})=>{
    state.status='success'
state.blog_data=payload
},
[FetchBlog.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})