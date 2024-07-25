// components/AboutMe.jsx
const AboutMe = () => {
    return (
      <section id="about" className="py-16 pt-24 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-20">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img 
                src="https://media.licdn.com/dms/image/D5603AQHQ7YjWzHtWbQ/profile-displayphoto-shrink_200_200/0/1711614720815?e=2147483647&v=beta&t=G93HdSZ2ZEE_syzFPTLkkWhgoKe8Or8Qb71TTq91ndU" 
                alt="Your Name" 
                className="w-64 h-64 rounded-full mx-auto md:mx-0 object-cover shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="text-lg mb-4">
                Hello! I&apos;m Mohammad Ikhlas, a passionate Full Stack Developer currently studying at Central University of Kashmir. I specialize in creating dynamic web applications and have a strong background in technologies such as React, Next.js, Node.js, and MongoDB.
              </p>
              <p className="text-lg mb-4">
                I have worked on various projects, including building scalable web applications and integrating complex systems. My experience spans across both front-end and back-end development, and I enjoy solving challenging problems and exploring new technologies.
              </p>
              <p className="text-lg mb-4">
                Outside of coding, I have a keen interest in Cricket. I am always eager to learn and grow, both personally and professionally, and I&apos;m excited about the future of technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  