import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/SKills";
import Navbar from "./components/nav/Navbar";
import Experience from "./components/Experience";


export default function App() {
  return(
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
     <Education/>
     <Contact/>
    </main>
  )
}
