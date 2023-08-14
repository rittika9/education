import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Navigate } from 'react-router-dom'
import { logout } from '../redux/AuthSlice';
import logo_3 from '../img/logo3.jpg'


const Header = () => {

  const dispatch = useDispatch();
  const { Logouttoggle } = useSelector((state) => state?.Auth);
  const name = localStorage.getItem("name");
//  console.log(name,"name")
  const log = () => {
    dispatch(logout())
    Navigate("/login")
  }






  return (
    <>
    
    
   
    {/* ======= Header ======= */}
<header id="header" className="fixed-top">
  <div className="container d-flex align-items-center ">
    {/* <img src={logo1}></img> */}
    <h1 className="logo mr-auto"><a href="index.html"><img src={logo_3} alt="" class="img-fluid" style={{height:"3rem",marginBottom:"2px"}}/><span> 𝓓𝓲𝓰𝓲𝓽𝓪𝓵 </span>𝓛𝖊𝖆𝖗𝖓𝖎𝖓𝖌 </a></h1>
    {/* Uncomment below if you prefer to use an image logo */}
    {/* <a href="index.html" class="logo mr-auto"><img src={logo_3} alt="" class="img-fluid"/></a> */}
    {/* <Link to="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></Link> */}

    <nav className="nav-menu d-none d-lg-block">
      <ul>
       


        <li >
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li >
                                    <NavLink  to="/about">About</NavLink>
                                </li>
                                <li >
                                    <NavLink  to="/courses">Courses</NavLink>
                                </li>
                                <li >
                                    <NavLink  to="/blog">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink  to="/contact">Contact</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink  to="/details">Details</NavLink>
                                </li> */}
                                {Logouttoggle ?
              <>
               <li >
               {/* <NavLink className="nav-link bg bg-success" to="/details">Hi..{name}</NavLink> */}
               <NavLink  to="/details">Hi..{name}</NavLink>

             
               </li>
               <li >
               <NavLink  onClick={log}>Logout</NavLink>
               </li>
              </>
              :
              <li >
           <NavLink  >Login</NavLink>
              </li>
            }
      </ul>
    </nav>{/* .nav-menu */}
    <div className="header-social-links">
      <a href="#" className="twitter"><i className="icofont-twitter" /></a>
      <a href="#" className="facebook"><i className="icofont-facebook" /></a>
      <a href="#" className="instagram"><i className="icofont-instagram" /></a>
      <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
    </div>
  </div>
</header>
{/* End Header */}




{/* End #main */}
  
    
    
    </>
  )
}

export default Header