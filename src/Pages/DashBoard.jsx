import React from 'react'
import "../CSS/Dashboard.css"
import { Link } from 'react-router-dom';


const DashBoard = () => {
    const Rname = localStorage.getItem("name");
    const Remail = localStorage.getItem("email");
   const Rmobile= localStorage.getItem("mobile")

  return (
    <>
    


    <main id="main">



{/* ======= Breadcrumbs ======= */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center">
      <h2>Blog</h2>
      <ol>
        <li><a href="/">Home</a></li>
        <li>Profile</li>
      </ol>
    </div>
  </div>
</section>{/* End Breadcrumbs */}


    
</main>



<div className="dashboard_body">
<div className="container-fluid px-1 py-5 mx-auto">
  <div className="row d-flex justify-content-center">
    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
      <h3>PROFILE</h3>
      <h4 className="blue-text">Hi..<br /> {Rname}</h4>
      <div className="card">
        <h5 className="text-center mb-4">About You</h5>
        <form className="form-card" onsubmit="event.preventDefault()">
          <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3"> name<span className="text-danger"> </span></label> <input type="text" id="fname" name="fname" value={Rname} /> </div>
          </div>
          <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3"> email<span className="text-danger"> </span></label> <input type="text" id="email" name="email" value={Remail} /> </div>
          </div>
          <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">phone_number<span className="text-danger"> </span></label> <input type="text" id="number" name="mobile" value={Rmobile} /> </div>
          </div>
         
          <div className="row justify-content-end">
            <div className="form-group col-sm-6"><Link  to="/"> <button type="submit" className="btn-block btn-success">Back to Home</button></Link> </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>



</div>




    
    </>
  )
}

export default DashBoard