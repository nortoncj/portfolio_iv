import Link from 'next/link';
import React from 'react';

const SocialShareStyle3 = ({git, link}) => {
    return (
        <>
        {git && (
            <li className="facebook">
                <Link href={git} target="_blank">
                    <i className="fa-brands fa-github"></i>
                </Link>
            </li>)}
            {link && (
            <li className="twitter">
                <Link href={link} target="_blank">
                    <i className="fa-solid fa-link"></i>
                </Link>
            </li>
            )}
        </>
    );
};

export default SocialShareStyle3;