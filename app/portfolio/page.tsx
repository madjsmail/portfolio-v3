"use client";
import Project from "./_componenet/Project/Project";
import Resume from "./_componenet/resume/Resume";
import Services from "./_componenet/Services/Services";
import Contact from "./_componenet/Contact/Contact";
import Main from "./_componenet/Main/Main";
import About from "./_componenet/About/About";
import Navbar from "./_componenet/NavBar/Navbar";
import Template from "./_componenet/Template/Template";

function Home() {

  return (
    <>
        <Main/>
        <About/>
        <Resume/>
        <Project/>
        <Template/>
        
        <Services/>
        <Contact/>
        {/* <TestimonialSection/> */}

    </>
  );
}

export default Home;
