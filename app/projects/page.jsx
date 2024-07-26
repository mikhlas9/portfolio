'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import image1 from "@/public/images/memorysphere.png";
import image2 from "@/public/images/ecomerce-api.png";

const projects = [
  {
    title: 'Memory Sphere (Multiple Choice Question)',
    description: 'Memory Sphere is an interactive MCQ platform for students, offering a vast question bank and customizable time limits. Developed with React and Node.js, it provides performance insights to track progress and improve skills.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://memorysphere.vercel.app',
    image: image1 // Correct image path
  },
  {
    title: 'E-commerce API',
    description: 'This API offers endpoints for managing user accounts, categories, products, shopping carts, and orders in an e-commerce platform. Developed with Node.js and documented using Swagger, it provides a comprehensive solution for seamless e-commerce operations.',
    technologies: ['Node.js', 'Swagger'],
    link: 'https://github.com/mikhlas9/E-commerce-api',
    image: image2 // Correct image path
  },
  // Add more projects as needed
];

const Projects = () => {
  const [visible, setVisible] = useState(new Array(projects.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisible(prevVisible => {
            const newVisible = [...prevVisible];
            newVisible[index] = true;
            return newVisible;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.project-card');
    elements.forEach((element, index) => {
      element.setAttribute('data-index', index);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [projects.length]);

  return (
    <section id="projects" className="py-16 pt-24 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-20">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`project-card border-2 divide-white p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row items-center ${
                visible[index] ? 'animate-scale-up' : 'opacity-0'
              }`}
            >
              <div className="w-full md:w-1/2 p-4">
                <Image src={project.image} alt={project.title} className="rounded-lg w-full h-40 mb-4 md:mb-0" />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm sm:text-gray-400 mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="text-xs sm:text-sm bg-gray-700 text-gray-300 px-2 sm:px-3 py-1 rounded-full">{tech}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
