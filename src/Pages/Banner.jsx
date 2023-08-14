import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchBanner } from '../redux/BannerSlice'

const Banner = () => {
    const{banner_data}=useSelector((state)=>state?.banner )
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch((FetchBanner()))
   
  },[])
  console.log('b',banner_data);
  return (
    <>Banner
    

    
 <section id="hero">
    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner" role="listbox">


      {
  banner_data?.bannerdata?.map((b,index)=>{
    return(
        <>
        
       
        
        
        {/* <div className="carousel-item active" style={{backgroundImage: {`https://restapinodejs.onrender.com/api/banner/photo/${b._id}`}}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Welcome to <span>Company</span></h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div>
     */}
    
      
        
    {/* <div className="carousel-item active" > */}
    <div className={`carousel-item ${index===0?'active': ''}`} style={{backgroundImage:`url(https://restapinodejs.onrender.com/api/banner/photo/${b?._id})`}}  >

      
      
    {/* <img src={`https://restapinodejs.onrender.com/api/banner/photo/${b._id}`} className="card-img-top" alt="..." />   */}
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              {/* <h2>Welcome to <span>Company</span></h2> */}

              <h2>{b.title}</h2>
              <p>{b.description}</p>
              <div className="text-center"><a href className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div>


        {/* <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-2.jpg)'}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Lorem I</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div> */}
        
        
        </>
    )
  })  
}







        {/* <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/slide/slide-1.jpg)'}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Welcome to <span>Company</span></h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div>

        <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-2.jpg)'}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Lorem Ipsum Dolor</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-3.jpg)'}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Sequi ea ut et est quaerat</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div> */}
      </div>
      {/* ********** */}
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
            {/* ********** */}

      <ol className="carousel-indicators" id="hero-carousel-indicators" />
    </div>
  </section> 














    {/* <section id="hero">
    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/slide/slide-1.jpg)'}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Welcome to <span>Company</span></h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div>

        <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-2.jpg)'}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Lorem Ipsum Dolor</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-3.jpg)'}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Sequi ea ut et est quaerat</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div className="text-center"><a href className="btn-get-started">Read More</a></div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
      <ol className="carousel-indicators" id="hero-carousel-indicators" />
    </div>
  </section> */}
    
    
    </>
  )
}

export default Banner