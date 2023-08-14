import { configureStore } from "@reduxjs/toolkit";
import { BannerSlice, CompanySlice } from "../BannerSlice";
import { BlogSlice } from "../BlogSlice";
import {  CategorySlice } from "../CategorySlice";
import { RPostSlice } from "../RPostSlice";
import { BlogDetailsSlice } from "../BlogDetailsSlice";
import { CoursesSlice } from "../CourseSlice";
import { ServiceSlice } from "../ServiceSlice";
import { TestimonialSlice } from "../TestimonialSlice";
import { CategoryDetailsSlice } from "../CategoryDetailsSlice";
import { TeamSlice } from "../TeamSlice";
import { ApplyCourseSlice } from "../ApplyCourseSlice";
import { CommentSlice } from "../CommentSlice";
import { AuthSlice } from "../AuthSlice";
import { ContactSlice } from "../ContactSlise";





const Store=configureStore({
    reducer:{
       
        // Home:CompanySlice.reducer,
        blog:BlogSlice.reducer,
        category:CategorySlice.reducer,
        post:RPostSlice.reducer,
        blogDetails:BlogDetailsSlice.reducer,
        course:CoursesSlice.reducer,
        service:ServiceSlice.reducer,
        testimonial:TestimonialSlice.reducer,
        banner:BannerSlice.reducer,
        categoryDetails:CategoryDetailsSlice.reducer,
        team:TeamSlice.reducer,
        applycourse:ApplyCourseSlice.reducer,
        comment:CommentSlice.reducer,
        Auth:AuthSlice.reducer,
        Contact: ContactSlice.reducer,

         
        


    }
})
export default Store