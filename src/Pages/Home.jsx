import React from 'react'
import Service from './Service'
import Testimonial from './Testimonial'
import Banner from './Banner'

const Home = () => {




    
  return (
    <>
    
    
    
   <div>
  {/* ======= Hero Section ======= */}
 
  <Banner/>
  
  {/* End Hero */}
  <main id="main">
    {/* ======= About Us Section ======= */}
    <section id="about-us" className="about-us">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6" data-aos="fade-right">
            <h2>Eum ipsam laborum deleniti velitena</h2>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
              <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
            </ul>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>{/* End About Us Section */}
   

    <Service/>
    <Testimonial/>

    
    {/* ======= Our Clients Section ======= */}
    <section id="clients" className="clients">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Companys </h2>
        </div>
        <div className="row no-gutters clients-wrap clearfix" data-aos="fade-up">
          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-1.png" className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-2.png" className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-3.png" className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-4.png" className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-5.png" className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-6.png" className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-7.png" className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src="assets/img/clients/client-8.png" className="img-fluid" alt />
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Our Clients Section */}
  </main>{/* End #main */}
</div>

    
    </>
  )
}

export default Home