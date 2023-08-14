import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchApplycourse } from '../redux/ApplyCourseSlice'
import { Link, useParams } from 'react-router-dom'

const ApplyCourse = () => {

    const{applycourse_data,applyStatus}=useSelector((state)=>state?.applycourse)
    

    const { course,id } = useParams()

    const initialState = {
        course: id,
        course_name: course,
        // name: '',
        // email: '',
        phone: '',
        city: '',
        address: '',
        qualification: '',
        programing_knowledge: '',
        experiance: '',
         name : localStorage.getItem("name"),
         email : localStorage.getItem("email")


    }


    const [applyData, setApplyData] = useState(initialState)
    const [error, setError] = useState({})
    let name, value, errorMsg

    const postData = (e) => {
        e.preventDefault()
        name = e.target.name
        value = e.target.value

        setApplyData({ ...applyData, [name]: value })

        switch (name) {
            // case 'name':
            //     errorMsg = 'Name should not be empty'
            //     break
            // case 'email':
            //     errorMsg = 'Email should not be empty'
            //     break
            case 'phone':
                errorMsg = 'Phone should not be empty'
                break
            case 'city':
                errorMsg = 'City should not be empty'
                break
            case 'address':
                errorMsg = 'Address should not be empty'
                break
            case 'qualification':
                errorMsg = 'Qualification should not be empty'
                break
            case 'programing_knowledge':
                errorMsg = 'Programing knowledge should not be empty'
                break
            case 'experiance':
                errorMsg = 'Experiance should not be empty'
                break            
            default:
                break
        }

        if (value === '' || value === null) {
            setError({ ...error, [name]: errorMsg })
            setApplyData({ ...applyData, [name]: null })
        }else{
            setError({ ...error, [name]: null })
        }
    }

    const validateInput=()=>{
        let error={}
        // if(applyData.name===''){
        //     error.name='Please enter your name'
        // }
        // if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(applyData.email)) {
        //     error.email = 'Please enter valid email address'
        // }
        if(applyData.phone===''){
            error.phone='Please enter your phone'
        }
        if(applyData.city===''){
            error.city='Please enter your city'
        }
        if(applyData.address===''){
            error.address='Please enter your address'
        }
        if(applyData.qualification===''){
            error.qualification='Please enter your qualification'
        }
        if(applyData.programing_knowledge===''){
            error.programing_knowledge='Please enter your programing knowledge'
        }
        if(applyData.experiance===''){
            error.experiance='Please enter your experiance'
        }

        return error
    }




    const dispatch=useDispatch()
    const submitData=(e)=>{
        e.preventDefault()
        let inputError = validateInput()
        console.log(inputError);
        setError(validateInput())
        if(Object.keys(inputError).length===0){
            dispatch(FetchApplycourse(applyData))
            setApplyData(initialState)
        }

    }
console.log("ac",applycourse_data)




  return (
    <>
    
    
    <main id="main">



{/* ======= Breadcrumbs ======= */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center">
      <h2>Apply</h2>
      <ol>
        <li><a href="/">Home</a></li>
        <li>Apply</li>
      </ol>
    </div>
  </div>
</section>{/* End Breadcrumbs */}


    
</main>




<section id="contact" class="contact">
            <div class="container">

                <div class="row justify-content-center" data-aos="fade-up">

                    <div class="col-lg-10">

                        <div class="info-wrap">
                            <div class="row">
                                <div class="info">
                                    <h4>Apply for {course}</h4>
                                    <p>Fill the following form to apply for the course.</p>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

                <div class="row mt-5 justify-content-center" data-aos="fade-up">
                    <div class="col-lg-10">
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                        <img src={`https://restapinodejs.onrender.com/api/course/photo/${id}`} className="card-img-top" style={{height:"10rem", width:"7rem",borderRadius:"70%",marginLeft:"40%"}} alt="..." />  

                            {/* <div class="form-group">
                                <input type="text" class="form-control" name="name" id="name" placeholder="Your Full name" data-rule="name" data-msg="Please enter your name"
                                    value={applyData.name}
                                    onChange={postData} />
                                <div class="validate">{error.name}</div>
                            </div>  */}
                            
{/* ******** */}
                            <div class="form-group">
                                <input type="text"  class="form-control" name="name" id="name" 
                                    value={applyData.name}
                                     />
                            </div>

{/* ********* */}


                             {/* <div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                                    value={applyData.email}
                                    onChange={postData} />
                                <div class="validate">{error.email}</div>
                            </div>  */}

                            {/* **************** */}


                             <div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" 
                                    value={applyData.email}
                                    />
                            </div> 
                            {/* ***************** */}

                            <div class="form-group">
                                <input type="text" class="form-control" name="phone" id="phone" placeholder="Your phone number" data-rule="name" data-msg="Please enter your name"
                                    value={applyData.phone}
                                    onChange={e => postData(e)} />
                             <span style={{ color: "red" }}> {error.phone} </span>

                                <div class="validate">{error.phone}</div>
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" name="address" id="address" placeholder="Your Address" data-rule="name" data-msg="Please enter your name"
                                    value={applyData.address}
                                    onChange={e => postData(e)} />
                                    <span style={{ color: "red" }}> {error.address} </span>
                                <div class="validate">{error.address}</div>
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" name="city" id="city" placeholder="Your City" data-rule="name" data-msg="Please enter your name"
                                    value={applyData.city}
                                    // onBlur={postData}
                                    onChange={e => postData(e)} />
                                    <span style={{ color: "red" }}> {error.city} </span>
                                     
                                <div class="validate">{error.city}</div>
                            </div>

                            <div class="form-group">
                                <textarea class="form-control" name="qualification" id='qualification' rows="3" data-rule="qualification" data-msg="Provide your qualification" placeholder="Qualification"
                                    value={applyData.qualification}
                                    // onChange={postData} >
                                        onChange={e => postData(e)} />
                                    <span style={{ color: "red" }}> {error.qualification} </span>
                                    {/* </textarea> */}
                                <div class="validate">{error.qualification}</div>
                            </div>

                            <div class="form-group">
                                <textarea class="form-control" name="programing_knowledge" id='programing_knowledge' rows="3" data-rule="programing_knowledge" data-msg="Provide your programming knowledge" placeholder="Programming knowledge"
                                    value={applyData.programing_knowledge}
                                    // onChange={postData} >
                                    onChange={e => postData(e)} />
                                    <span style={{ color: "red" }}> {error.programing_knowledge} </span>
                                        
                                    {/* </textarea> */}
                                <div class="validate">{error.programing_knowledge}</div>
                            </div>

                            <div class="form-group">
                                <textarea class="form-control" name="experiance" id='experiance' rows="3" data-rule="experiance" data-msg="Provide your experiance" placeholder="Experiance"
                                    value={applyData.experiance}
                                    // onChange={postData} >

                                    // </textarea>
                                    onChange={e => postData(e)} />
                                    <span style={{ color: "red" }}> {error.experiance} </span>
                                        
                                <div class="validate">{error.experiance}</div>
                            </div>

                            <div class="text-center"><button type="submit" onClick={submitData}>Apply Now</button></div>
                        </form>
                    </div>

                </div>



{/* ********** */}




{/* *************** */}








            </div>
        </section>








    
    </>
  )
}

export default ApplyCourse
