import React from 'react'
import Banner from '../../components/banner/Banner'
import Features from '../../components/features/Features'
import AboutUs from '../../components/about/AboutUs'
import Footer from '../../components/footer/Footer'

export default function HomePage() {
  return (
    <>
     <Banner title="Shop with Ease: Your One-Stop Online Destination!" /> 
     <Features/>
     <AboutUs/>
     <Footer/>
    </>
  )
}
