import React from "react";
import './Home.scss';


class Home extends React.Component {

    componentDidMount(): void {
        // document.getElementById('about-image')?.classList.add('show-about-us');
        document.getElementById('mask-image')?.classList.add('show-mask-cutout');
    }

    render () {
        return (
            <div className="HomeContainer">
                <div className="Blur">
                    <div className="welcome-container">
                        <div className="welcome-content">
                            <p className="welcome-text">Welcome to</p>
                            <div className="welcome-logo">
                            </div>
                            <p className="welcome-desc">Your No.1 Travel and Tourism Service</p>
                            <p className="welcome-desc-2">Want to <span>JAPA</span> ?, say no more. We got you <span>COVERED</span>!</p>
                            <div className="contact-about">
                                <div className="more-info-container">
                                    <button className="more-info-button" type="button">
                                        More Info ...
                                    </button>
                                </div>
                                <div className="contact-button-container">
                                    <button className="contact-button" type="button">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mask-content">
                        <div id="mask-image" className="mask-image">
                            <p>Travel</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;