import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut=()=>{

    logOut()
    .then(res=>{
      alert('user log out ',res.user);
    })
    .catch(err=>{
      console.log(err.message)
    })

  }

  return (
    <div className="navbar bg-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          {user &&
          <li>
          <Link to="/order">Order</Link>
        </li>}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <>
        <span>{user.email}</span>
          <a onClick={handleLogOut} className="btn ">Log OUt</a>
        </>:<>
        <Link to={`/login`} className="btn ">Login</Link></>}
        
      </div>
    </div>
  );
};

export default Navbar;
