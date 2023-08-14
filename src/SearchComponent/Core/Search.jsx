// import axios from 'axios';
// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useSearch } from './Contex/ContexSearch';

// const Search = () => {
//     const [values, setValues] = useSearch();
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get(`https://restapinodejs.onrender.com/api/search/${values.keyword}`);
//       setValues({ ...values, results: data });
//       navigate("/search");
//     }catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <>
    
// {/*     
//     <h3 className="sidebar-title">Search</h3>
//           <div className="sidebar-item search-form">
//             <form action>
//               <input type="text" />
//               <button type="submit"><i className="icofont-search" /></button>
//             </form>
//           </div> */}

// <div className="sidebar-item search-form">
//         <form onSubmit={handleSubmit}>
//           <input
//             className="form-control"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//             value={values.keyword}
//             onChange={(e) => setValues({ ...values, keyword: e.target.value })}
//           />
//           <button type="submit"><i className="icofont-search"></i></button>
//         </form>
//       </div>
    
    
//     </>
//   )
// }

// export default Search




import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../Contex/ContexSearch';



const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`https://restapinodejs.onrender.com/api/search/${values.keyword}`);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="sidebar-item search-form">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          />
          <button type="submit"><i className="icofont-search"></i></button>
        </form>
      </div>
    </div>
  )
}

export default Search