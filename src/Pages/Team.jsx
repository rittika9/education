import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchTeam } from '../redux/TeamSlice'

const Team = () => {

    const{team_data}=useSelector((state)=>state?.team)
  
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch((FetchTeam()))
     
    },[])
    console.log('tt',team_data);

  return (
    <>






    
    {/* <!-- ======= Our Team Section ======= --> */}
   <section id="team" className="team section-bg">
  <div className="container">
    <div className="section-title" data-aos="fade-up">
      <h2>Our <strong>Team</strong></h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className="row">


    {
  team_data?.TeamMember?.map((t)=>{
    return(
        <>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="member" data-aos="fade-up">
          <div className="member-img">
            {/* <img src="assets/img/team/team-1.jpg" className="img-fluid" alt /> */}
            <img src={`https://restapinodejs.onrender.com/api/team/photo/${t._id}`} className="card-img-top" alt="..." />  

            <div className="social">
              <a href><i className="icofont-twitter" /></a>
              <a href><i className="icofont-facebook" /></a>
              <a href><i className="icofont-instagram" /></a>
              <a href><i className="icofont-linkedin" /></a>
            </div>
          </div>
          <div className="member-info">
            <h4>{t?.name}</h4>
            <span>{t?.possession	}</span>
          </div>
        </div>
      </div>
        
        </>
    )
  })  
}









      {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="member" data-aos="fade-up">
          <div className="member-img">
            <img src="assets/img/team/team-1.jpg" className="img-fluid" alt />
            <div className="social">
              <a href><i className="icofont-twitter" /></a>
              <a href><i className="icofont-facebook" /></a>
              <a href><i className="icofont-instagram" /></a>
              <a href><i className="icofont-linkedin" /></a>
            </div>
          </div>
          <div className="member-info">
            <h4>Walter White</h4>
            <span>Chief Executive Officer</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="member" data-aos="fade-up" data-aos-delay={100}>
          <div className="member-img">
            <img src="assets/img/team/team-2.jpg" className="img-fluid" alt />
            <div className="social">
              <a href><i className="icofont-twitter" /></a>
              <a href><i className="icofont-facebook" /></a>
              <a href><i className="icofont-instagram" /></a>
              <a href><i className="icofont-linkedin" /></a>
            </div>
          </div>
          <div className="member-info">
            <h4>Sarah Jhonson</h4>
            <span>Product Manager</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="member" data-aos="fade-up" data-aos-delay={200}>
          <div className="member-img">
            <img src="assets/img/team/team-3.jpg" className="img-fluid" alt />
            <div className="social">
              <a href><i className="icofont-twitter" /></a>
              <a href><i className="icofont-facebook" /></a>
              <a href><i className="icofont-instagram" /></a>
              <a href><i className="icofont-linkedin" /></a>
            </div>
          </div>
          <div className="member-info">
            <h4>William Anderson</h4>
            <span>CTO</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="member" data-aos="fade-up" data-aos-delay={300}>
          <div className="member-img">
            <img src="assets/img/team/team-4.jpg" className="img-fluid" alt />
            <div className="social">
              <a href><i className="icofont-twitter" /></a>
              <a href><i className="icofont-facebook" /></a>
              <a href><i className="icofont-instagram" /></a>
              <a href><i className="icofont-linkedin" /></a>
            </div>
          </div>
          <div className="member-info">
            <h4>Amanda Jepson</h4>
            <span>Accountant</span>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>

    {/* <!-- End Our Team Section --> */}
    
    
    
    
    
    
    </>
  )
}

export default Team