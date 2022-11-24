import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Contact.scss'

class Contact extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="contact-container">
                <div className="quote-subscribe-container">
                    <div className="quote-subscribe">
                    <h1 className="review-header">"</h1>
                        <Carousel showStatus={ false } dynamicHeight={ true } showThumbs={ false } autoPlay={ true } interval={ 5000 } infiniteLoop={ true }  >
                            <div className="quote-content">
                                <img src="" alt="" />
                                <p className="quote-desc">"You guys deserve 10 stars. Thanks a lot."</p>
                                <p className="quote-author">Apostle Timi</p>
                            </div>
                            <div className="quote-content">
                                <img src="" alt="" />
                                <p className="quote-desc">"Thanks to you guys. Infact I couldn't have imagined getting our passports after a week. We witnessed applicant still on waiting list to collect their passports for more than a month. I appreciate you all!"</p>
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
                                    Be the first to know of amazing offers
                                </div>
                            </div>
                            <div className="subscribe-form-content">
                            <div id="mc_embed_signup">
                                    <form action="https://rocketmail.us12.list-manage.com/subscribe/post?u=8e98a9f024fef4745f3140246&amp;id=bf5953691d&amp;f_id=0062b8e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                        <div id="mc_embed_signup_scroll">
                                            <h2>Get the best travel offers now!</h2>
                                            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required/>
                                                <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                                            </div>
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-FNAME">Full Name <span className="asterisk">*</span></label>
                                                <input type="text" name="FNAME" className="" id="mce-FNAME" required/>
                                                <span id="mce-FNAME-HELPERTEXT" className="helper_text"></span>
                                            </div>
                                            <div hidden={true}><input type="hidden" name="tags" defaultValue="10411549" /></div>
                                            <div id="mce-responses" className="clear foot">
                                                <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                                                <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                                            </div>    
                                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_8e98a9f024fef4745f3140246_bf5953691d" tabIndex={-1} defaultValue="" /></div>
                                            <div className="optionalParent">
                                                <div className="clear foot">
                                                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                                                    <p className="brandingLogo"><a href="https://eepurl.com/ibLx6D" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" alt=""/></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-content" id="contact">
                    <h1 className="header">Contact Information</h1>
                    <p><span>Email: </span> info@reotravelsandtours.org</p>
                    <p><span>Phone No: </span><a href="tel:+(234)7069952496" target="_blank" rel="noopener noreferrer">+(234) 706-995-2496</a>, <a href="tel:+(234)9134458065," target="_blank" rel="noopener noreferrer">+(234) 913-445-8065</a>, <a href="tel:+(44)7867882541" target="_blank" rel="noopener noreferrer">+(44) 786-788-2541</a></p>
                    <p><span>Address: </span> 71, Itire Road by Obele/Ogunlana drive junction, Surulere, Lagos.</p>
                    <p className="socials">
                        <span>Socials: </span>
                        <span>
                            <a href="https://www.instagram.com/reo_travels/"  target="_blank" rel="noopener noreferrer"><img width={25} src={require('../../assets/images/instagram.png')} alt="" /></a>
                            <a href="https://wa.link/lya9ts"  target="_blank" rel="noopener noreferrer"><img width={25} src={require('../../assets/images/whatsapp.png')} alt="" /></a>
                        </span>
                    </p>
                </div>
            </div>
        )
    }

}

export default Contact;