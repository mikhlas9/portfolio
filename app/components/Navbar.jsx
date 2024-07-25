'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;
        
        if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full flex justify-center z-50 mt-5">
      <nav className="flex justify-center items-center py-4 px-5 bg-customBlueBlack bg-opacity-90 border-2 rounded-full border-white backdrop-blur-md">
        <ul className="flex flex-wrap gap-2 sm:gap-4">
          <NavLink href="#home" sectionId="home" activeSection={activeSection}>Home</NavLink>
          <NavLink href="#skills" sectionId="skills" activeSection={activeSection}>Skills</NavLink>
          <NavLink href="#experience" sectionId="experience" activeSection={activeSection}>Experience</NavLink>
          <NavLink href="#projects" sectionId="projects" activeSection={activeSection}>Projects</NavLink>
          <NavLink href="#about" sectionId="about" activeSection={activeSection}>About</NavLink>
          <NavLink href="#contact" sectionId="contact" activeSection={activeSection}>Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
};

const NavLink = ({ href, sectionId, activeSection, children }) => (
  <li>
    <a
      href={href}
      className={`py-1 px-1 text-xs/[5px] sm:py-2 sm:px-4 sm:text-sm rounded-full transition-colors duration-300 ease-in-out ${activeSection === sectionId ? 'main_bac text-white' : 'text-gray-300 hover:bg-gray-700'}`}
    >
      {children}
    </a>
  </li>
);

export default Navbar;
