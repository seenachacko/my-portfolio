import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { MailOpenIcon } from "@heroicons/react/solid";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PhoneIcon } from "@heroicons/react/solid";
export default function Contact() {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
            Contact me
          </h1>
        </div>
        <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            
            
      
              <p>seenachacko119@gmail.com</p>
            
            <PhoneIcon className="w-4 h-4 ml-1" />
            <p>:+45 50202119</p>
          </div>
      </div>
    </section>
  );
}
