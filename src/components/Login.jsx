
import { useRef, useState } from "react";
import Header from "./Header";
import Validate from "../utils/Validate.jsx";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.jsx";
import {USER_AVATAR} from "../utils/constants.jsx"

const Login = () => {

  const [isSignInForm,setIsSignInForm]= useState(true);
  const [errorMessage, setErrorMessage]= useState(null);
  const dispatch =useDispatch();
 
  
  const toggleSignInform = () => {
    //event.preventDefault(); // Prevent form submission
    setIsSignInForm(!isSignInForm);
  }
  
  const email = useRef();
  const password = useRef();
  const name = useRef();
  

  const handleclickButton = () => {
    const message = Validate(email.current.value,password.current.value);
    setErrorMessage(message);  
    if(message) return;
 
    if(!isSignInForm){ //sign up logic
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
     // Signed up 
       const user = userCredential.user;
       updateProfile(user, {
        displayName: name.current.value, photoURL: USER_AVATAR
      }).then(() => {
        const {uid,email,displayName,photoURL}= auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        
      }).catch((error) => {
        setErrorMessage(error.message);
      }); 

     
    })
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMessage(errorCode+ "-"+ errorMessage);
   });
    }else{ 
     //Sign in logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-"+ errorMessage);
      });
    }
   
  }

  

  return (
    <div>
      
        <Header/>
    
      <div className="absolute">
      <img 
    
      src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
      alt="logo" />  
      </div>

   <div>
    <form onSubmit={(e)=>e.preventDefault()}
     className=" absolute w-3/12  bg-black p-12 my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85 ">
      <h1 className=" py-4 text-3xl font-semibold">
        {isSignInForm ? "Sign In": "Sign Up"}
      </h1>

      { !isSignInForm && (<input ref={name} className="p-4 my-4 w-full bg-gray-700" type="text" placeholder="Full Name" />)}

      <input ref={email}
      className="p-4 my-4 w-full bg-gray-700 " type="text"
       placeholder="email " />

      <input ref={password}
      className="p-4 my-4 w-full bg-gray-700 " type="password" placeholder="password" />
      <p className=" text-red-600">
        {errorMessage}
      </p> 
      <button onClick={handleclickButton}
      className="bg-red-700 p-4 my-6 w-full rounded-lg">
      {isSignInForm ? "Sign In": "Sign Up"}
      </button>

       <button className="p-2 cursor-pointer"
               onClick={toggleSignInform}>
          <p>
          {isSignInForm ? "New to netflix? Sign Up now": "Already registered? Sign In now"}
          </p>
        </button>
      
    </form>
   </div>
    

    </div>

   
  )
}

export default Login;

// const handleclickButton = async () => {
//   const message = Validate(email.current.value, password.current.value, name.current.value);
//   console.log(email.current.value, password.current.value);
//   setErrorMessage(message);
  
//   if (message) return;

//   try {
//     if (!isSignInForm) { // Sign up logic
//       const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
//       const user = userCredential.user;
//       console.log(user);
//     } else { // Sign in logic
//       const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
//       const user = userCredential.user;
//       console.log(user);
//     }
//   } catch (error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setErrorMessage(`${errorCode} - ${errorMessage}`);
//   }
// }