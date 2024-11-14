import React, { useState } from "react";
import "./App.css";
import Marquee from "react-fast-marquee";
import Pop from "./Pop";

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Conditionally render content based on button click */}
      <div className="content">
        <div>
          <div className="md:flex md:items-center md:justify-between -mt-4 md:-mt-8">
            <img
              src="logo.svg"
              alt="Logo"
              className="md:w-1/3 md:h-44 h-36 md:-ml-16"
              draggable="false"
            />
            <img
              src="topside.svg"
              alt="Topside"
              className="w-2/3 -mt-8 md:block hidden"
              draggable="false"
            />
          </div>

          <div className="md:flex md:px-10 px-4 -mt-10 mb">
            <div className="md:flex md:flex-col md:w-3/5">
              <h1 className=" md:text-6xl text-3xl">
                Achieve <br />{" "}
                <span className=" text-[#FF6B00] font-bold">
                  Optimal Health
                </span>
                <br />
                through <br /> <b> Tailored & Data-Driven Metabolic Care</b>
              </h1>
              <img 
              src="main.svg" 
              alt="" 
              className=" md:flex h-1/2 mt-10 md:-ml-20"
              style={{ width: "3000px", height: "380px" }} />
            </div>
            <Pop />
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-col text-center ml-10 mb-2 mt-5" style={{ fontSize: "1.8em" }}>
  <h1 className="text-[#000000] font-bold">
    Tracking Millions of Health Data Points Daily
  </h1>
</div>


      {/* Marquee section with images */}
      <div className="marquee-container -mt-20">
        <Marquee speed={50} gradient={false}>
          <img src="d1.svg" alt="Icon 1" className="mx-4 w-60 h-60" />
          <img src="d2.svg" alt="Icon 2" className="mx-4 w-60 h-60" />
          <img src="d3.svg" alt="Icon 3" className="mx-4 w-44 h-60" />
          <img src="d4.svg" alt="Icon 4" className="mx-4 w-60 h-60" />
          <img src="d5.svg" alt="Icon 5" className="mx-4 w-60 h-60" />
          <img src="d6.svg" alt="Icon 6" className="mx-4 w-60 h-60" />
          <img src="d1.svg" alt="Icon 1" className="mx-4 w-60 h-60" />
          <img src="d2.svg" alt="Icon 2" className="mx-4 w-60 h-60" />
          <img src="d3.svg" alt="Icon 3" className="mx-4 w-44 h-60" />
          <img src="d4.svg" alt="Icon 4" className="mx-4 w-60 h-60" />
          <img src="d5.svg" alt="Icon 5" className="mx-4 w-60 h-60" />
          <img src="d6.svg" alt="Icon 6" className="mx-4 w-60 h-60" />
          <img src="d1.svg" alt="Icon 1" className="mx-4 w-60 h-60" />
          <img src="d2.svg" alt="Icon 2" className="mx-4 w-60 h-60" />
          <img src="d3.svg" alt="Icon 3" className="mx-4 w-44 h-60" />
          <img src="d4.svg" alt="Icon 4" className="mx-4 w-60 h-60" />
          <img src="d5.svg" alt="Icon 5" className="mx-4 w-60 h-60" />
          <img src="d6.svg" alt="Icon 6" className="mx-4 w-60 h-60" />
        </Marquee>
      </div>

      <div className=" bg-[#E6E6E6] flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between px-8 py-4 -mt-16 text-center">
        <p>
          Connect with us at :<b> info@mytwinlab.com</b>
        </ p>
        <p>
          © 2024 mytwin . All rights reserved
        </p>
      </div>
    </div>
  );
}

export default App;
