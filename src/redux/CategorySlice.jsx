import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"



export const FetchCategory=createAsyncThunk('fetchCategoryData',async()=>{
    try{
     
const res= await axios.get('https://restapinodejs.onrender.com/api/showallcategory')
return res?.data


    }catch(error){
        console.log(error)
    }
})









const initialState={
    category_data:[],
    status:"success"
}

// create slice

export const CategorySlice=createSlice({
    name:"category",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchCategory.pending]:(state)=>{
    state.status="loding..."
    state.category_data=null
},

[FetchCategory.fulfilled]:(state,{payload})=>{
    state.status='success'
state.category_data=payload
},
[FetchCategory.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})



