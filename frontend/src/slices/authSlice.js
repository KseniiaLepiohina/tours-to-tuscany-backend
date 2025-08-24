// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   users: [],
//   id: 0,
//   name:"",
//   surname:"",
//   fullName:"",
//   email: "",
//   phone:0,
//   password: "",
//   currentUser: "",
//   isNewUser:true,
//   isLoggedIn:false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setName:(state,action) => {
//       state.name = action.payload;
//     },
//     setSurname:(state,action) => {
//       state.surname = action.payload;
//     },
//     setFullName : (state,action) => {
//      state.fullName = action.payload;
//       // if (action.payload && action.payload.name && action.payload.surname) {
//       //   const { name, surname } = action.payload;
//       //   state.fullName = `${name} ${surname}`;
//       // } else {
//       //   state.fullName = '';
//       // }
      
//     },
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     setPhone:(state,action) => {
//       state.phone = action.payload;
//     },
//     setPassword: (state, action) => {
//       state.password = action.payload;
//     },

//     /* Create Account */
//     setNewUser: (state, action) => {
//       const newUser = {
//         id: state.users.length + 1, 
//         fullName: state.fullName,
//         email: state.email,
//         password: state.password,
//         isNewUser:true,
//         isLoggedIn:true,
//       };
//       state.users.push(newUser);
//       state.currentUser = newUser;
//     },

//     /* Login */
//     setCreatedUser: (state, action) => {
// const { email, password } = action.payload || {};

//   if (email && password) {
//     const user = state.users.find(user => user.email === email && user.password === password);
//     if (user) {
//       state.currentUser = user;
//       state.isLoggedIn = true;
//       localStorage.setItem('currentUser', JSON.stringify(user));
//     } else {
//       state.currentUser = null;
//     }
//   } else {
//     // fallback if data comes from localStorage
//     state.currentUser = action.payload;
//     state.isLoggedIn = true;
//   }
//     },
//     /* Reset Password */
//     setNewPassword: (state, action) => {
//       const { id, newPassword } = action.payload;
//       const user = state.users.find(user => user.id === id);

//       if (user) {
//         user.password = newPassword;
//       }
//     },
//     setLogOut:(state,action)=> {
//       state.currentUser = null;
//       state.isLoggedIn = false;
//       localStorage.removeItem('currentUser');
//     }
//   }
// });

// export const { setName,setSurname,setFullName,setEmail, setPassword, setNewUser, setCreatedUser, setNewPassword, setPhone,setLogOut } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState={
  currentUser:null,
  isLoggedIn:false
};
const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    setAuthUser:(state,action) => {
      state.currentUser = action.payload;
      state.isLoggedIn = !action.payload
      if(action.payload) {
        localStorage.setItem("currentUser",JSON.stringify(action.payload));
      }else{
        localStorage.removeItem("currentUser")
      }
    },
    logOut:(state)=> {
      state.currentUser = null;
      state.isLoggedIn = false;
      localStorage.removeItem("currentUser");
    }
  }
});
export const {setAuthUser,logOut} = authSlice.actions;
export default authSlice.reducer;