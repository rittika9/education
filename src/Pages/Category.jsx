import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCategory } from '../redux/CategorySlice'
import { Link } from 'react-router-dom'
import CategoryDetails from './CategoryDetails'
import { HashLoader } from 'react-spinners'

const Category = () => {
    const{category_data}=useSelector((state)=>state?.category)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(FetchCategory())
    },[])
console.log("p",category_data)
  return (
    <>

{category_data!==null ? (
   <>

     <h3 className="sidebar-title">Categories</h3>
          <div className="sidebar-item categories">
            {
            category_data?.data?.map((i)=>{
              

return(
  <>
  
  
  <ul>
              {/* <li><a href="#">{i._id} <span>(25)</span></a></li> */}

              <li><Link to={`/categorydetails/${i._id}`}>{i.category} <span>{i.category.length}</span></Link></li>

            
            </ul>
          
  
  </>
)

            })
            }
            
          </div>{/* End sidebar categories*/}
    
    
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

export default Category