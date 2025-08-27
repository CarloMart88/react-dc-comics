import React from 'react'

function Card() {
  return (
    <div className="col-16" key={id}>
       <div className="card">
         <img src={thumb} className="image" alt={type}/>
          <h5>{series}</h5>
        </div>
      </div>
  )
}

export default Card
