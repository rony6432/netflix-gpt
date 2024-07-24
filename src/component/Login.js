import {useNavigate,useSubmit } from "react-router-dom"

import Header from "./Header"
import { useRef, useState } from "react"
import Validation from "../utils/Validation"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../utils/Firebase"
export const Login=()=>{
    const [isSignin,setsignin]=useState(true)
    const [error,seterror]=useState("")
    const email=useRef(null)
    const password=useRef(null)
    const navigate=useNavigate();
    const HandleClick=()=>{
     //form validation
     const ve=Validation(email.current.value,password.current.value);
     seterror(ve)

     //sign import 
    if(ve) return

    if(!isSignin){
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    else{
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
            navigate("/browse")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }



    }
    const toggle=()=>{
        if(isSignin)
        setsignin(false);
        else
        setsignin(true);
    }
    return (
        <div className="">
            <Header/>
            <div className="">
            <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute bg-black p-12 my-36 left-0 right-0 mx-auto bg-opacity-60 rounded-md">
                <h1 className="font-bold text-3xl py-4 text-white">{isSignin?"Sign In":"Sign Up"}</h1>
                {!isSignin&&<input type="text" placeholder="Name" className="p-2 my-4 w-full rounded-md bg-slate-500"/>}
                <input ref={email} type="email" placeholder="Email" className="p-2 my-4 w-full rounded-md bg-slate-500"/>
                <input ref={password} type="password" placeholder="password" className="p-2 my-4 w-full rounded-md bg-slate-500"/>
                <p className="text-red-700 font-bold text-xl">{error}</p>
                <button  className="text-white bg-red-700 p-4 my-6 w-full rounded-md"type="submit" onClick={HandleClick}>{isSignin?"Sign In":"Sign Up"}</button>
                <p className="cursor-pointer text-white" onClick={toggle}>{isSignin?"New to Netflix ? Sign Up Now":"Already Registed ? Sign In Now"}</p>
                
            </form>
                <img className=""src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
               
            </div>
            
        </div>
    )
}