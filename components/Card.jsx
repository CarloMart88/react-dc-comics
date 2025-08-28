import React from 'react'

function Card({carta}) {
  const{ thumb, type , series , id} = carta
  return (
      <div className="col-16">
       <div className="card">
         <img src={thumb} className="image" alt={type}/>
          <h5>{series}</h5>
        </div>
      </div>
  )
}

export default Card
