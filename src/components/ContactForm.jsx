import React from 'react';

const ContactForm = () => {
    return (
        <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
            <form>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            <label htmlFor="name">Your Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                            <label htmlFor="email">Your Email</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                            <label htmlFor="subject">Subject</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 200 }} defaultValue={""} />
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;