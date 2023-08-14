import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchBlog } from '../redux/BlogSlice'
import { FetchCategory } from '../redux/CategorySlice'
import { FetchPost } from '../redux/RPostSlice'
import RecentPost from './RecentPost'
import Category from './Category'
import { HashLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import Search from '../SearchComponent/Core/Search'
import Pagination from './Pagination'
import ReactPaginate from 'react-paginate'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonPage from './SkeletonPage'






const Blog = () => {

    const{blog_data}=useSelector((state)=>{




      return(
      
        state?.blog
        
    )
    }   )


    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(2)


    
    
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(FetchBlog())
     
    },[])



    const handlePageClick = (selectedPage) => {
      setCurrentPage(selectedPage.selected + 1);
  }
 

  const indexOfLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = blog_data?.data?.slice(indexofFirstPost, indexOfLastPost);



    console.log('m',blog_data);
   





  return (
    <>

    {blog_data!==null ? (
   <> 



<main id="main">



{/* ======= Breadcrumbs ======= */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center">
      <h2>Blog</h2>
      <ol>
        <li><a href="/">Home</a></li>
        <li>Blog</li>
      </ol>
    </div>
  </div>
</section>{/* End Breadcrumbs */}


    
</main>




   <section id="blog" className="blog">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 entries">


        
        {
           currentPosts ?.map((bData,index)=>{
                return(


                <>
                <article className="entry" data-aos="fade-up">
          <div className="entry-img">
          <img src={`https://restapinodejs.onrender.com/api/blog/image/${bData._id}`} className="card-img-top" alt="..." />        
            </div>
          <h2 className="entry-title" >
            <Link to ={`/blogdetails/${bData._id}`}> {bData.title } </Link>
          </h2>
          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center"><i className="icofont-user" /><Link to ={`/blogdetails/${bData._id}`}>John Doe</Link></li>
              <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <Link to ={`/blogdetails/${bData._id}`}><time dateTime="2020-01-01">Jan 1, 2020</time></Link></li>
              <li className="d-flex align-items-center"><i className="icofont-comment" /> <Link to ={`/blogdetails/${bData._id}`}>12 Comments</Link></li>
            </ul>
          </div>
          <div className="entry-content">
          <p dangerouslySetInnerHTML={{
                                                            __html: bData?.postText.slice(0,350)
                                                        }}>
                                                        </p>
                   
                                                        <div className="read-more">
            <Link to={`/blogdetails/${bData._id}`}>Continue reading....</Link>

            </div>
            
                                                        </div>
            
        </article>
              </>
                )
            })
        }












        {/* End blog entry */}
        {/* End blog entry */}
        {/* End blog entry */}
       {/* End blog entry */}
        {/* <div className="blog-pagination">
          <ul className="justify-content-center">
            <li className="disabled"><i className="icofont-rounded-left" /></li>
            <li><a href="#">1</a></li>
            <li className="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#"><i className="icofont-rounded-right" /></a></li>
          </ul>
        </div>
      </div> */}

                              <div className="blog-pagination">
                              <ul className="justify-content-center">

                                            <ReactPaginate
                                                breakLabel="..."
                                                nextLabel="next >"
                                                onPageChange={handlePageClick}
                                                pageCount={Math.ceil(blog_data?.data?.length / postPerPage)}
                                                previousLabel="< previous"
                                                activeClassName={'active'}
                                            />
                                            </ul>
                                        </div>
                                    </div>


      {/* End blog entries list */}
      <div className="col-lg-4">
        <div className="sidebar" data-aos="fade-left">
          <h3 className="sidebar-title">Search</h3>
          {/* <div className="sidebar-item search-form">
            <form action>
              <input type="text" />
              <button type="submit"><i className="icofont-search" /></button>
            </form>
          </div> */}

          <Search/>
          {/* End sidebar search formn*/}


        
           <Category/>
          <RecentPost/>
          


          <h3 className="sidebar-title">Tags</h3>
                                    <div className="sidebar-item tags">
                                        <ul>
                                            <li><a href="#">App</a></li>
                                            <li><a href="#">IT</a></li>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">Mac</a></li>
                                            <li><a href="#">Design</a></li>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Creative</a></li>
                                            <li><a href="#">Studio</a></li>
                                            <li><a href="#">Smart</a></li>
                                            <li><a href="#">Tips</a></li>
                                            <li><a href="#">Marketing</a></li>
                                        </ul>

                                    </div>

        </div>{/* End sidebar */}
      </div>{/* End blog sidebar */}
    </div>
  </div>
</section>{/* End Blog Section */}

    
    
    
    </>


):(
  <>
  {/* <div className='spinner' style={{display: "flex",justifyContent: "center",padding:"20rem"}}>
<HashLoader color="#00FF00" /> 
</div> */}

<SkeletonPage/>



 </>
)}
</>
  )
}

export default Blog