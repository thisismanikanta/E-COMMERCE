import React from 'react'
import {watchData} from '../data/Watch'
const watch = () => {
  const firstFiveImages=watchData.slice(0,5)
    return (
     <>
     <div className="proTitle">
     <h2>Watches</h2>
     </div>
      <div className='proSection'>
          {
              firstFiveImages.map((item)=>{
                  return(
                      <div className='imgBox'>
                          <img className='proImg' src={item.image} alt=''/>
                      </div>
                  )
              })
          }
      </div></>
  )
}

export default watch