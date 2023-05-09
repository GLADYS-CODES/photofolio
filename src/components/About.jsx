
import React, { useState, useEffect } from 'react';
//import Navbar from './Navbar';
//import Testimonial from './TestimonialCard';
import axios from 'axios';

function About() {
  const [photo, setPhoto] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch the photo from Unsplash API
    axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query: 'portrait',
        orientation: 'squarish',
        client_id: 'wzHpQ6ch1lTEqZL-qQoOimq8lKbVmYOry9Rku9-PuHg'
      }
    })
    .then(response => {
      setPhoto(response.data.urls.regular);
    })
    .catch(error => {
      console.log(error);
    });

    // Fetch the testimonials from your API
    axios.get('/api/testimonials')
    .then(response => {
      setTestimonials(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className="bg-black">
      
      <div className="container mx-auto py-20">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tellus quis commodo lobortis, massa turpis congue mi, in malesuada nibh elit vel magna. Ut tristique faucibus odio, vitae congue dolor faucibus at. Etiam euismod felis eget sapien feugiat imperdiet.</p>
          </div>
          <div className="w-full sm:w-2/3 flex justify-center">
            {photo && <img src={photo} alt="Portrait" className="w-64 h-64 object-cover rounded-full shadow-lg" />}
          </div>
        </div>
      </div>
      <div className="container mx-auto py-20">
        
        <div className="flex flex-wrap overflow-hidden">
          {testimonials.length > 0 ? (
            <div className="carousel w-full overflow-x-scroll scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} data={testimonial} />
              ))}
            </div>
          ) : (
            <p className="text-white text-center text-lg">What they are saying.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
