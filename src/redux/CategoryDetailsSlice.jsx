import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"




export const FetchCategoryDetails=createAsyncThunk('fetchCategoryDData',async(id)=>{
    try{
     
const res= await axios.get(`https://restapinodejs.onrender.com/api/category/post/${id}`)
return res?.data


    }catch(error){
        console.log(error)
    }
})



const initialState={
    categoryDetails_data:{},
    status:"success"
}

// create slice

export const CategoryDetailsSlice=createSlice({
    name:"categoryDetails",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchCategoryDetails.pending]:(state)=>{
    state.status="loding..."
    state.categoryDetails_data=null
},

[FetchCategoryDetails.fulfilled]:(state,{payload})=>{
    state.status='success'
state.categoryDetails_data=payload
},
[FetchCategoryDetails.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})