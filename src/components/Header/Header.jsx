import React from 'react'
import "../../components/Header/Header.css"
import logo from "../../assets/img/logo.svg"
import { Routes, Route } from 'react-router-dom'
import Navbar from '../../components/Header/Navbar'
 

function Header() {
  return (
    <header>
        <div className='container'>
          
            <div className='d-flex align-center'>

                <div className='logo'>
                    <a href='/' title='CloudBudget'>
                        <img src={logo} alt="CloudBudget" />
                    </a>
                </div>

                <Navbar/>
                                
                <div className='header-right'>
                  <a href='' title='' className='btn'>Login</a>
                </div>


              </div>
        </div>
    </header>
  )
}

export default Header