import React from "react";
import Header from "../components/Header";
import VideoWork from "../components/projects/VideoProjects/Video";
import videowork1 from "../components/projects/VideoProjects/VideoWork1.json";


const Page1 = ()=>{

    console.log("Here's the data from Page1 ",videowork1)
    return(
        <>
        <Header/>
        <h1 className="text-center page-title">Happy Little Projects</h1>
        <VideoWork data={videowork1}/>
        </>
    )
}

export default Page1;