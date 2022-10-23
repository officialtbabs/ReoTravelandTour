import React from "react";
import './Contact.scss'

class Contact extends React.Component {

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
                                <div id="mc_embed_signup">
                                    <form action="https://rocketmail.us12.list-manage.com/subscribe/post?u=8e98a9f024fef4745f3140246&amp;id=bf5953691d&amp;f_id=0062b8e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                        <div id="mc_embed_signup_scroll">
                                            <h2>Get the best Japa Offers Now!</h2>
                                            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                                                <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                                            </div>
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-FNAME">Fullname </label>
                                                <input type="text" name="FNAME" className="" id="mce-FNAME" />
                                                <span id="mce-FNAME-HELPERTEXT" className="helper_text"></span>
                                            </div>
                                            <div hidden={true}><input type="hidden" name="tags" value="10411549" /></div>
                                            <div id="mce-responses" className="clear foot">
                                                <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                                                <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                                            </div>    
                                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_8e98a9f024fef4745f3140246_bf5953691d" tabIndex={-1} value="" /></div>
                                            <div className="optionalParent">
                                                <div className="clear foot">
                                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
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
                <div className="contact-content">
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