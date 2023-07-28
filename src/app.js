import React from "react";
import { Home } from "./components/pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Abt } from "./components/pages/about";
import { NavBar } from "./components/nav/nav";
import { Login } from "./components/pages/auth/login";
import { Register } from "./components/pages/auth/register";
import { Footer } from "./components/footer/footer";
import { SubjectConmination } from "./components/pages/user/subjectCombination";
import UserDashboard from "./components/pages/user/dashboard";
export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={Abt}></Route>
          <Route path="/student/register" Component={Register}></Route>
          <Route path="/student/login" Component={Login} />
          <Route path="/student/dashboard" Component={UserDashboard} />
          <Route path="/Subject-combination" Component={SubjectConmination} />
        </Routes>
      </Router>
    </>
  );
};
