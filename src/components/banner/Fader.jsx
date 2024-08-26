import React, {useState, useEffect} from 'react'
require("./fader.css")

const Fader = () => {
    const words = ['Web Developer', 'Data Analyst', 'Email Developer', 'Content Editor' ];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIsVisible(false);
        
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsVisible(true);
        }, 2000); // Wait for fade-out before changing word
      }, 3000); // Total time for each word (visible + invisible)
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className={`fading-word ${isVisible ? 'visible' : ''}`}>
      {words[currentWordIndex]}
    </div>
  )
}

export default Fader