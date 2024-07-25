'use client'
import { useEffect, useState } from 'react';

const experiences = [
  {
    title: "Research And Development Intern",
    company: "National Institution of Technology (Hybrid)",
    date: "Dec 2023 - Jan 2024",
    description: `Developed NIDML, a machine learning-based IDS integrating various algorithms, achieving 93.03%-99.96%
accuracy on the LUFlow dataset, addressing interpretability, scalability, and adversarial-resilience issues.
Deployed in a real-world scenario, showing superior threat identification compared to traditional IDS.`,
    icon: "react-icon", // Placeholder for icon
  },
  {
    title: "Coding Lead",
    company: "codeSquad (Central University of Kashmir)",
    date: "Present",
    description: `As a coding lead member for CodeSquad, the competitive programming club of Central University of Kashmir,
I oversee the planning and execution of coding challenges and workshops. My role involves mentoring club
members, designing problem sets, and ensuring a collaborative and productive learning environment. I also
coordinate with other team members to organize events that foster a strong programming culture within the
university, aiming to elevate the club's reputation and success in various competitions.`,
    icon: "education-icon", // Placeholder for icon
  }
];

const Experience = () => {
  const [visible, setVisible] = useState(new Array(experiences.length).fill(false));

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

    const elements = document.querySelectorAll('.experience-card');
    elements.forEach((element, index) => {
      element.setAttribute('data-index', index);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [experiences.length]);

  return (
    <section id="experience" className="min-h-screen text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-24">Experience</h2>
      <div className="container mx-auto px-6 relative">
        <div className="border-l-2 border-gray-700 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 flex w-full items-center justify-center flex-col md:flex-row">
            <div
              className={`experience-card w-full md:w-5/12 text-center md:text-right md:pr-4 mb-4 md:mb-0 ${
                visible[index] ? (index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'
              }`}
            >
              {index % 2 === 0 ? (
                <div className="main_bac p-4 md:p-6 rounded-lg shadow-lg inline-block text-left border-2 divide-white">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{exp.title}</h3>
                  <h4 className="text-md font-medium text-gray-400 mb-2">{exp.company}</h4>
                  <p className="text-gray-300 text-sm md:text-base">{exp.description}</p>
                </div>
              ) : (
                <p className="text-lg md:text-xl font-semibold text-white-400">{exp.date}</p>
              )}
            </div>
            <div className="w-12 md:w-2/12 flex justify-center mb-4 md:mb-0">
              <div className="relative">
                <div className="bg-gray-900 border-2 main_bac shadow-lg w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center z-10 relative">
                  {/* Icon can be added here */}
                </div>
                <div className="absolute top-1/2 w-1/2 h-0.5 bg-gray-700 -left-1/2"></div>
                <div className="absolute top-1/2 w-1/2 h-0.5 bg-gray-700 -right-1/2"></div>
              </div>
            </div>
            <div
              className={`experience-card w-full md:w-5/12 text-center md:text-left md:pl-4 ${
                visible[index] ? (index % 2 === 0 ? 'animate-slide-in-right' : 'animate-slide-in-left') : 'opacity-0'
              }`}
            >
              {index % 2 === 0 ? (
                <p className="text-lg md:text-xl font-semibold text-white-400">{exp.date}</p>
              ) : (
                <div className="main_bac p-4 md:p-6 rounded-lg shadow-lg inline-block text-left border-2 divide-white">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{exp.title}</h3>
                  <h4 className="text-md font-medium text-gray-400 mb-2">{exp.company}</h4>
                  <p className="text-gray-300 text-sm md:text-base">{exp.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
