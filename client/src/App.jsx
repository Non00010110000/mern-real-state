import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";

const App = () => {
  return <BrowserRouter>
<Routes>
  <Header/>
  <Route path="/" element={<Home/>}/>
  <Route path="sign-in" element={<SignIn/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/profile" element={<Profile/>}/>
</Routes>
  </BrowserRouter>
};

export default App;
