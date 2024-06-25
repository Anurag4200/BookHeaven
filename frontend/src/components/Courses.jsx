import React, { useState } from "react";
// import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios"

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useState(async ()=>{
    const response=await axios.get('http://localhost:4001/book')
    setCourses(response.data)

  },[])



  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center space-y-4">
          <h1 className="text-2xl font-semibold md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here:)</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            quaerat porro labore aliquam nihil asperiores officiis dicta,
            explicabo ipsum, velit cumque ipsam nulla ad beatae eligendi
            doloremque corporis perferendis pariatur ex itaque a delectus!
          </p>
          <Link to="/"><button className="btn btn-secondary">Back</button></Link>
        </div>
        </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 px-4">
        {courses.map((item) => {
          return (
            <Cards key={item._id} item={item}/>
          );
        })}
      </div>
      
    </>
  );
};

export default Courses;
