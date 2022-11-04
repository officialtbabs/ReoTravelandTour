import React from "react";
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

  

    componentDidMount(): void {
        // document.getElementById('about-image')?.classList.add('show-about-us');
        document.getElementById('subscribe-cutout')?.classList.add('show-subscribe-cutout');
    }

    render() {
        return (
            <div className="contact-container">
                <div className="quote-subscribe-container">
                    <div className="quote-subscribe">
                        <div className="quote-content">
                            <h1 className="header">"</h1>
                            <p className="quote-desc">"Life, chance, 50/50 life na dice. Don't miss the great adventure that awaits you, book a ticket today."</p>
                            <p className="quote-author">Official_tbabs</p>
                        </div>
                        <div className="subscribe-form-container">
                            <div className="subscribe-container">
                                <div id="subscribe-cutout" className="subscribe-cutout">
                                    Subscibe
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