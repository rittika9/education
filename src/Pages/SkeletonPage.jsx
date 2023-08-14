import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Category from './Category'
import RecentPost from './RecentPost'
import { Link } from 'react-router-dom'

const SkeletonPage = () => {
  return (
    <>
    
    
    
    <section id="blog" className="blog">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 entries">
      {Array(2)
            .fill()
            .map((item, index) => {
                return(
                    <>
                    
                    <article className="entry" data-aos="fade-up">
          <div className="entry-img">
          {/* <img src={`https://restapinodejs.onrender.com/api/blog/image/${bData._id}`} className="card-img-top" alt="..." />         */}
           
           {/* <img className="card-img-top"  src={ <Skeleton height={100} width={`100%`}/>}/> */}

            </div>
          <h2 className="entry-title" >
            {/* <Link to ={`/blogdetails/${bData._id}`}> {bData.title } </Link> */}
            <Skeleton/>
          </h2>
          <div className="entry-meta">
            
          </div>
          <div className="entry-content">
          {/* <p dangerouslySetInnerHTML={{
                                                            __html: bData?.postText.slice(0,350)
                                                        }}>
                                                        </p> */}
                                                        <Skeleton  height={56} width={`80%`}/>
                   
                                                        <div className="read-more">
            {/* <Link to={`/blogdetails/${bData._id}`}>Continue reading....</Link> */}

            </div>
            
                                                        </div>
            
        </article>
                    
                    </>
                )
            }
                )
                }


</div>




<div className="col-lg-4">
        <div className="sidebar" data-aos="fade-left">
          <h3 className="sidebar-title">Search</h3>
          {/* <div className="sidebar-item search-form">
            <form action>
              <input type="text" />
              <button type="submit"><i className="icofont-search" /></button>
            </form>
          </div> */}

          {/* <Search/> */}
          {/* End sidebar search formn*/}


        
           <Category/>
          <RecentPost/>
          


          

        </div>{/* End sidebar */}
      </div>{/* End blog sidebar */}






</div>
</div>




</section>
    
    
    
    
    
    
    
    </>
  )
}

export default SkeletonPage