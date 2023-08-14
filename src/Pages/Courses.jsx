import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCourse } from '../redux/CourseSlice'
import { HashLoader } from 'react-spinners'
import { Link } from 'react-router-dom'


const Courses = () => {
  const{course_data}=useSelector((state)=>state?.course )
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch((FetchCourse()))
   
  },[])
  console.log('c',course_data);
  return (

    <>

    {course_data!==null ? (


    <>
   
    
   <main id="main">



{/* ======= Breadcrumbs ======= */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center">
      <h2>Courses</h2>
      <ol>
        <li><a href="/">Home</a></li>
        <li>Courses</li>
      </ol>
    </div>
  </div>
</section>{/* End Breadcrumbs */}



<div>
  {/* ======= Pricing Section ======= */}
  {/* <section id="pricing" className="pricing">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="box">
            <h3>Free</h3>
            <h4><sup>$</sup>0<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li className="na">Pharetra massa</li>
              <li className="na">Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Apply Couese</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
          <div className="box featured">
            <h3>Business</h3>
            <h4><sup>$</sup>19<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li className="na">Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div className="box">
            <h3>Developer</h3>
            <h4><sup>$</sup>29<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div className="box">
            <span className="advanced">Advanced</span>
            <h3>Ultimate</h3>
            <h4><sup>$</sup>49<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>


        


      </div>
    </div>
  </section>  */}
 {/* End Pricing Section */}

 





  <section id="pricing" className="pricing">
    <div className="container" data-aos="fade-up">
    <div className="row">


      {
course_data?.Courses?.map((i)=>{
  return(
    <>

             <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" >
          <div className="box" style={{width:"20rem",height:"45rem"}}>
          <span className="advanced">Advanced</span>

            <h3 style={{backgroundColor:"#90EE90",fontStyle:"italic"}}>{i?.name}</h3>
            <h4>{i.fees}/-<span>  {i.duration}</span></h4>
            <ul>
            <img src={`https://restapinodejs.onrender.com/api/course/photo/${i._id}`} className="card-img-top" alt="..." />  
            <li>{i?.name}</li>
              <li> Minimum required :{i?.requirement}</li>
              <li>Course Duration:{i.duration} </li>
              <li>Course free:{i.fees}</li>
            </ul>
            <div className="btn-wrap">
              <Link to={`/applycourse/${i.name}/${i._id}` }className="btn-buy">Apply Now</Link>
            </div>
          </div>
        </div>
    
    </>
  
  )
})
      }

      
      {/* <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="box">
            <h3>Free</h3>
            <h4><sup>$</sup>0<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li className="na">Pharetra massa</li>
              <li className="na">Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Apply Couese</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
          <div className="box featured">
            <h3>Business</h3>
            <h4><sup>$</sup>19<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li className="na">Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div className="box">
            <h3>Developer</h3>
            <h4><sup>$</sup>29<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div className="box">
            <span className="advanced">Advanced</span>
            <h3>Ultimate</h3>
            <h4><sup>$</sup>49<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>
      </div> */}
    
    
    
    </div>
    </div>

  </section>







  {/* ======= Frequently Asked Questions Section ======= */}
  <section id="faq" className="faq section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-list">
        <ul>
          <li data-aos="fade-up">
            <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" className="collapse" href="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={100}>
            <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-2" className="collapse" data-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={200}>
            <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-3" className="collapse" data-parent=".faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={300}>
            <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-4" className="collapse" data-parent=".faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={400}>
            <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-5" className="collapse" data-parent=".faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>{/* End Frequently Asked Questions Section */}
</div>

    
</main>
    
    
    
    </>


):(
  <>
  <div className='spinner' style={{display: "flex",justifyContent: "center",padding:"20rem"}}>
<HashLoader color="#00FF00" /> 
</div>
 </>
)}
</>
  )
}

export default Courses