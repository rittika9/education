import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"
import swal from "sweetalert"



export const FetchApplycourse= createAsyncThunk('FetchApplyData',async(data)=>{
    try{

        const res=await axios.post(`https://restapinodejs.onrender.com/api/course/apply/${data.course}`,data)
        const responseData = {
            resp: res?.data,
            coursename: data.course_name
        }
        return responseData



    } catch(error){
            console.log(error)
        }
    

})





const initialState={
    applycourse_data:[],
    status:"success",
    applyStatus:"idel"
}

// create slice

export const ApplyCourseSlice=createSlice({
    name:"applycourse",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchApplycourse.pending]:(state)=>{
    state.status="Submiting..."
    state.applycourse_data=null
},

[FetchApplycourse.fulfilled]:(state,{payload})=>{
    state.status='success'
// state.applycourse_data=payload
swal("Congratulations!", `You have successfully applied for ${payload?.coursename}`, "success")
},
[FetchApplycourse.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})