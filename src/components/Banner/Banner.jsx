import React from 'react'
import "../../components/Banner/Banner.css"
import banner from "../../assets/img/banner.jpg"


function Banner() {
  return (
    <section className='banner d-flex align-center text-center' style={{ backgroundImage: `url(${banner})` }}>
      <div className='container'>
       <h1>CloudBudget</h1>
       <p>Cloud budget management for everyone. Only €69.95 a Month After a 7 Day Trial of 
Up to €4.99</p>

      <a href='' title='Sign Up' className='btn btn-white'>Sign Up</a>
      </div>
      </section>
  )
}

export default Banner