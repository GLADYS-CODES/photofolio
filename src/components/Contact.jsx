import React, { useState } from 'react';
import Footer from './Footer';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Submit the form
    alert('Form submitted successfully!');
    // You can add your code here to send a notification email using Mailgun

    // Reset form fields
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="bg-black text-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center hover:text-green-500">Contact Me</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          I would love to hear from you and discuss how we can collaborate to create beautiful and meaningful photographs.
          Whether you have a specific project in mind or simply want to connect, please feel free to reach out to me using
          the contact form below.
        </p>

        <div className="flex  items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-500 text-green-500">
            <FiMapPin size={20} className="text-xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Location</h2>
            <p className="text-gray-500">A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>

        <div className="flex   items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 text-green-500">
            <FiMail size={20} className="text-xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-500">your-email@example.com</p>
          </div>
        </div>

        <div className="flex  items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-500 text-green-500">
            <FiPhone size={20} className="text-xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-500">123-456-7890</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="shadow-sm bg-neutral-800 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 border-gray-300 placeholder-gray-400"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              className="block p-3 w-full text-sm text-white bg-neutral-800 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 placeholder-gray-400"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-white bg-neutral-800 rounded-lg shadow-sm border-gray-300 placeholder-gray-400"
              placeholder="Leave a comment..."
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
            >
              Send message
            </button>
          </div>
        </form>
        
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
