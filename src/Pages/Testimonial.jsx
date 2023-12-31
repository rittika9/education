import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchTestimonial } from '../redux/TestimonialSlice'

const Testimonial = () => {


    const{testimonial_data}=useSelector((state)=>state?.testimonial)
  
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch((FetchTestimonial()))
     
    },[])
    console.log('t',testimonial_data);





  return (
    <>
    
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
        </div>
        <div className="row">


{
        testimonial_data?.testimonials?.map((t)=>{
            return(
                <>

<div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="testimonial-item mt-4 mt-lg-0">
              <img src={`https://restapinodejs.onrender.com/api/testimonials/photo/${t._id}`} className="testimonial-img" alt />
              <h3>{t.name}</h3>
              <h4>{t.position}</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                {t.talk}
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>


                </>
            )
        })

}





          {/* <div className="col-lg-6" data-aos="fade-up">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="testimonial-item mt-4 mt-lg-0">
              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="testimonial-item mt-4">
              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="testimonial-item mt-4">
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="testimonial-item mt-4">
              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
            <div className="testimonial-item mt-4">
              <img src="assets/img/testimonials/testimonials-6.jpg" className="testimonial-img" alt />
              <h3>Emily Harison</h3>
              <h4>Store Owner</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur. Sequi officiis ea et quia quidem.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div> */}
       
       
       
        </div>
      </div>
    </section>
    
    
    
    </>
  )
}

export default Testimonial