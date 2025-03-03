import { useState,useEffect } from "react"
import Service from "./Service";


// Array of image paths to be used in the slider
const images = [
  "/assets/img/slider/1.jpg",
  "/assets/img/slider/2.jpg",
  "/assets/img/slider/3.jpg",
];

function Slider() {
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

    // Auto-play effect
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
      }, []);
    

  return (
    <div className="slider-container"> {/* Main container for the slider */}
      <button className="prev-btn" onClick={prevSlide}>
        &#10094; {/* Left arrow symbol */}
      </button>
      <div className="slider"> {/* Image container */}
        {images.map((img, index) => (
          <img
            key={index} // Unique key for each image
            src={img} // Image source
            alt={`Slide ${index + 1}`} // Alt text for accessibility
            className={index === currentIndex ? "active" : "hidden"} // Show active image, hide others
          />
        ))}
      </div>
      <button className="next-btn" onClick={nextSlide}>
        &#10095; {/* Right arrow symbol */}
      </button>
    </div>
  );
  // <Service/>
}

export default Slider; // Export the component for use in other parts of the app
