import React, { useEffect } from 'react'
import {Navigate,BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Blog from '../Pages/Blog'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import RecentPost from '../Pages/RecentPost'
import Category from '../Pages/Category'
import BlogDetails from '../Pages/BlogDetails'
import Courses from '../Pages/Courses'
import Contact from '../Pages/Contact'
import Service from '../Pages/Service'
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'
import CategoryDetails from '../Pages/CategoryDetails'
import ApplyCourse from '../Pages/ApplyCourse'
import Comment from '../Pages/Comment'
import { useDispatch } from 'react-redux'
import { check_token } from '../redux/AuthSlice'
import SearchData from '../Pages/SearchData'
import DashBoard from '../Pages/DashBoard'


const Routing = () => {
  // return (
  //   <>
    
  //   <Router>
  //       <Header/>
  //       <Routes>
  //           <Route path='/' element={<Home/>}/>
  //           <Route path='/about' element={<About/>}/>
  //           <Route path='/courses' element={<Courses/>}/>
  //           <Route path='/applycourse/:id' element={<ApplyCourse/>}/>
  //           <Route path='/blog' element={<Blog/>}/>
  //           <Route path='/blogdetails/:id' element={<BlogDetails/>}/>
  //           <Route path='/comment/:id' element={<Comment/>}/>
  //           <Route path='/contact' element={<Contact/>}/>
  //           <Route path='/post' element={<RecentPost/>}/>
  //           <Route path='/category' element={<Category/>}/>
  //           <Route path='/categorydetails/:id' element={<CategoryDetails/>}/>
  //           <Route path='/service' element={<Service/>}/>
  //           <Route path='/register' element={<Registration/>}/>
  //           <Route path='/login' element={<Login/>}/>






  //       </Routes>
  //       <Footer/>
  //   </Router>  
     
    
  //   </>

  // )


  const dispatch = useDispatch();
  //check token avable or not
  function PrivateRoute({ children }) {
    const token =localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }

  //for Public Route
  const PublicRouteNames = [
    
    {
      path: "/login",
      Component: <Login />
    },
    {

      path: "/register",
      Component: <Registration />
    },
    

  ]
//for Private Route
  const PrivateRouteNames = [
    {
      path: "/",
      Component: <Home/>
    }, 
    {
      path: '/about',
      Component: <About />
    },
    {
      path: '/courses',
      Component: <Courses />
    },
    {
      path: '/applycourse/:course/:id',
      Component: <ApplyCourse />
    },
    {
      path: '/blog',
      Component: <Blog />
    },
    {
      path: '/search',
      Component: <SearchData />
    },
    {
      path: '/category',
      Component: <Category />
    },
    {
      path: '/categorydetails/:id',
      Component: <CategoryDetails />
    },
    {
      path: '/post',
      Component: <RecentPost />
    },
    {
      path: '/service',
      Component: <Service />
    },
    {
      path: '/contact',
      Component: <Contact />
    },
    {

      path: "/blogdetails/:id",
      Component: <BlogDetails />
    },
    {

      path: "/comment/:id",
      Component: <Comment />
    },
    {

      path: "/applycourse/:id",
      Component: <ApplyCourse />
    },

    {
      path: "/details",
      Component: <DashBoard/>
    }, 
  ]


  useEffect(() => {
   dispatch(check_token())
  },[])
  
  return (
    <>
      {/* <Model/> */}
  
        <Router>
          <Header />
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return (
                <Route
                  Key={index + 1}
                  exact
                  path={route.path}
                  element={route?.Component}
                />
              )
            })}

            {/* Protect Route */}
            {PrivateRouteNames?.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={<PrivateRoute>{route?.Component}</PrivateRoute>}
                />
              )

            })}
           
          </Routes>
          <Footer/>
        </Router>

    

    </>


  )

}

export default Routing