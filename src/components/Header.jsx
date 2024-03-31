import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';


const Header = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL}= user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  //
  return () => unsubscribe();
  }, []);
  
  return (
    
      <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img
         className='w-44'
         src={LOGO}
         alt="netflix logo" />

       {user && (<div>
         <img className='w-12'
         src={user.photoURL} alt="" />
         <button onClick={handleSignOut}
         className='text-sm font-bold'>
          Sign out ➤
         </button>
       




         </div>)}
      </div>
   
  )
}

export default Header;