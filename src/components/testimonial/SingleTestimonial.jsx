import Image from 'next/image';
import React from 'react';

const SingleTestimonial = ({ testimonial }) => {
    const { thumb, shape, text, name, designation } = testimonial

    return (
        <>
            <div className="testimonial-style-one">
                <div className="item">
                    <div className="thumb">
                        <Image src={`/assets/img/teams/${thumb}`} alt="Thumb" width={250} height={315} />
                        <div className="shape">
                            <Image src={`/assets/img/shape/${shape}`} alt="Shape" width={170} height={280} />
                        </div>
                    </div>
                    <div className="content">
                        <p>{`“${text}”`}</p>
                    </div>
                    <div className="provider">
                        <div className="info">
                            <h4>{name}</h4>
                            <span>{designation}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonial;