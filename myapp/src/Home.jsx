import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  let styles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5vh"
  }
  return (
    <div className="page home" style={styles}>
      <img src="./src/Profile.jpeg" alt="Profile image" style={{height:"300px",width:"300px", borderRadius:"50%"}}/>
      <h1 className="mainname">Rahul Pareek</h1>
      <p>Full Stack Java Developer</p>
      <Link to="/header" className="btn">View Projects</Link>
    </div>
  );
};

export default Home;
