import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"



export const FetchCourse=createAsyncThunk('fetchCourseData',async()=>{
    try{
     
const res= await axios.get('https://restapinodejs.onrender.com/api/course')
return res?.data


    }catch(error){
        console.log(error)
    }
})

// Apply Courses......
// export const FetchApplyCourse=async (id)=>{
//     try{

// return await axios.post(`https://restapinodejs.onrender.com/api/course/apply/${id}`)
// // return res


//     }catch(error){
//         console.log("error")
//     }
// }






const initialState={
    course_data:[],
    status:"success"
}

// create slice

export const CoursesSlice=createSlice({
    name:"course",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchCourse.pending]:(state)=>{
    state.status="loding..."
    state.course_data=null
},

[FetchCourse.fulfilled]:(state,{payload})=>{
    state.status='success'
state.course_data=payload
},

[FetchCourse.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})