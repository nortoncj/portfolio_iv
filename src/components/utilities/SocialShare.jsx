import Link from 'next/link';
import React from 'react';

const SocialShare = () => {
    return (
        <>
            <li>
                <Link className="facebook" href="https://www.youtube.com/@chrisnortonjr" target="_blank"><i className="fab fa-youtube"></i></Link>
            </li>
            <li>
                <Link className="behance" href="https://x.com/TheWebTechNinja" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
            </li>
            <li>
                <Link className="dribbble" href="https://www.linkedin.com/in/chrisnortonjr/" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
            </li>
        </>
    );
};

export default SocialShare;