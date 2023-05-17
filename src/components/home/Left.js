import React from 'react'
import {bannerImg} from '../../assets/index'

const Left = () => {
  return (
    <div className='w-5/12 h-full bg-bodyColor rounded-2xl'>
      <div className='w-full h-3/5'>
        <img
        className='w-full h-full object-cover rounded-2xl'
        src={bannerImg} 
        alt="bannerImage"
        loading='priority' />
      </div>

      <div className='w-full h-2/5 '>
        {/*Contain the intro*/ }

      </div>
    </div>
  )
}

export default Left