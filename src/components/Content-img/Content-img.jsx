import React from 'react'
import "../../components/Content-img/Content-img.css"
import content_img from "../../assets/img/img-text.jpg"

function Content_img() {
  return (
    <section className='content-img'>
        <div className='container'>
            <div className='d-flex'>
                <div className='content-text'>
                    <h2>Easy to Use Cloud Budget Management Software</h2>
                    <p>Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.</p>
                    <a href='#' title='Learn More'>Learn More</a>
                </div>
                <div className='content-text-img'>
                    <img src={content_img} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content_img