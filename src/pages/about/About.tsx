import React from "react";
import Cards from "../../components/cards/Cards";
import './About.scss'

class About extends React.Component {

    componentDidMount(): void {
        document.getElementById('about-image')?.classList.add('show-about-us');
        document.getElementById('tour-cutout')?.classList.add('show-tour-cutout');
    }
    
    render() {
        return (
            <div className="about-service">
                <div className="about-container">
                    <div id="about-image" className="about-us-image">
                        <img src={require('../../assets/images/about-us.gif')} alt="" />
                    </div>
                    <div className="about-content">
                        <h1>About Us</h1>
                        <p>REO TRAVELS AND TOURS is a Nigerian travel company with a group of passionate individuals working together to give the best travel experience worldwide. Tourism or Study visa processing with the best advice. We are dedicated to our service delivery.</p>
                    </div>
                </div>

                <div className="service-container">
                    <h1>What we do?</h1>
                    <p>Our services spans across the following</p>
                    <div className="service-content">
                        <Cards name="International Passport Application " image="passport-application.jpg"/>
                        <Cards name="Visa application and Guidance" image="visa-application.jpg"/>
                        <Cards name="Flight Reservations" image="flight-booking.jpg"/>
                        <Cards name="Hotel Bookings" image="hotel-booking.jpg"/>
                        <Cards name="Event Planning" image="event-planning.jpg"/>
                        <Cards name="Group Packages" image="group.jpg"/>
                    </div>
                    <div className="tour-container ">
                        <div id="tour-cutout" className="tour-cutout">
                            Tourism
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
