// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import ggl from "../../assets/home/icons/CheckIn/google.svg";
// import {
//   setFullName,
//   setNewUser,
//   setEmail,
//   setPassword,
//   setCreatedUser,
// } from "../../slices/authSlice.js";
// import { toast } from "react-toastify";
// import axios from "axios";
// import close from "../../assets/home/icons/CheckIn/window-close.svg";


// export default function CreateAccount() {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleCloseModal = () => {
//     setIsOpen(false);
//     navigate("/");
//   };
//   useEffect(() => {
//     setIsOpen(true);
//   }, []);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { currentUser, error } = useSelector((state) => state.auth);

//   // const fullName = useSelector((state) => state.auth.fullName);
//   // const email = useSelector((state) => state.auth.email);
//   // const password = useSelector((state) => state.auth.password);

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     //create a user in AUTH0 via API
//     await fetch(`https://${process.env.AUTH0_DOMAIN}/dbconnection/signup`,{
//       method:"POST",
//       headers:{
//         "Content-Type":"applocation/json"
//       },
//       body:JSON.stringify({
//         client_id:process.env.AUTH0_CLIENT_ID,
//         email:form.email,
//         password:form.password,
//         connection:'Username-Password Authentification',
//         user_metadata:{
//           name:form.name,
//           surname:form.surname
//         }
//       }),
//     });

//     loginWithRedirect({
//       email:form.email,
//       password:form.password,
//     });
//   };

//   const createAccount = async (data) => {
//     try {
//     const response = await axios.post(
//       "http://localhost:3000/auth/createAccount",
//       { fullName, email, password }
//     );
//     const user = response.data;
//     dispatch(setCreatedUser(user));
//     localStorage.setItem('currentUser',JSON.stringify(user));
//     toast.success("Account created successfully!");
//   } catch (error) {
//     console.error(error);
//     toast.error("Error creating account: " + error.response?.data?.message || error.message);
//   }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!fullName || !email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }
//     toast.success('User was created succesfully');
//     createAccount();
//   };

//   useEffect(() => {
//     if (currentUser) {
//       navigate("/account/noTickets");
//     }
//   }, [currentUser, navigate]);

//   return (
//     <section className="modal">
//       {isOpen && (
//         <section className="auth">
//           <section style={{ display: "flex", gap: "6.25em" }}>
//             <h1>Create Account</h1>
//             <button onClick={handleCloseModal} className="modal-close-btn ">
//               <img src={close} alt="close the window" />
//             </button>
//           </section>

//           <form onSubmit={handleSubmit}>
//             <label htmlFor="fullName">Name and Surname</label>
//             <input
//               value={form.name && form.username}
//               onChange={(e)=> setForm({...form,name:e.target.value})}
//               // onChange={(e) => dispatch(setFullName(e.target.value))}
//               name="fullName"
//               placeholder="Enter your name and surname"
//             />
//             <label htmlFor="email">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={(e)=> setForm({...form,email:e.target.value})}

//               // onChange={(e) => dispatch(setEmail(e.target.value))}
//               placeholder="Enter your email address"
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               value={form.password}
//               onChange={(e)=> setForm({...form,password:e.target.value})}

//               // onChange={(e) => dispatch(setPassword(e.target.value))}
//               name="password"
//               aria-describedby="password"
//               aria-invalid="false"
//               placeholder="Enter your password"
//             />
//             <section
//               style={{ display: "flex", gap: "0.8em", alignItems: "baseline" }}
//             >
//               <input
//                 style={{ height: "1em", width: "1em" }}
//                 required
//                 type="checkbox"
//               />
//               <p>
//                 I agree with <span style={{ color: "#FA8B02" }}>Terms</span> and{" "}
//                 <span style={{ color: "#FA8B02" }}>Privacy</span>
//               </p>
//             </section>
//             <section style={{ display: "flex", flexDirection: "column" }}>
//               <button
//               onClick={handleSubmit}
//                 className="general_btn"
//                 style={{ padding: "0.625em 1.5em 0.625em 1.5em" }}
//                 type="submit"
//               >
//                 <span>Sign Up</span>
//               </button>
//               <p>or</p>
//               <a href="http://localhost:3000/auth/google">
//                 <button 
//                 className="btn_ggl_submit">
//                   <img src={ggl} alt="signIn with Google" />
//                   <span>Sign In with Google</span>
//                 </button>
//               </a>

//               <section className="additionals">
//                 <p>Already have an account?</p>
//                 <Link to="/auth/login">
//                   <span style={{ color: "#FA8B02" }}>Log In</span>
//                 </Link>
//               </section>
//             </section>
//           </form>

//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </section>
//       )}
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ggl from "../../assets/home/icons/CheckIn/google.svg";
import {
  setFullName,
  setNewUser,
  setEmail,
  setPassword,
  setCreatedUser,
} from "../../slices/authSlice.js";
import { toast } from "react-toastify";
import axios from "axios";
import close from "../../assets/home/icons/CheckIn/window-close.svg";
import { useAuth0 } from "@auth0/auth0-react";


export default function CreateAccount() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const { loginWithRedirect } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useSelector((state)=> state.auth.currentUser);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsOpen(false);
    navigate("/");
  };
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password } = form;
    if (!fullName || !email || !password) {
      toast.error("Please, fill in all fields");
      return;
    }

    try {
      //1.create a user in AUTH0 via API
      await fetch(`https://${process.env.AUTH0_DOMAIN}/dbconnection/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          client_id: process.env.AUTH0_CLIENT_ID,
          email: form.email,
          password: form.password,
          connection: 'Username-Password Authentification',
          user_metadata: {
            fullName: form.fullName,
          },
        }),
      });

      const response = await axios.post("http://localhost:3000/auth/createAccount", {
        fullName,
        email,
        password,
      });

      await loginWithRedirect({
        email,
      password,
      });

      const user = response.data;
      dispatch(setCreatedUser(user));
      localStorage.setItem("currentUser", JSON.stringify(user));
      toast.success('Account created successfully');
      navigate("/account/noTickets");
    }
    catch (error) {
      console.log(error);
      toast.error("Error creating account:" + (error.response.data.message || error.message))
    }
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/account/noTickets");
    }
  }, [currentUser, navigate]);

  return (
    <section className="modal">
      {isOpen && (
        <section className="auth">
          <section style={{ display: "flex", gap: "6.25em" }}>
            <h1>Create Account</h1>
            <button onClick={handleCloseModal} className="modal-close-btn ">
              <img src={close} alt="close the window" />
            </button>
          </section>

          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Name and Surname</label>
            <input
              value={form.fullName}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              name="fullName"
              placeholder="Enter your name and surname"
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email address"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              name="password"
              aria-describedby="password"
              aria-invalid="false"
              placeholder="Enter your password"
            />
            <section
              style={{ display: "flex", gap: "0.8em", alignItems: "baseline" }}
            >
              <input
                style={{ height: "1em", width: "1em" }}
                required
                type="checkbox"
              />
              <p>
                I agree with <span style={{ color: "#FA8B02" }}>Terms</span> and{" "}
                <span style={{ color: "#FA8B02" }}>Privacy</span>
              </p>
            </section>
            <section style={{ display: "flex", flexDirection: "column" }}>
              <button
                onClick={handleSubmit}
                className="general_btn"
                style={{ padding: "0.625em 1.5em 0.625em 1.5em" }}
                type="submit"
              >
                <span>Sign Up</span>
              </button>
              <p>or</p>
              <a href="http://localhost:3000/auth/google">
                <button
                onClick={()=> loginWithRedirect({
                  connection:'google_oauth2'
                })}
                  className="btn_ggl_submit">
                  <img src={ggl} alt="signIn with Google" />
                  <span>Sign In with Google</span>
                </button>
              </a>

              <section className="additionals">
                <p>Already have an account?</p>
                <Link to="/auth/login">
                  <span style={{ color: "#FA8B02" }}>Log In</span>
                </Link>
              </section>
            </section>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </section>
      )}
    </section>
  );
}
