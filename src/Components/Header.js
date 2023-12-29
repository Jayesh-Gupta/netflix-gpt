import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();

  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const handleSignOut = () => {
    
    signOut(auth)
      .then(() => {
          
      })
      .catch((error) => {
        // An error happened.

      });
  };

 
 
  useEffect(() => {
    
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      
      if (user) {
        
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        navigate("/browse");
      } else {
        
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>{
        
        
        return unsubscribe();
        
    }
  }, []);

  return (
    <div className="absolute z-10  bg-gradient-to-b from-black flex justify-between">
      <div className=" w-2/12  px-8 py-2 ">
        <img
          src={LOGO}
          alt="logo"
        />
      </div>
      {user && <div className="flex items-center">
        <img
          className="w-12 h-12 mx-1"
          alt="sign_out_img"
          src={user.photoURL}
        />
        <button
          className="mr-5 px-2 border border-red-500 h-1/3 rounded-lg hover:bg-red-500 text-white"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </div>}
    </div>
  );
};

export default Header;
