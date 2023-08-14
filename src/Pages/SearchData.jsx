import React from 'react'
import { useSearch } from '../SearchComponent/Contex/ContexSearch';

const SearchData = () => {
    const [values, setValues] = useSearch()
    console.log(values);
    return (
      <>
        <div className="container">
          <div className="row">
            
            {values?.results.map((item) => {
              return (
                <>
                  <div className="col-md-12">
                    <div class="card">
                      <div class="card-header">
                        {item.title}
                      </div>
                      <div class="card-body">

                        <h5 class="card-title">
                        <p dangerouslySetInnerHTML={{
                                                            __html: item.postText
                                                        }}>
                                                        </p>
                   
                          {/* {item.postText} */}
  
                          
                        </h5>
  
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
  
          </div>
        </div>
  
      </>
  )
}

export default SearchData