// import React, { useState } from 'react'

// const Pagination = () => {

//     const [currentPage,setCurrentPage]=useState(1)
//     const recordPrePage=5;
//     const lastIndex=currentPage*recordPrePage;
//     const firstIndex=lastIndex - recordPrePage;
//     const records=blog .slice(firstIndex,lastIndex)
//     const npage=Math.ceil(blog.length/recordPrePage)
//     const number=[...Array(npage+1).keys()].slice(1)
//   return (
//     <>
    
    
// <h1>jjjj</h1>    
    
//     </>
//   )
// }

// export default Pagination




// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { FetchBlog } from '../redux/BlogSlice';

// const itemsPerPage = 2; // Number of items to display per page

// const Pagination = () => {

//   const{blog_data}=useSelector((state)=> state?.blog)

  
//   const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(FetchBlog())
   
//   },[])
//   console.log('page',blog_data);
 




//   const [data, setData] = useState([]); // Fetched data from the API
//   const [currentPage, setCurrentPage] = useState(1); // Current page number
//   const [totalPages, setTotalPages] = useState(0); // Total number of pages

//   // Function to fetch data from the API
//   const fetchData = async () => {
//     setData(data.data);
//       console.log("Pagination",data.data)
//       // Calculate the total number of pages based on the data length and itemsPerPage
//       setTotalPages(Math.ceil(data.length / itemsPerPage));
//     // try {
//     //   const response = await fetch('https://restapinodejs.onrender.com/api/allBlog');
//     //   const data = await response.json();
//     //   setData(data.data);
//     //   console.log("Pagination",data.data)
//     //   // Calculate the total number of pages based on the data length and itemsPerPage
//     //   setTotalPages(Math.ceil(data.length / itemsPerPage));
//     // } catch (error) {
//     //   console.error('Error fetching data:', error);
//     // }
//   };

//   // useEffect hook to fetch data when the component mounts or currentPage changes
//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   // Calculate the current page's data to display
//   const getCurrentPageData = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return data.slice(startIndex, endIndex);
//   };

//   // Handle page navigation
//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

//   // Go to the previous page
//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Go to the next page
//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div>
//       {/* Render the current page's data */}
//       {getCurrentPageData()?.data?.map((item) => (
//         <div key={item.id}>{/* Render your item content here */}</div>
//       ))}


// {/* <div className="blog-pagination">
//           <ul className="justify-content-center">
//             <li className="disabled"><i className="icofont-rounded-left" /></li>
//             <li><a href="#">1</a></li>
//             <li className="active"><a href="#">2</a></li>
//             <li><a href="#">3</a></li>
//             <li><a href="#"><i className="icofont-rounded-right" /></a></li>
//           </ul>
//         </div>
//  */}


//       {/* Pagination navigation */}
//       <div>
//         <button onClick={goToPreviousPage} disabled={currentPage === 1}>
//           Previous
//         </button>

//         {Array.from({ length: totalPages }, (_, index) => (
//           <button key={index} onClick={() => goToPage(index + 1)}>
//             {index + 1}
            
//           </button>
//         ))}

// <div className="blog-pagination">
//           <ul className="justify-content-center">
//             <li className="disabled"><i className="icofont-rounded-left" /></li>
//             <li><a href="#">1</a></li>
//             <li className="active"><a href="#">2</a></li>
//             <li><a href="#">3</a></li>
//             {/* <li><a href="#"><i className="icofont-rounded-right" /></a></li> */}
//              <li onClick={goToNextPage} disabled={currentPage === totalPages}> <a href="#"><i className="icofont-rounded-right" /></a></li> 
//           </ul>
//         </div>



        
//       </div>
//     </div>
//   );
// };

// export default Pagination;



// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { FetchBlog } from '../redux/BlogSlice'
// import { ThreeCircles } from 'react-loader-spinner'
// import Search from '../component/Blog/SearchBox'
// import { Link } from 'react-router-dom'
// import moment from 'moment/moment'
// import ReactPaginate from 'react-paginate'

// const Blog = () => {
//     const { blog_data } = useSelector((state) => state?.blog)
//     const dispatch = useDispatch()

//     const [currentPage, setCurrentPage] = useState(1);
//     const [postPerPage, setPostPerPage] = useState(2)

//     useEffect(() => {
//         dispatch(FetchBlog())
//     }, [])

//     console.log("b", blog_data);

//     const handlePageClick = (selectedPage) => {
//         setCurrentPage(selectedPage.selected + 1);
//     }
   

//     const indexOfLastPost = currentPage * postPerPage;
//     const indexofFirstPost = indexOfLastPost - postPerPage;
//     const currentPosts = blog_data?.data?.slice(indexofFirstPost, indexOfLastPost);

//     return (
//         <>
//             <main id="main">
//                 {/ ======= Breadcrumbs ======= /}
//                 <section id="breadcrumbs" className="breadcrumbs">
//                     <div className="container ">
//                         <div className="d-flex justify-content-between align-items-center pt-3">
//                             <h2>Blog</h2>
//                             <ol>
//                                 <li><a href="index.html">Home</a></li>
//                                 <li>Blog</li>
//                             </ol>
//                         </div>
//                     </div>
//                 </section>{/ End Breadcrumbs /}


//                 {/ ======= Blog Section ======= /}
//                 <section id="blog" className="blog">
//                     <div className="container">
//                         <div className="row">

//                             {blog_data !== null ? (
//                                 <>
//                                     <div className="col-lg-8 entries">
//                                         {
//                                             currentPosts?.map((bData, index) => {
//                                                 return (
//                                                     <>
//                                                         <article className="entry" data-aos="fade-up">
//                                                             <div className="entry-img">
//                                                                 <img src={`https://restapinodejs.onrender.com/api/blog/image/${bData._id}`} className="card-img-top" alt="..." />
//                                                             </div>
//                                                             <h2 className="entry-title">
//                                                                 <a href="blog-single.html">{bData.title}</a>
//                                                             </h2>
//                                                             <div className="entry-meta">
//                                                                 <ul>
//                                                                     <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
//                                                                     <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html">
//                                                                         <time>{moment(bData.createdAt).format(' Do MM, YYYY')}</time>
//                                                                         {/ <time>{moment(bData.createdAt).format(' Do MM, YYYY, h:mm:ss a')}</time> /}
//                                                                     </a></li>
//                                                                     <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
//                                                                 </ul>


//                                                             </div>
//                                                             <div className="entry-content">
//                                                                 <p dangerouslySetInnerHTML={{
//                                                                     __html: bData?.postText.slice(0, 350)
//                                                                 }}>
//                                                                 </p>
//                                                                 <div className="read-more">
//                                                                     <Link to={`/blogdetails/${bData._id}`}>Read More</Link>
//                                                                 </div>
//                                                             </div>
//                                                         </article>
//                                                     </>
//                                                 )
//                                             })
//                                         }
//                                         {/ End blog entry /}

//                                         <div className="blog-pagination">
//                                             <ReactPaginate
//                                                 breakLabel="..."
//                                                 nextLabel="next >"
//                                                 onPageChange={handlePageClick}
//                                                 pageCount={Math.ceil(blog_data?.data?.length / postPerPage)}
//                                                 previousLabel="< previous"
//                                                 activeClassName={'active'}
//                                             />
//                                         </div>
//                                     </div>
//                                     <Search />
//                                 </>
//                             ) : (
//                                 <>
//                                     <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "150px" }}>

//                                         <ThreeCircles
//                                             height="90"
//                                             width="90"
//                                             color="#1bbd36"
//                                             wrapperStyle={{}}
//                                             wrapperClass=""
//                                             visible={true}
//                                             ariaLabel="three-circles-rotating"
//                                             outerCircleColor=""
//                                             innerCircleColor=""
//                                             middleCircleColor=""
//                                         />

//                                         {/ <HashLoader color="#1bbd36" size={60} /> /}

//                                     </div>
//                                 </>
//                             )}



//                             {/ End blog entries list /}

//                             {/ End blog sidebar /}

//                         </div>
//                     </div>
//                 </section>{/ End Blog Section /}
//             </main>




//         </>
//     )
// }

// export default Blog