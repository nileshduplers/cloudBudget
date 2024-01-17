import React from 'react'
import "../../components/Features/Features.css"
import feature_img_1 from "../../assets/img/Bg.jpg"
import feature_img_2 from "../../assets/img/img-text.jpg"
import feature_img_3 from "../../assets/img/img-text.jpg"
function Features() {
  return (
    <section className='features'>
        <div className='container'>
            <h2>Features</h2>
            <div className='d-flex features-box-wrap'>
                <div className='features-box'>
                    <img src={feature_img_1} alt='' />
                    <div className='features-box-content'>
                        <h3>Supports All Currencies and Cards</h3>
                        <p>We support all popular currencies and is fully customizable to add</p>
                        <a href='#' title='Read More'>Read More</a>
                    </div>
                </div>

                <div className='features-box'>
                    <img src={feature_img_1} alt='' />
                    <div className='features-box-content'>
                        <h3>Manage your expenses on the go</h3>
                        <p>You can access your account from anywhere in the world on any device</p>
                        <a href='#' title='Read More'>Read More</a>
                    </div>
                </div>

                <div className='features-box'>
                    <img src={feature_img_1} alt='' />
                    <div className='features-box-content'>
                        <h3>Cloud Budget Management Software</h3>
                        <p>Our software is made so you can access and manage your budget</p>
                        <a href='#' title='Read More'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features