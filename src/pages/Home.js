import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Cars from '../components/Cars/Cars'
import CarsGrid from '../components/CarsGrid/CarsGrid'
import Testimonials from '../components/Testimonials/Testimonials'
import Brands from '../components/Brands/Brands'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cars />
      <CarsGrid />
      <Testimonials />
      <Brands />
      <Footer />
    </>
  )
}

export default Home