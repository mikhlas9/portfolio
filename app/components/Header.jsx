
"use client"
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
// import cv from "@/public/documents/Ikhlas-Resume.pdf";

const Header = () => {
    return (
        <section id="home" className="container h-screen">
            <div className="relative inset-0  "></div>
            <div className="container relative z-10  ">
                <div className="flex justify-center">
                    <div className="w-full lg:w-2/3 text-white text-center mt-48">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-9">Hello, I&apos;m</h1>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString(`<h1 class="text-4xl lg:text-6xl font-bold mb-9" >Mohammad Ikhlas</h1>
                                <h2 class="text-1xl lg:text-3xl underline underline-offset-8">FULL-STACK WEB DEVELOPER</h2>
                                <h3 class="text-1xl lg:text-3xl mt-5">Enthusiastic about developing impactful web applications.</h3>`)
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: false,
                            cursor: '_',
                            delay: 30,
                        }}
                        />
                        <ul className="flex justify-center list-none pt-10 space-x-6">
                            <li><a href="https://github.com/mikhlas9/"><FaGithub className="text-2xl text-white hover:text-gray-400 transition" /></a></li>
                            <li><a href="https://www.linkedin.com/in/mohammad-ikhlas-a339b12a2"><FaLinkedin className="text-2xl text-white hover:text-gray-400 transition" /></a></li>
                            <li><a href="#"><FaTwitter className="text-2xl text-white hover:text-gray-400 transition" /></a></li>
                            <li><a href="#"><FaInstagram className="text-2xl text-white hover:text-gray-400 transition" /></a></li>
                            <li><a href="#"><FaFacebook className="text-2xl text-white hover:text-gray-400 transition" /></a></li>
                        </ul>
                        <div className="mt-10">
                        <a
                            href='https://amber-misty-89.tiiny.site/'
                            download="ikhlas-resume.pdf"
                            className="btn btn-outline-custom btn-rounded border-2 border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition"
                        >
                            Download CV
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <i className="mbri-arrow-down text-white text-2xl animate-bounce"></i>
            </div>
        </section>
    );
};

export default Header;