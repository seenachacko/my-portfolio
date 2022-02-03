import React from "react";
//import { ArrowRightIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//import { MailOpenIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Seena Chacko
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#experiences" className="mr-5 hover:text-white">
            Experiences
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#educations" className="mr-5 hover:text-white">
            Education
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/seena-chacko-chacko-017022187/"
            className="mr-5 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            href="https://github.com/seenachacko"
            className="mr-5 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {/* <a href="#contact" className="mr-5 hover:text-white">
            <MailOpenIcon className="w-4 h-4 ml-1" />
          </a> */}
          <PhoneIcon className="w-4 h-4 ml-1" />
          <p>:+45 50202119</p>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
