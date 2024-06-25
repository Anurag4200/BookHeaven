import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

const Signup = () => {
  const location= useLocation()
  const navigate=useNavigate()
  const from= location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) =>{
    const userInfo={
      name: data.name,
      email: data.email,
      password: data.password
    }
    await axios.post('http://localhost:4001/user/signup',userInfo)
    .then((response) =>{
      console.log(response)
      if(response.data){
        toast.success('Successfully Created!');
        navigate(from, { replace: true });
       
      }
      localStorage.setItem("User",JSON.stringify(response.data.user))
    })
    .catch((err )=>{
      if(err.response){
        toast.error(err.response.data.message)
      }
    })
  };
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <Link to="/">
          {" "}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </Link>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg mb-3">SignUp</h3>
            <div className="flex flex-col space-y-2">
              <span>Username</span>
              <input
                {...register("name", { required: true })}
                className="px-3 py-2 bg-zinc-600 rounded-md outline-none text-white"
                type="text"
                name="name"
                placeholder="Enter Username"
              />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
              <span>Email</span>
              <input
                {...register("email", { required: true })}
                className="px-3 py-2 bg-zinc-600 rounded-md outline-none text-white"
                type="email"
                name="email"
                placeholder="Enter Email"
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              <span>Password</span>
              <input
                {...register("password", { required: true })}
                className="px-3 py-2 bg-zinc-600 rounded-md outline-none text-white"
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              <div className="w-full flex justify-between items-center">
                <button type="submit" className="btn btn-sm btn-secondary">
                  SignUp
                </button>
                <p>
                  Not Registered?
                  <Link to="/">
                    <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
