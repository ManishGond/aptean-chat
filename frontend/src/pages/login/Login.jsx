import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-start justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          Login •<span className="text-purple-300 font-bold"> APTEAN</span>
        </h1>
        <form>
          <div>
            <label className="label p-2"></label>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label"></label>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-white mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 hover:text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
