import React, { useState } from 'react'
import list from "../../public/list.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from "axios"

const Freebook = () => {
  const [courses, setCourses] =useState([]);
  useState(async ()=>{
    const response=await axios.get('http://localhost:4001/book')
    setCourses(response.data)

  },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const FreeBook= courses.filter((item)=>item.category==="Free")
    // console.log(FreeBook)

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-3'>
        <h1 className='font-semibold text-xl '>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aspernatur.</p>

    
    <div>
    <Slider {...settings}>
        {FreeBook.map((item)=>(
            <Cards key={item._id} item={item}/>
        ))}
        
       
      </Slider>
    </div>
    
    </div>
    </>
  )
}

export default Freebook