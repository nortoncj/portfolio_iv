import React from 'react';
import ContactForm from '../form/ContactForm';
import ContactInfo from './ContactInfo';


const Contact = () => {
   
    
    return (
        <>
            <div id="contact" className="contact-area shape-less default-padding overflow-hidden section">
                <h2 className="text-shade">Contact</h2>
                <div className="container">
                    <div className="contact-content">
                        <div className="row align-center">
                            <div className="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
                                <div className="form-box">
                                    <h2>{`Let's stay in touch`}</h2>
                                    <p>
                                        {`Reach out today`}
                                    </p>
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 info">
                                {/* <ContactInfo /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;