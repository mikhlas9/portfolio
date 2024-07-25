// app/skills/page.jsx
'use client'
// app/skills/page.jsx
import { useEffect, useState } from 'react';

export default function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 
    'Node.js', 'Git', 'Tailwind CSS', 'Bootstrap', 
    'MongoDB', 'Python', 'Flask'
  ];

  const [visible, setVisible] = useState(new Array(skills.length).fill(false));

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

    const elements = document.querySelectorAll('.skill-card');
    elements.forEach((element, index) => {
      element.setAttribute('data-index', index);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [skills.length]);

  return (
    <section id="skills" className="container mx-auto py-16 px-4 pt-24">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card p-6 rounded-lg shadow-lg text-center text-white border-2 border-white transition-transform transform ${
              visible[index] ? (index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'
            }`}
          >
            <span className="text-lg font-semibold">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
