import React from "react";
import me from "../assets/mee.png";
import { MailOpenIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={me}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Seena Chacko
            <br className="hidden lg:inline-block" />
            Front-end Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a software programmer with design and problem-solving skills. I
            have knowledge and experience in React, JavaScript, HTML, CSS, Node
            JS, Git, GitHub, MySQL and UX/UI designing. I am curious to learn
            new skills and now looking for a Front-end developer role to take
            next step in my career.
          </p>
          
          
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
