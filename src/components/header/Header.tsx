import React from "react";
import "./Header.scss"

class Header extends React.Component {
    

    render() {
        return (
            <div id="header" className="header-container">
                <div className="contact-bar">
                    <div className="header-content contact-content">
                        <div className="details-container">
                            <div>
                                <span><img src={require("../../assets/images/telephone-call.png")} alt="" /> </span>
                                <span><a href="tel:+(234)7069952496" target="_blank" rel="noopener noreferrer">+(234)7069952496</a> <a href="https://wa.link/qnuycu" target="_blank" rel="noopener noreferrer">+(234)9134458065,</a>  <a href="https://wa.link/58mulw" target="_blank" rel="noopener noreferrer">+(44)7867882541</a></span>
                            </div>
                            <div>
                                <span><img src={require("../../assets/images/email.png")} alt="" /> </span>
                                <span><a href="mailto:info@reotravelsandtours.org">info@reotravelsandtours.org</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-bar">
                    <div className="header-content nav-content">
                        <span className="logo"><img src={require("../../assets/images/logo.png")} alt="" /></span>
                    </div>
                </div>
            </div>
        )
    };
}

export default Header;