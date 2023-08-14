import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchPost } from '../redux/RPostSlice'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import { FetchBDetails } from '../redux/BlogDetailsSlice'



const RecentPost = () => {
    const{post_data,status}=useSelector((state)=>state?.post)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(FetchPost())
    },[])
  //   useEffect(() => {
  //     id !== '' && id !== null && id !== undefined ? dispatch(FetchPost(id)) : dispatch(FetchBDetails())
  // }, [id])
console.log("p",post_data)
  return (
    <>
    {/* {post_data!==null ? (
   <>  */}

{
                        post_data !== null && post_data !== '' && post_data !== undefined && status === 'success' ? (
                            <>
                              



    
    <h3 className="sidebar-title">Recent Posts</h3>
          <div className="sidebar-item recent-posts">

{
  post_data?.data?.map((r)=>{
    return(
      <>
      <div className="post-item clearfix">
              <img src={`https://restapinodejs.onrender.com/api/blog/image/${r._id}`} alt />
              <h4><Link to={`/blogdetails/${r._id}`}>{r.title}</Link></h4>

              {/* <h4><a href="blog-single.html">{r.title}</a></h4> */}
              {/* <time dateTime="2020-01-01">Jan 1, 2020</time> */}
              <p >{moment(r.creationAt).format(' MM  do  YYYY ')} </p>
              {/* <p className="card-text">creationAt:{moment(prdD.creationAt).format(' Do/ MM / YYYY, h:mm:ss a')} </p> */}

            </div>
      </>
    )
  })
}


{/* 
            <div className="post-item clearfix">
              <img src="assets/img/blog-recent-posts-1.jpg" alt />
              <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </div>
            <div className="post-item clearfix">
              <img src="assets/img/blog-recent-posts-2.jpg" alt />
              <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </div>
            <div className="post-item clearfix">
              <img src="assets/img/blog-recent-posts-3.jpg" alt />
              <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </div>
            <div className="post-item clearfix">
              <img src="assets/img/blog-recent-posts-4.jpg" alt />
              <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </div>
            <div className="post-item clearfix">
              <img src="assets/img/blog-recent-posts-5.jpg" alt />
              <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </div> */}
          </div>{/* End sidebar recent posts*/}
    
          </>
    
          ):(
  <>
  <div className='spinner' style={{display: "flex",justifyContent: "center",padding:"10rem"}}>
<HashLoader color="#00FF00" /> 
</div>
 </>
)}
    
    </>
  )
}

export default RecentPost