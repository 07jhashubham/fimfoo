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
          <div className="md:flex md:items-center md:justify-between">
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

          <div className="md:flex md:px-10 px-4">
            <div className="md:flex md:flex-col md:w-3/5">
              <h1 className=" md:text-6xl text-3xl">
                Achieve <br />{" "}
                <span className=" text-[#FF6B00]">Optimal Health</span>
                <br />
                through <b>Tailored & Data-Driven Metabolic Care</b>
              </h1>
              <img src="main.svg" alt="" className=" h-2/5 mt-10 md:-ml-32" />
            </div>
            <Pop />
          </div>
        </div>
      </div>

      {/* Marquee section with images */}
      <div className="marquee-container ">
        <Marquee speed={50} gradient={false}>
          <img src="d1.svg" alt="Icon 1" className="mx-4 w-60 h-60" />
          <img src="d2.svg" alt="Icon 2" className="mx-4 w-60 h-60" />
          <img src="d3.svg" alt="Icon 3" className="mx-4 w-60 h-60" />
          <img src="d4.svg" alt="Icon 4" className="mx-4 w-60 h-60" />
          <img src="d5.svg" alt="Icon 5" className="mx-4 w-60 h-60" />
          <img src="d6.svg" alt="Icon 6" className="mx-4 w-60 h-60" />
        </Marquee>
      </div>

      <div className=" bg-[#E6E6E6] flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between px-8 py-4 text-center">
        <p>
          Connect with us at : <br />
          <b>info@mytwinlab.com</b>
        </p>
        <p>
          <b>
            Privacy Policy . Term of Service Applied <br />
          </b>
          © 2024 mytwin . All rights reserved
        </p>
      </div>
    </div>
  );
}

export default App;