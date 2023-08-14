import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIntance from "../Api/AxiosIntance"
import axios from "axios"




export const CreateComment=createAsyncThunk('fetchCommentdata',async(data)=>{
    try{
     
const res= await axios.post(`https://restapinodejs.onrender.com/api/blog/${data.blog}/comment/create`,data)
return res?.data


    }catch(error){
        console.log(error)
    }
})

export const GetComments = createAsyncThunk('Comments', async (postId) => {
    try {
        const response = await axios.get(`https://restapinodejs.onrender.com/api/comment/${postId}`)
        return response?.data
    } catch (e) {
        return e.response.data
    }
})

const initialState={
    comments:[],
    commentStatus:"success",
    commentSubmitStatus:"success"
}

// create slice

export const CommentSlice=createSlice({
    name:"comment",
    initialState,
    reducer:{

    },
    extraReducers:{

[CreateComment.pending]:(state)=>{
    state.commentSubmitStatus="loding..."
},

[CreateComment.fulfilled]:(state,{payload})=>{
    state.commentSubmitStatus='success'
},
[CreateComment.rejected]:(state)=>{
    state.commentSubmitStatus='Try Again'
},


[GetComments.pending]: (state) => {
    state.commentStatus = 'loading'
    state.comments = null
},
[GetComments.fulfilled]: (state, { payload }) => {
    if (payload.status === 'success') {
        state.commentStatus = 'success'
        state.comments = payload?.post.comment.comments
    }
},
[GetComments.rejected]: (state) => {
    state.commentStatus = 'failed'
}

    }
})




