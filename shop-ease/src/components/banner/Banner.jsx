import React from 'react'
import bannerImg from '../../data/images/Banner.jpg'
import './Banner.css'
import icons from '../../data/icons'

export default function Banner(prop) {
  return (
    <div id='banner-container' className='mt-5 pt-2 position-relative banner-container'>
      <a href='#' className='cart-icon z-3 display-1 text-danger position-absolute hover-scale'><i className={icons.cart}></i></a>
      <img src={bannerImg} alt="banner image" className='img-fluid banner-img' id='banner-img' />
      <h1 id='banner-head' className='banner-head top-50 end-0  mx-1 p-0'>{prop.title}</h1>
    </div>
  )
}
