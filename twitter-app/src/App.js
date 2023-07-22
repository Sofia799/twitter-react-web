import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componentes/Login";
import Home from "./componentes/Home";
import Register from "./componentes/Register";
import User from "./componentes/User";
import UserHome from "./componentes/UserHome";
import TweetDisplay from "./componentes/TweetDisplay";
import TrendingTopics from "./componentes/TrendingTopics";
import Search from "./componentes/Search";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/" element={<UserHome />} />
        <Route path="/tweet/:idTw" element={<TweetDisplay />} />
        <Route path="/trendingTopics" element={<TrendingTopics />} />
        <Route path="/search" element={<Search />} />

      </Routes>
    </Router>
  );
};

export default App;
