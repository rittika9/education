import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SubmitMessage } from "../redux/ContactSlise"


const Contact = () => {
  const { state } = useSelector((state) => state.Contact)
  const initialValues = {
      name: '',
      email: '',
      phone: '',
      message: ''
  }
  const [data, setData] = useState(initialValues)
  const [errorMsg, setErrorMsg] = useState(initialValues)
  let name, value, errorMessage
  const postData = (e) => {
      e.preventDefault()
      name = e.target.name
      value = e.target.value
      setData({ ...data, [name]: value })

      switch (name) {
          case 'name':
              errorMessage = 'Name should not be empty'
              break
          case 'email':
              errorMessage = 'Email should not be empty'
              break
          case 'phone':
              errorMessage = "Phone number should not be empty"
              break
          case 'message':
              errorMessage = "Message should not be empty"
              break
          default:
              break
      }

      if (value === '' || value === null || value === undefined) {
          setErrorMsg({ ...errorMsg, [name]: errorMessage })
      }else{
          setErrorMsg({ ...errorMsg, [name]: null })
      }
  }

  const validateInput = () => {
      const error = {}
      if (data.name === '' || data.name === null || data.name === undefined) {
          error.name = 'Enter your name'
      }
      if (data.email === '' || data.email === null || data.email === undefined) {
          error.email = 'Enter your email'
      }
      if (data.phone === '' || data.phone === null || data.phone === undefined) {
          error.phone = 'Enter your phone number'
      }
      if (data.message === '' || data.message === null || data.message === undefined) {
          error.message = 'Enter your message'
      }
      return error
  }
  console.log(data);
  // console.log(errorMsg);
  const dispatch = useDispatch()
  const submitData = (e) => {
      e.preventDefault()
      setErrorMsg(validateInput())
      if (Object.keys(errorMsg).length === 0) {
          dispatch(SubmitMessage(data))
          setData(initialValues)
      }
  }
  return (
    <>
    
    <main id="main">



{/* ======= Breadcrumbs ======= */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center">
      <h2>Contact</h2>
      <ol>
        <li><a href="/">Home</a></li>
        <li>Contact</li>
      </ol>
    </div>
  </div>
</section>{/* End Breadcrumbs */}
</main>


{/* <div>
  <div className="map-section">
    <iframe style={{border: 0, width: '100%', height: 350}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
  </div>
  <section id="contact" className="contact">
    <div className="container">
      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-10">
          <div className="info-wrap">
            <div className="row">
              <div className="col-lg-4 info">
                <i className="icofont-google-map" />
                <h4>Location:</h4>
                <p>A108 Adam Street<br />New York, NY 535022</p>
              </div>
              <div className="col-lg-4 info mt-4 mt-lg-0">
                <i className="icofont-envelope" />
                <h4>Email:</h4>
                <p>info@example.com<br />contact@example.com</p>
              </div>
              <div className="col-lg-4 info mt-4 mt-lg-0">
                <i className="icofont-phone" />
                <h4>Call:</h4>
                <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 justify-content-center" data-aos="fade-up">
        <div className="col-lg-10">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="form-row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate" />
              </div>
              <div className="col-md-6 form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate" />
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validate" />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div> */}


<div>
<div className="map-section">
    <iframe style={{border: 0, width: '100%', height: 350,marginTop:"1rem"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
  </div>
<section id="contact" class="contact">
                <div class="container">

                    <div class="row justify-content-center" data-aos="fade-up">

                        <div class="col-lg-10">

                            <div class="info-wrap">
                                <div class="row">
                                    <div class="col-lg-4 info">
                                        <i class="icofont-google-map"></i>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street<br />New York, NY 535022</p>
                                    </div>

                                    <div class="col-lg-4 info mt-4 mt-lg-0">
                                        <i class="icofont-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@example.com<br />contact@example.com</p>
                                    </div>

                                    <div class="col-lg-4 info mt-4 mt-lg-0">
                                        <i class="icofont-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="row mt-5 justify-content-center" data-aos="fade-up">
                        <div class="col-lg-10">
                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">

                                <div class="form-group">
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Your name" data-rule="minlen:4" data-msg="Please enter your full name"
                                        value={data.name}
                                        onChange={postData} />
                                    <div class="validate">{errorMsg.name}</div>
                                </div>

                                <div class="form-row">
                                    <div class="col-md-6 form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                                            value={data.email}
                                            onChange={postData} />
                                        <div class="validate">{errorMsg.email}</div>
                                    </div>

                                    <div class="col-md-6 form-group">
                                        <input type="text" name="phone" class="form-control" id="phone" placeholder="Your phone number" data-rule="minlen:4" data-msg="Please enter your avtive phone number"
                                            value={data.phone}
                                            onChange={postData} />
                                        <div class="validate">{errorMsg.phone}</div>
                                    </div>

                                </div>

                                <div class="form-group">
                                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"
                                        value={data.message}
                                        onChange={postData} ></textarea>
                                    <div class="validate">{errorMsg.message}</div>
                                </div>

                                <div class="text-center"><button type="submit" onClick={submitData}>Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
    
            </div>
    
    </>
  )
}

export default Contact









