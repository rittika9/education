import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"




export const FetchBDetails= createAsyncThunk('FetchBDetailsdata',async(id)=>{
    try{

        const res=await axios.get(`https://restapinodejs.onrender.com/api/blogdetails/${id}`)
        return res?.data?.data



    } catch(error){
            console.log(error)
        }
    

})


const initialState={
    blogDetails_data:{},
    status:"success"
}

// create slice

export const BlogDetailsSlice=createSlice({
    name:"blogDetails",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchBDetails.pending]:(state)=>{
    state.status="loding..."
    state.blogDetails_data=null
},

[FetchBDetails.fulfilled]:(state,{payload})=>{
    state.status='success'
state.blogDetails_data=payload
},
[FetchBDetails.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})