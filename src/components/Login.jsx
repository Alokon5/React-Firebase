import React, { useState } from 'react'
import { auth } from '../firebase-Config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';


const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

     function  loginHandler(e){
        e.preventDefault();
   
        
            signInWithEmailAndPassword(auth,email,password)
            .then((userCredentials)=>{
                console.log(userCredentials);
                toast.success("Loged in Successfully");
            }).catch((err)=>{
                toast.error("Invalid credentials");
            })
       
       

    }

  return (
    <div className='w-[100vw] h-[90vh] flex justify-center items-center'>
      <form onSubmit={loginHandler} className=' flex flex-col gap-4 items-center justify-center w-[30%] bg-blue-400 p-10 rounded-lg shadow-black shadow-2xl'>
        <h1 className=' font-bold'>Login to Account</h1>
        <input className='p-2 rounded-lg w-full border-none ' type='email' placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input  className='p-2 rounded-lg w-full border-none ' type='password' placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button  className=' text-white font-bold p-2 rounded-lg w-full border-none bg-blue-600' type='submit'>Login</button>
      </form>
    </div>
  )
}




export default Login;
