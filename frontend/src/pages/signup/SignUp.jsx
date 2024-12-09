import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          Sign Up •<span className="text-purple-300 font-bold"> APTEAN</span>
        </h1>
        <form>
          <div>
            <label className="label p-2" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered h-10"
            />
            <label className="label p-2" />
            <input
              type="email"
              placeholder="Email-Id"
              className="w-full input input-bordered h-10"
            />
            <label className="label p-2" />
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
            />
            <label className="label p-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
            />
            <label className="label p-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox />
          <a
            className="text-sm hover:underline hover:text-white mt-4 inline-block"
            href="#"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700 hover:text-white">
              CREATE AN ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
