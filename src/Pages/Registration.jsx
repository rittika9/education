import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/AuthSlice';
import logo_3 from '../img/logo3.jpg'






const initialValue = {
  name: "",
  email: "",
  mobile: "",
  password: "",

}






const Registration = () => {
  const { redirectReg } = useSelector((state) => state?.Auth);
    const [user, setUser] = useState(initialValue);
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const validation = () => {
      let error = {}

      if (!user.name) {
          error.name = "Name is Required"
      }

      if (!user.email) {
          error.email = "Email is Required"
      } else if (
          !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
      ) {
          error.email = "Enter a valid Email"
      }

      if (!user.mobile) {
          error.mobile = "Mobile is Required"
      }
      if (!user.password) {
          error.password = "Password is Required"
      }

      return error
  }

  let name, value
  const postUserData = (e) => {
      name = e.target.name
      value = e.target.value
      setUser({ ...user, [name]: value })


      if (name === "name") {
          if (value.length === 0) {
              setError({ ...error, name: "@Name is Required" })
              setUser({ ...user, name: "" })
          } else {
              setError({ ...error, name: "" })
              setUser({ ...user, name: value })
          }
      }
      if (name === "email") {
          if (value.length === 0) {
              setError({ ...error, email: "Email is required" })
              setUser({ ...user, email: "" })
          } else {
              setError({ ...error, email: "" })
              setUser({ ...user, email: value })
          }
      }
      if (name === "mobile") {
          if (value.length === 0) {
              setError({ ...error, mobile: "@mobile is Required" })
              setUser({ ...user, mobile: "" })
          } else {
              setError({ ...error, mobile: "" })
              setUser({ ...user, mobile: value })
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
  
  const SubmitInfo = async (e) => {
    e.preventDefault()
    let ErrorList = validation()
    setError(validation())
    let formData = new FormData();
    if (Object.keys(ErrorList).length === 0) {
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("mobile", user.mobile);
        formData.append("password", user.password);
        dispatch(registerUser(formData))
       
    }
}

const redirectUser = () => {
  let name = localStorage.getItem("name")
  let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
  if (name !== null && name !== undefined && name !== "") {
      isInLoginPage && navigate("/login");
  }
}
useEffect(() => {
  redirectUser()
}, [redirectReg])
console.log("register",redirectReg)



  return (
    <>
      
    {/* <section className="vh-100" style={{backgroundColor: '#90EE90',padding:"auto"}}>
  <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100" >
      <div className="col col-xl-10" >
        <div className="card" style={{borderRadius: '3rem',height:"47rem",borderBottom:"90rem"}} >
          <div className="row g-0" >
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="login form" className="img-fluid" style={{borderRadius: '0rem 0 0 1rem',marginTop:"10rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />                     
                    <h1><span style={{color: '#32CD32'}}>COM</span>PANY</h1>
                  </div>
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign into your account</h5>
                  <div className="form-outline mb-4">
                    <input type="type" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Name</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="number" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Mobile Number</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button className="btn btn-success btn-lg btn-block" type="button"style={{borderRadius:"50rem"}}>Rgister</button>
                  </div>
                  <h5 ><a className="small text-muted-success" href="#!">Forgot password?</a></h5>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>You already register your account? <a href="/login" style={{color: '#FF0000'}}>Login here</a></p>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

    
<section className="vh-100" style={{backgroundColor: '#90EE90',padding:"5rem 10rem 60rem 10rem" }}>
  <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100" >
      <div className="col col-xl-10" >
        <div className="card" style={{borderRadius: '3rem',height:"50rem"}} >
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
                    <input type="type" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Name</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="number" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Mobile Number</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                  </div> */}


                               <div className="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.name}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.name} </span>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.email}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.email} </span>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Mobile</label>
                                    <input type="text" name="mobile" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.mobile}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.mobile} </span>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" name="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.password}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.password} </span>
                                </div>



                  <div className="pt-1 mb-4">
                    <button className="btn btn-success btn-lg btn-block"onClick={SubmitInfo} type="button"style={{borderRadius:"50rem"}}>Rgister</button>
                  </div>
                  <h5 ><a className="small text-muted-success" href="#!">Forgot password?</a></h5>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>You already register your account? <a href="/login" style={{color: '#FF0000'}}>Login here</a></p>
                  
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

export default Registration