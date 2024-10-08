import React, { useState, useEffect } from 'react';
import './donorslier.scss';
import Donate from '../donatemodal/DonateModal';

const slides = [
  {
    image: '/images/2kids.jpg',
    title: 'Donate 4 a better world',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam.',
  },
  {
    image: '/images/elderly.jpg',
    title: 'Help the Needy',
    description: 'Curabitur vehicula, mi non efficitur venenatis, odio nulla dictum nisi, non pharetra nisi sapien eu libero.',
  },
  {
    image: '/images/manwithkid.jpg',
    title: 'Support Education',
    description: 'Vivamus id magna vitae nunc condimentum laoreet ac in libero.',
  },
];

const DonorSlier = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  // Function to open the Donate modal
  const handleOpenDonateModal = () => {
    setIsDonateOpen(true);
  };

  // Function to close the Donate modal
  const handleCloseDonateModal = () => {
    setIsDonateOpen(false);
  };

  return (
    <div className="slier">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <div className="slide-buttons">
              <button className="btn-donate" onClick={handleOpenDonateModal}>Donate Now</button>
              <button className="btn-read-more">Read More</button>
            </div>
          </div>
        </div>
      ))}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      {/* Reusable Donate modal component */}
      <Donate open={isDonateOpen} onClose={handleCloseDonateModal} />
    </div>
  );
};

export default DonorSlier;
