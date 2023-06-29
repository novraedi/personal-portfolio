import React from "react";
import Photo from "../assets/photo-profile.png";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
export default function Banner() {
  return (
    <div className="w-full md:flex md:items-center pt-5">
      <div className="md:w-[60%]">
        <h1
          className="text-2xl md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <span className="font-light">Iam</span>{" "}
          <span className="font-semibold"> Novra Edi</span> as <br></br>
          <span className="font-semibold">Full Stack Developer</span>
        </h1>
        <p className="text-sm mt-3" data-aos="fade-up" data-aos-delay="200">
          I am a Full Stack Developer who has a passion for web development
          especially in the frontend and Backend. I have experience in
          developing websites using ReactJS. I also have experience in
          developing backend using NodeJS, ExpressJS and Laravel. I am also
          familiar with the database using MongoDB and MySQL. I am a person who
          is eager to learn new things and always try to improve myself.
        </p>
        <div
          className="flex gap-3 mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="bg-[#94271D] text-white px-4 py-2 rounded-md">
            Download CV
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Portofolio
          </button>
        </div>
        <div
          className="md:flex md:items-center mt-5"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h1 className="text-2xl">Checkout My</h1>
          <div className="flex flex-row md:ml-5 md:gap-3">
            <a href="https://github.com/novraedi">
              <AiFillGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/novra-edi-pratama-296b529a/">
              <AiFillLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/novraepe/">
              <AiFillInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
      <div
        className="md:w-[40%] md:relative"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <img src={Photo} alt="Photo" className="md:w-[80%]" />
      </div>
      <a
        class="absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10 cursor-pointer rounded-md transition-colors hover:text-primary-300 focus-visible:text-primary-300"
        href="/#portofolio"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="h-8 w-8 animate-bounce md:h-10 md:w-10"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M112 268l144 144 144-144M256 392V100"
          ></path>
        </svg>
      </a>
    </div>
  );
}
