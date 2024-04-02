import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser,loginGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        navigate('/')

        e.target.reset

        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGoogleLogin=()=>{
    loginGoogle()
    .then(res=>{
      console.log(res.user)
    })
    .catch(err=>{
      console.log(err.message);
    })
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full mx-auto lg:w-[800px] shadow-lg bg-white flex group text-[#0095ff]">
        <div className="w-1/2 min-h-full bg-[#0095ff] relative overflow-hidden hidden lg:block">
          <h1 className="text-white text-2xl absolute bottom-3 right-3 text-right">
            Hey! <br /> Welcome to
            <br /> My website
          </h1>
          <span className="bg-sky-800/20 w-32 h-32 -top-8 -left-8 rounded-full absolute z-20 group-hover:w-56 group-hover:h-56 duration-500"></span>
          <span className="bg-sky-800/50 w-36 h-36 -top-5 -left-5  rounded-full absolute z-10"></span>
        </div>
        <form onSubmit={handleLogin} className="p-8 flex-1">
          <h1 className="text-4xl pb-4">Login</h1>
          <div className="space-y-5">
            <label htmlFor="email_" className="block">
              Email
            </label>
            <input
              id="email_"
              type="email"
              name="email"
              placeholder="example@example.com"
              className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"
            />
            <label htmlFor="password_" className="block">
              Password
            </label>
            <input
              id="password_"
              type="password"
              placeholder=".............."
              name="password"
              min={5}
              className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#0095ff]"
            />
          </div>
          {/* button type will be submit for handling form submission*/}
          <button
            type="submit"
            className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50"
          >
            Submit
          </button>
        </form>
        <div>
          <button onClick={handleGoogleLogin}>google Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
