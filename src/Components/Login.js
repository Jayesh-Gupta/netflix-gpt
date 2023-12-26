import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isToggleSignIn, setIsToggleSignIn] = useState(true);

  const handleToggleSignInForm = () => {
    setIsToggleSignIn(!isToggleSignIn);
  };

  return (
    <div>
      <Header className="" />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background_img"
        />
      </div>
      <form className="absolute  bg-black text-white w-3/12 my-36 left-0 right-0 mx-auto p-12  rounded-lg bg-opacity-70 ">
        <h1 className="py-2 my-2 font-bold text-3xl">{isToggleSignIn?" Sign In":" Sign Up"}</h1>
       {!isToggleSignIn &&(
        <input
          type="text"
          placeholder="Full Name"
          className=" py-2 my-2 w-full bg-gray-700"
        />)}
        <input
          type="Email"
          placeholder="Email"
          className=" py-2 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full py-2 my-2 bg-gray-700"
        />
        <button
          type="submit"
          className="w-full py-2 my-4 border border-solid border-red-500 bg-red-500 cursor-pointer rounded-lg "
        >
          {isToggleSignIn?" Sign In":" Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={handleToggleSignInForm}>
          
        {isToggleSignIn?" New to Netflix Sign up now":
            " Already a User? Sign In now"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
