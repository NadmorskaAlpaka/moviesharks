import React from 'react';

const Contact = () => {
    return (
        <section id='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='contact--wrapper'>
                        <div className="form--wrapper">
                            <form className='contact-form'>
                                <div className='contact__box'>
                                    <label className="contact__label" htmlFor="name">Name:</label>
                                    <input 
                                        className="contact__input" 
                                        name="name" 
                                        type="text" 
                                        placeholder="e.g. Michael" 
                                        required
                                    ></input>
                                </div>
                                <div className='contact__box'>
                                    <label className="contact__label" htmlFor="emial">Email:</label>
                                    <input 
                                        className="contact__input" 
                                        name="email" 
                                        type="email" 
                                        placeholder="e.g. michael@email.com" 
                                        required
                                    ></input>
                                </div>
                                <div className='contact__box'>
                                    <label className="contact__label" htmlFor="name">Message:</label>
                                    <textarea 
                                        className="contact__input" 
                                        name="name" 
                                        type="text" 
                                        required
                                    ></textarea>
                                </div>
                                <button className='btn'>Send</button>
                            </form>
                        </div>
                        <div className='contact-description--wrapper'>
                            <h2 className='section__title'>Contact Us</h2>
                            <p className='contact__para'>
                                Feel free to contact us any time. We will get back to you as soon as we can.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
