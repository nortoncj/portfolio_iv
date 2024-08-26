import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <div className="content">
                <ul>
                    <li className="contact-info-list wow fadeInUp">
                        <div className="icon">
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <div className="info">
                            <p>Our Email</p>
                            <h5>
                                <a href="mailto:info@validtheme.com">info@validtheme.com</a>
                                <br />
                                <a href="mailto:support@softar.com">support@softar.com</a>
                            </h5>
                        </div>
                    </li>
                    <li className="contact-info-list wow fadeInUp" data-wow-delay="300ms">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info">
                            <p>Address</p>
                            <h5>
                                22 Baker Street, <br /> London, UK
                            </h5>
                        </div>
                    </li>
                    <li className="contact-info-list wow fadeInUp" data-wow-delay="500ms">
                        <div className="icon">
                            <i className="fas fa-headphones-alt"></i>
                        </div>
                        <div className="info">
                            <p>Phone</p>
                            <h5>
                                <a href="tel:+4733378901">+44-20-7328-4499</a>
                                <br />
                                <a href="tel:+4733378901">+99-34-8878-9989</a>
                            </h5>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;