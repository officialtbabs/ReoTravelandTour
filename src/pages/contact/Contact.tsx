import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Contact.scss'

class Contact extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            fullname: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event: any) {
        // if (event.target.id === 'mce-EMAIL') {
        //     this.setState({email: event.target.value})
        // }
        // else if (event.target.id === 'mce-FNAME') {
        //     this.setState({fullname: event.target.value})
        // }
    }

    render() {
        return (
            <div className="contact-container">
                <div className="quote-subscribe-container">
                    <div className="quote-subscribe">
                    <h1 className="review-header">"</h1>
                        <Carousel showStatus={ false } autoPlay={ true } interval={ 2000 } infiniteLoop={ true }  >
                            <div className="quote-content">
                                <img src="" alt="" />
                                <p className="quote-desc">"You guys deserve 10 stars. Thanks a lot."</p>
                                <p className="quote-author">Apostle Timi</p>
                            </div>
                            <div className="quote-content">
                                <img src="" alt="" />
                                <p className="quote-desc">"Thanks to you guys.  Infact I couldn't have imagined getting our passports after a week. We witnessed applicant still on waiting list to collect their passports for more than a month. I appreciate you all!"</p>
                                <p className="quote-author">Mr Ola Busayo</p>
                            </div>
                            <div className="quote-content">
                                <img src="" alt="" />
                                <p className="quote-desc">"Life, chance, 50/50 life na dice. Don't miss the great adventure that awaits you, book a ticket today."</p>
                                <p className="quote-author">Official_tbabs</p>
                            </div>
                        </Carousel>
                        
                        <div className="subscribe-form-container">
                            <div className="subscribe-container">
                                <div id="subscribe-cutout" className="subscribe-cutout">
                                    Subscribe
                                </div>
                            </div>
                            <div className="subscribe-form-content">
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-content" id="contact">
                    <h1 className="header">Contact Information</h1>
                    <p><span>Email: </span> info@reotravelsandtours.org</p>
                    <p><span>Phone No: </span> +(234) 706-995-2496, +(234) 913-445-8065, +(44) 786-788-2541</p>
                    <p><span>Address: </span> 71, Itire Road by Obele/Ogunlana drive junction, Surulere, Lagos.</p>
                    <p><span>Socials:</span> 
                        {/* <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a> */}
                    </p>
                </div>
            </div>
        )
    }

}

export default Contact;