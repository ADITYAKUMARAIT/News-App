import React, { Component } from 'react'
import loading from './loading.gif'
const Spinner=()=> {
    return (
      <div className='text-center'>
        <img src={loading}alt=" laoding"/>
        
      </div>
    )
}
export default Spinner
