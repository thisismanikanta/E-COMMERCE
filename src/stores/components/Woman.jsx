import React from 'react'
import {womanData} from '../data/woman'
const Woman = () => {
  const firstFiveImages=womanData.slice(0,5)
    return (
     <>
     <div className="proTitle">
         <h2>Women Dressing</h2>
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

export default Woman