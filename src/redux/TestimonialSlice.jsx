import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"



export const FetchTestimonial=createAsyncThunk('fetchTestimonialData',async()=>{
    try{
     
const res= await axios.get('https://restapinodejs.onrender.com/api/testimonial')

// const res= axiosIntance.get('/testimonial')

return res?.data


    }catch(error){
        console.log(error)
    }
})

const initialState={
    testimonial_data:[],
    status:"success"
}

// create slice

export const TestimonialSlice=createSlice({
    name:"testimonial",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchTestimonial.pending]:(state)=>{
    state.status="loding..."
    state.testimonial_data=null
},

[FetchTestimonial.fulfilled]:(state,{payload})=>{
    state.status='success'
state.testimonial_data=payload
},
[FetchTestimonial.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})