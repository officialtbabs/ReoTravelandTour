import React from "react";
import './Home.scss';
import { HashLink as Link } from "react-router-hash-link";

class Home extends React.Component {
 
    render () {
        return (
            <div className="HomeContainer">
                <div className="Blur">
                    <div className="welcome-container">
                        <div className="welcome-content">
                            <p className="welcome-text">Welcome to</p>
                            <div className="welcome-logo">
                            </div>
                            <p className="welcome-desc">Your No.1 Travel and Tourism Companion.</p>
                            <p className="welcome-desc-2">Birthing travel dreams!</p>
                            <div className="contact-about">
                                <div className="more-info-container">
                                    <Link to="#about" smooth>
                                        <button className="more-info-button">
                                                More Info ...
                                        </button>
                                    </Link>
                                </div>
                                <div className="contact-button-container">
                                    <Link to="#contact" smooth>
                                        <button className="contact-button">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mask-content">
                        <div id="mask-image" className="mask-image">
                            Travel
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

