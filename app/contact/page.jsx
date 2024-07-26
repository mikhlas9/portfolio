import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 pt-24 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col items-center">
          <div className="mb-8 w-full max-w-lg md:max-w-[60vw]">
            <p className="text-lg mb-4 text-center">
              I&apos;d love to hear from you! Whether you have a question, want to collaborate on a project, or just want to say hello, feel free to reach out using the form below or through my contact information.
            </p>
            <ul className="list-none text-center">
              <li className="mb-4 flex justify-center items-center">
              <Icon icon="ic:round-email" className="text-xl md:text-4xl mr-5" />
                <a href="mailto:mohammadikhlas99@example.com" className="text-blue-600 hover:underline">mohammadikhlas99@example.com</a>
              </li>
              <li className="mb-4 flex justify-center items-center">
              <Icon icon="ic:round-phone" className="text-xl md:text-4xl mr-5" />

                <a href="tel:+1234567890" className="text-blue-600 hover:underline">+91 9906610175</a>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-md md:max-w-[50vw]">
            <form
              action="https://formspree.io/f/mkgwoazl" 
              method="POST" 
              className="border-2 divide-white p-8 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your Name"
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your Email"
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Type a Message..."
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <input type="hidden" name="_subject" value="New contact request from {name}" />
              <button
                type="submit"
                className="w-full py-2 px-4 card-bac text-white rounded-full border-2 divide-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
