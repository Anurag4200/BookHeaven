import React from "react";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("User");
      toast.success("Logout Successfully");
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          handleLogout();
        }}
        className="px-3 py-2 rounded-md cursor-pointer bg-red-500 text-white hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
