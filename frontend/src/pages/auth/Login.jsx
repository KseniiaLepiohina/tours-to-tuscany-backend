import React,{useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import ggl from '../../assets/home/icons/CheckIn/google.svg'
import ResetPassword from "./ResetPassword";
import CreateAccount from "./CreateAccount";
import { connect, useDispatch,useSelector } from "react-redux";
// import {useLoginMutation} from '../../slices/authSlice.js';
import { setAuthUser, setCreatedUser} from "../../slices/authSlice.js";
import axios from 'axios';
import close from '../../assets/home/icons/CheckIn/window-close.svg'
import { current } from "@reduxjs/toolkit";
import { useAuth0 } from "@auth0/auth0-react";



export default function Login () {

  const {loginWithRedirect,user,isAuthenticated,error} = useAuth0();
  const navigate = useNavigate();
const dispatch = useDispatch();
useEffect(()=> {
  if(isAuthenticated && user) {
     dispatch(setAuthUser(user));
  }
},[isAuthenticated,user,dispatch]);

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const currentUser = useSelector((state)=> state.auth.setCreatedUser)

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });

    // Зберігаємо токен у localStorage
    const token = res.data.token;
    localStorage.setItem("authToken", token);

    // Зберігаємо дані користувача в Redux та localStorage
    const user = res.data.user; // перевірити структуру відповіді API
    dispatch(setCreatedUser({ email: user.email, password: user.password }));

    // Перенаправляємо на іншу сторінку
    navigate("/account/haveTickets");
  } catch (err) {
    console.error("Login error:", err);
  }
};

useEffect(() => {
  if (currentUser) {
    navigate("/account/haveTickets");
  }
}, [currentUser, navigate]);


const handleCloseModal = () => {
  navigate('/');
};

    return(
        <>
        <section className="modal">
        <section className="auth">
           <form 
           onSubmit={handleSubmit}
           action="/login" method="post"> 
           <section style={{display:'flex',gap:'6.25em'}} >
            <h1>Login</h1>
             <button 
                  onClick={handleCloseModal}
                  className="modal-close-btn ">
                    <img src={close} alt="close the window"/>
                  </button>
           </section>
            
              <label for="email">Email Address</label>
              <input 
                    name="email"
                    type="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    autoComplete="username"
                    required autoFocus
              />
                    <section style={{display:'flex', flexDirection:'column',alignItems:'flex-start',gap:'0.6em'}}>

                    
                <label for="password"> Password</label>
                        <input
                        name="password" 
                        type="password" 
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password}
                />
                      <Link to="/auth/resetpassword" element={<ResetPassword/>} >
                        <h5 
                        style={{padding:'0.4em 0 0 8em'}}                        >Forgot your password?</h5>
                     </Link>
                    </section>
                    <section  style={{display:'flex',flexDirection:'column'}}>
                    <button 
                      className="general_btn" 
                      style={{padding:'0.625em 1.5em 0.625em 1.5em'}}
                      type="submit"
                    >
                      <span>Sign In</span> </button>
                        <p>or</p>
                        <Link to="/auth/google">
                    <button 
                    onClick={()=> { connection:"google-oauth2" }}
                    className="btn_ggl_submit" 
                    type="submit" 
                    placeholder="Sign Up with Google"
                    > 

                        <img src={ggl} alt="signIn with Google"/> 
                        <span>Sign In with Google</span>  
                    </button>
                    </Link>
                    </section>
                <section className="additionals">
                    <p>Already have an account?</p>
                <Link to='/auth/createAccount'element={<CreateAccount/>}>
                <span>Sign Up</span>
                </Link>
                </section>
                
                </form>
        </section> 
        </section>
        </>
    )
}