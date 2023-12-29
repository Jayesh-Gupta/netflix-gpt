import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BG_IMG_URL, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const dispatch=useDispatch();
  const [isSignInForm, setisSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const name=useRef();
  const email = useRef();
  const password = useRef();
  

  const handleBtnSubmit = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message !== null) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser,{
            displayName:name.current.value,
            photoURL:PHOTO_URL
          }).then(()=>{
            const { uid, email, displayName,photoURL } = auth.currentUser;
            
            dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
            
        })
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  const handleToggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header className="" />
      <div className="absolute ">
        <img
          src={BG_IMG_URL}
          alt="background_img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  bg-black text-white w-3/12 my-36 left-0 right-0 mx-auto p-12  rounded-lg bg-opacity-70 "
      >
        <h1 className="py-2 my-2 font-bold text-3xl">
          {isSignInForm ? " Sign In" : " Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" py-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="Email"
          placeholder="Email"
          className=" px-2 py-2 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full px-2 py-2 my-2 bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg ">{errorMessage}</p>
        <button
          onClick={handleBtnSubmit}
          className="w-full py-2 my-4 border border-solid border-red-500 bg-red-500 cursor-pointer rounded-lg "
        >
          {isSignInForm ? " Sign In" : " Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={handleToggleSignInForm}>
          {isSignInForm
            ? " New to Netflix Sign up now"
            : " Already a User? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
