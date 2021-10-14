import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects1 from "../components/Projects1";
import Projects2 from "../components/Projects2";
import Connect from "../components/Connect";


const Home = () =>{

    return(
        <>
        <Header/>
        <h1>Hello Homepage!</h1>
        <About/>
        <Projects1/>
        <Projects2/>
        <Connect/>
        </>
    )
}

export default Home;