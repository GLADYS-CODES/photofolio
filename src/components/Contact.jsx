

import React, { useState } from 'react';

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
    <section className="bg-black">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white hover:text-green-00">Contact Me</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">I would love to hear from you and discuss how we can collaborate to create beautiful and meaningful photographs. Whether you have a specific project in mind or simply want to connect, please feel free to reach out to me using the contact form below.</p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 border-gray-300 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
            <input type="text" id="subject" value={subject} onChange={handleSubjectChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
            <textarea id="message" value={message} onChange={handleMessageChange} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 border-gray-300 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." />
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-600 sm:w-fit hover:bg-green-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-green-300">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
