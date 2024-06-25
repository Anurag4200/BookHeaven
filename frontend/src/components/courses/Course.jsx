import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Courses from '../Courses'

const Course = () => {
  return (
    <>
    <Navbar/>
      <div className='min-h-screen'>
        <Courses/>
      </div>
    <Footer/>
    
    
    </>
  )
}

export default Course