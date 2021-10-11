import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects1 from "../components/projects1";


const Home = () =>{

    return(
        <>
        <Header/>
        <h1>Hello Homepage!</h1>
        <About/>
        <Projects1/>
        </>
    )
}

export default Home;