import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import About from '../about/page';
import Header from '../components/Header';
import Skills from '../skills/page';
import Experience from '../experience/page';
import Projects from '../projects/page';
import Contact from '../contact/page';


export default function Home() {
  return (
    <div className='flex flex-col items-center px-4 main_bac' >
      <Navbar />
      {/* Hero Section */}
      <Header />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* <Footer /> */}
    </div>
  );
}
