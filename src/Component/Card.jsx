import React, { useState } from 'react'


function Card(props) {
   
  let [count,setCount]=useState(props.Time);
  return (
    <div className='btn-box'>
      <p>{props.Name}</p>
      <p> - {count} Hours</p>
      <button className='inc-btn1' onClick={()=>setCount(++count)}>+</button>
      <button className='inc-btn2'onClick={() => count > 0 ? setCount(count - 1) : null}>-</button>
      <button className='del-btn' onClick={()=>props.handleDelete(props.Id)} >Delete</button>
    </div>
  )
}

export default Card
