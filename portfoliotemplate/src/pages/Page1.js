import React from "react";
import Header from "../components/Header";
import VideoWork from "../components/projects/VideoProjects/Video";
import videowork1 from "../components/projects/VideoProjects/VideoWork1.json";
import videowork2 from "../components/projects/VideoProjects/VideoWork2.json";
import videowork3 from "../components/projects/VideoProjects/VideoWork3.json";
import Testimonials from "../components/testimonials/Testimonials";


const Page1 = ()=>{

    return(
        <>
        <Header/>
        <h1 className="text-center page-title">Happy Little Projects</h1>
        <VideoWork title={videowork1[0].title} data={videowork1[1]}/>
        <VideoWork title={videowork2[0].title} data={videowork2[1]}/>
        <VideoWork title={videowork3[0].title} data={videowork3[1]}/>
        <Testimonials/>
        </>
    )
}

export default Page1;