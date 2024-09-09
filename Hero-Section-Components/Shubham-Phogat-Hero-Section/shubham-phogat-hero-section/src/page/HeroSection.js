import React, { useEffect, useRef } from "react";
import "../stylesheets/HeroSecction.css";
import lamp from "../assests/images/lamp.png";
import sofa from "../assests/images/sofa.png";
import tv from "../assests/images/tv.png";
import tvSet from "../assests/images/tv-set.png";
const HeroSection = () => {
  const txtRef = useRef(null);
  const lmpRef = useRef(null);
  const sofRef = useRef(null);
  // window.addEventListener("DOMContentLoaded", () => {
  //   let txt = txtRef.current;
  //   let lmp = lmpRef.current;
  //   let sof = sofRef.current;

  //   window.addEventListener("scroll", () => {
  //     let val = window.scrollY;
  //     txt.style.marginTop = val * 0.75 + "px";
  //     sof.style.transform = `translateX(${val * -1.75}px)`;
  //     lmp.style.transform = `translateX(${val * 1.75}px)`;
  //   });
  // });
  useEffect(() => {
    // Set a timeout to delay adding the scroll event listener
    const timeoutId = setTimeout(() => {
      let txt = txtRef.current;
      let lmp = lmpRef.current;
      let sof = sofRef.current;
      console.log(txt.style, "this is txt");
      // Function to handle scroll
      const handleScroll = () => {
        let val = window.scrollY;

        txt.style.marginTop = val * 0.75 + "px";
        sof.style.transform = `translateX(${val * -1.75}px)`;
        lmp.style.transform = `translateX(${val * 1.75}px)`;
      };

      // Add the scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup the scroll event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, 1000); // Delay of 1000ms (1 second)

    // Clear the timeout if the component unmounts before the delay
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="navbar my-2 ml-2 absolute w-full top-0 left-0 flex justify-between pl-30 pr-30 items-center z-50 ">
        <div className="logo text-xl font-bold text-red-400 ">LOGO</div>
        <nav className="navigation">
          <a
            className="px-10 text-red-400 ml-0 mr-10 rounded-xl active:bg-red-300 active:text-white
           hover:text-white  hover:bg-red-400"
          >
            Home
          </a>
          <a
            className="px-10 text-red-400 ml-0 mr-10 rounded-xl active:bg-red-300 active:text-white
           hover:text-white hover:bg-red-400"
          >
            About
          </a>
          <a
            className="px-10 text-red-400 ml-0 mr-10 rounded-xl active:bg-red-300 active:text-white
           hover:text-white hover:bg-red-400"
          >
            Contact
          </a>
          <a
            className="px-10 text-red-400 ml-0 mr-10 rounded-xl active:bg-red-300 active:text-white
           hover:text-white hover:bg-red-400"
          >
            Service
          </a>
        </nav>
      </div>
      <section className=" z-20 relative flex justify-center items-center h-screen">
        <h2
          className=" z-10 top-20 font-bold absolute text-5xl text-white drop-shadow-md"
          id="text"
          ref={txtRef}
        >
          Interior Designs
        </h2>
        <img
          className=" lamp absolute  z-50   w-full"
          src={lamp}
          ref={lmpRef}
          id="lamp"
          alt="invalid source"
        />
        <img
          className=" sofa absolute  z-20 "
          src={sofa}
          ref={sofRef}
          id="sofa"
          alt="invalid source"
        />
        <img
          className="absolute top-0 left-0 h-screen w-full"
          src={tv}
          alt="invalid source"
        />
        <img
          className="absolute top-0 left-0 tvSet z-20"
          src={tvSet}
          id="tvSet"
          alt="invalid source"
        />
      </section>
      <section className="bg-red-100 text-xl text-white z-50">
        <h2 className="z-50 text-7xl text-red-500">
          Interior designs you want
        </h2>
        <p className="z-50 text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse at
          voluptas fugiat, ipsum repellendus doloremque aperiam ratione! Iste
          eaque at tenetur adipisci pariatur aliquam necessitatibus odio.
          Dolores numquam culpa ducimus.
        </p>
        <br />
        <p className="z-50 text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse at
          voluptas fugiat, ipsum repellendus doloremque aperiam ratione! Iste
          eaque at tenetur adipisci pariatur aliquam necessitatibus odio.
          Dolores numquam culpa ducimus.
        </p>
        <br />

        <p className="z-50 text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse at
          voluptas fugiat, ipsum repellendus doloremque aperiam ratione! Iste
          eaque at tenetur adipisci pariatur aliquam necessitatibus odio.
          Dolores numquam culpa ducimus.
        </p>
        <br />
        <p className="z-50 text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse at
          voluptas fugiat, ipsum repellendus doloremque aperiam ratione! Iste
          eaque at tenetur adipisci pariatur aliquam necessitatibus odio.
          Dolores numquam culpa ducimus.
        </p>
      </section>
    </div>
  );
};

export default HeroSection;
