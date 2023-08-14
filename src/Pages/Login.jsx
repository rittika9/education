import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RegLog, loginRequest } from '../redux/AuthSlice';
import logo_3 from '../img/logo3.jpg'


const initialValue = {
  email: "",
  password: ""
}
const Login = () => {

  const [user, setUser] = useState(initialValue)
  const { redirectTo } = useSelector((state) => state?.Auth);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const dispatch = useDispatch();
    
  // /form validation
  const validation = () => {
      let error = {}
      if (!user.email) {
          error.email = "Email is Required"
      } else if (
          !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
      ) {
          error.email = "Enter a valid Email"
      }
      if (!user.password) {
          error.password = "Password is Required"
      }
      return error
  }
//onchange validation
  let name, value
  const postUserData = (e) => {
      name = e.target.name
      value = e.target.value
      setUser({ ...user, [name]: value })
      if (name === "email") {
          if (value.length === 0) {
              setError({ ...error, email: "@Email is required" })
              setUser({ ...user, email: "" })
          } else {
              setError({ ...error, email: "" })
              setUser({ ...user, email: value })
          }
      }
      if (name === "password") {
          if (value.length === 0) {
              setError({ ...error, password: "@password is Required" })
              setUser({ ...user, password: "" })
          } else {
              setError({ ...error, password: "" })
              setUser({ ...user, password: value })
          }
      }
  }


  const SubmitInfo = async e => {
    e.preventDefault()
    let ErrorList = validation()
    setError(ErrorList)
    let data = {
        "email": user.email,
        "password": user.password,
    }
    dispatch(loginRequest(data))
}
  

 //redirect if get the token or not get the token 
 const redirectUser = () => {
  let token = localStorage.getItem("token")
  let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

  if (token !== null && token !== undefined && token !== "") {
      // window.location.pathname = getPathname;
      isInLoginPage && navigate("/");
  }
}
useEffect(() => {
  redirectUser()
}, [redirectTo])

const log=()=>{
dispatch(RegLog())
}






return(
  <>
    
<section className="vh-100" style={{backgroundColor: '#90EE90',padding:"4rem 10rem 54rem 10rem"}}>
  <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100" >
      <div className="col col-xl-10" >
        <div className="card" style={{borderRadius: '3rem',marginBottom:"40rem"}} >
          <div className="row g-0" >
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="login form" className="img-fluid" style={{borderRadius: '0rem 0 0 1rem',marginTop:"10rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />                     
                    {/* <h1><span style={{color: '#32CD32'}}>COM</span>PANY</h1> */}
                    <h3><img src={logo_3} alt="" class="img-fluid" style={{height:"3rem",marginBottom:"2px"}}/><span style={{color: '#32CD32'}}> 𝓓𝓲𝓰𝓲𝓽𝓪𝓵 </span>𝓛𝖊𝖆𝖗𝖓𝖎𝖓𝖌</h3>

                  </div>
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign into your account</h5>
                  {/* <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                  </div> */}

                                  <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" name="email" className="form-control"

                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.email} </span>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" name="password" className="form-control"

                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.password} </span>
                                </div>
                  <div className="pt-1 mb-4">
                    <button  onClick={SubmitInfo}className="btn btn-success btn-lg btn-block" type="button"style={{borderRadius:"50rem"}}>Login</button>
                  </div>
                  <h5 ><a className="small text-muted-success" href="#!">Forgot password?</a></h5>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link onClick={log} to="/register" style={{color: '#FF0000'}}>Register here</Link></p>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default Login