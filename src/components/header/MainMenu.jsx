'use client'
import Link from 'next/link';
import React, {useEffect} from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/img/logo.png';


const MainMenu = () => {
    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('.section');
          const navLinks = document.querySelectorAll('.main-nav-link ');
          let currentSection = 'home';
    
          sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            if (window.scrollY >= sectionTop - 120) { // Adjust for any offset (e.g., fixed header)
              currentSection = section.id;
            }
          });
    
          navLinks.forEach(navLink => {
            navLink.classList.remove('main-active');
            if (navLink.getAttribute('href') === `#${currentSection}`) {
              navLink.classList.add('main-active');
            }
          });
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Call handleScroll once on mount to ensure correct link is active on page load
        handleScroll();
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return (
        <>
        <div className="main-container">
        <div className="main-nav-container">
            <ul className="nav-main">
                <li>
                    <Image src={logo} width={40} height={40} alt="logo" />
                </li>
                <li>
                    Chris Norton
                </li>
            </ul>
            <ul className=" nav-main" data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link className="main-nav-link"  href="#home">Home</Link></li>
                <li><Link className="main-nav-link main-active"   href="#skills">Skills</Link></li>
                <li><Link className="main-nav-link"   href="#about">About</Link></li>
                <li><Link className="main-nav-link"   href="#portfolio">Portfolio</Link></li>
                <li><Link  className="main-nav-link"  href="#contact">Contact</Link></li>
            </ul>
            </div>
            </div>
        </>
    );
};

export default MainMenu;