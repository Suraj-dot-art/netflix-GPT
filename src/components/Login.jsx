
import { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm,setIsSignInForm]= useState(true);

  // const toggleSignInform= ()=> {
  //   setIsSignInForm(!isSignInForm);
  // }

  const toggleSignInform = (event) => {
    event.preventDefault(); // Prevent form submission
    setIsSignInForm(!isSignInForm);
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
    <form className=" absolute w-3/12  bg-black p-12 my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85 ">
      <h1 className=" py-4 text-3xl font-semibold">
        {isSignInForm ? "Sign In": "Sign Up"}
      </h1>

      { !isSignInForm && (<input className="p-4 my-4 w-full bg-gray-700" type="text" placeholder="Full Name" />)}

      <input className="p-4 my-4 w-full bg-gray-700 " type="email"
       placeholder="email or phone number" />

      <input className="p-4 my-4 w-full bg-gray-700 " type="password" placeholder="password" />
      <button className="bg-red-700 p-4 my-6 w-full rounded-lg">
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