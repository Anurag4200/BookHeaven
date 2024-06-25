import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo={
      email: data.email,
      password: data.password
    }
    await axios.post('http://localhost:4001/user/login',userInfo)
    .then((response) =>{
      console.log(response)
      if(response.data){
        toast.success('Successfully LoggedIn!')

      }
      localStorage.setItem("User",JSON.stringify(response.data.userExist))
      window.location.reload();
    })
    .catch((err )=>{
      if(err.response){
        toast.error(err.response.data.message)
      }
    })
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg mb-3">Login</h3>
            <div className="flex flex-col space-y-2">
              <span>Email</span>
              <input
                {...register("email", { required: true })}
                className="px-3 py-2 bg-zinc-600 rounded-md outline-none text-white"
                type="text"
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
                  Login
                </button>
                <p>
                  Not Registered?
                  <Link to="/signup">
                    <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                      SignUp
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
