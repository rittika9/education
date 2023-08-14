import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import RecentPost from './RecentPost'
import Category from './Category'
import { FetchBDetails } from '../redux/BlogDetailsSlice'
import { HashLoader, PropagateLoader } from 'react-spinners'
import Comment from './Comment'
import { FetchPost } from '../redux/RPostSlice'
import { FetchCategoryDetails } from '../redux/CategoryDetailsSlice'


const BlogDetails = () => {

    const { id } = useParams()
    const{blogDetails_data}=useSelector((state)=>state?.blogDetails
        
       )

      
      const dispatch=useDispatch()
      // useEffect(()=>{
      //   dispatch(FetchBDetails(id))
        
      // },[])


  useEffect(() => {
      id !== '' && id !== null && id !== undefined ? dispatch(FetchBDetails(id)) : dispatch(FetchCategoryDetails())
  }, [id])



      console.log('d',blogDetails_data);
    
  return (
    <>
    {blogDetails_data!==null ? (




<>



{/* ======= Blog Section ======= */}
<section id="blog" className="blog">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 entries">
        <article className="entry entry-single" data-aos="fade-up">
          <div className="entry-img">
            {/* <img src="assets/img/blog-1.jpg" alt className="img-fluid" /> */}
            <img src={`https://restapinodejs.onrender.com/api/blog/image/${blogDetails_data?._id}`} className="img-fluid" alt="..." />
          </div>
          <h2 className="entry-title">
            <a href='/blog' > {blogDetails_data.title}</a>
          </h2>
          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
              <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
              <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
            </ul>
          </div>
          
          <div className="entry-content">

          <p dangerouslySetInnerHTML={{
                                                                __html: blogDetails_data?.postText
                                                            }}>
                                                            </p>
          </div>

          <div className="entry-footer clearfix">
            <div className="float-left">
              <i className="icofont-folder" />
              <ul className="cats">
                <li><a href="#">Business</a></li>
              </ul>
              <i className="icofont-tags" />
              <ul className="tags">
                <li><a href="#">Creative</a></li>
                <li><a href="#">Tips</a></li>
                <li><a href="#">Marketing</a></li>
              </ul>
            </div>
            <div className="float-right share">
              <a href title="Share on Twitter"><i className="icofont-twitter" /></a>
              <a href title="Share on Facebook"><i className="icofont-facebook" /></a>
              <a href title="Share on Instagram"><i className="icofont-instagram" /></a>
            </div>
          </div>
        </article>{/* End blog entry */}
        {/* <div className="blog-comments" data-aos="fade-up">
          <h4 className="comments-count">Comments</h4>
          <div id="comment-1" className="comment clearfix">
            <h5><a href>Georgia Reader</a> </h5>
            <time dateTime="2020-01-01">01 Jan, 2020</time>
            <p>
              Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
              Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
            </p>
          </div> */}
          {/* End comment #1 */}
          {/* <div className="reply-form">
            <h4>Leave a Reply</h4>
            <p>Your email address will not be published. Required fields are marked * </p>
            <form action>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                </div>
                <div className="col-md-6 form-group">
                  <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                </div>
              </div>
              <div className="row">
                <div className="col form-group">
                  <input name="website" type="text" className="form-control" placeholder="Your Website" />
                </div>
              </div>
              <div className="row">
                <div className="col form-group">
                  <textarea name="comment" className="form-control" placeholder="Your Comment*" defaultValue={""} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Post Comment</button>
            </form>
          </div>
        </div> */}
        <Comment/>
        {/* End blog comments */}
      </div>{/* End blog entries list */}
      <div className="col-lg-4">
        <div className="sidebar" data-aos="fade-left">
          <h3 className="sidebar-title">Search</h3>
          <div className="sidebar-item search-form">
            <form action>
              <input type="text" />
              <button type="submit"><i className="icofont-search" /></button>
            </form>
          </div>{/* End sidebar search formn*/}
          

          <Category/>
          
          <RecentPost/>
        </div>{/* End sidebar */}
      </div>{/* End blog sidebar */}
    </div>
  </div>
</section>{/* End Blog Section */}





</>





    ):(
      <>
      <div className='spinner' style={{display: "flex",justifyContent: "center",padding:"20rem",sise:"30px"}}>
    {/* <HashLoader color="#00FF00" />  */}
    <PropagateLoader color="#3CB371" />
    </div>
     </>
    
    )}
         
        </>
  )
}

export default BlogDetails