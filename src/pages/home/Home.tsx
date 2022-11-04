import React from "react";
// import { BrowserRouter } from "react-router-dom";
import './Home.scss';
import { HashLink as Link } from "react-router-hash-link";



class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {toggle: false};
        // this.gotoAbout = this.gotoAbout.bind(this)
    }
    

    componentDidMount(): void {
        // document.getElementById('about-image')?.classList.add('show-about-us');
        document.getElementById('mask-image')?.classList.add('show-mask-cutout');
    }

    gotoAbout (event: any) {
        // setToggle(value);
        console.log(document.getElementById('info'))
        var div =  document.getElementById('info')
        if (div) {
            div.scrollTop = 0
        }
    }

    render () {
        return (
            // <BrowserRouter>
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
                                        <Link to="#info" smooth>
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
            // </BrowserRouter>
        );
    }
}

export default Home;

