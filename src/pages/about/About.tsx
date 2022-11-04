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
            <div className="about-service" id="info">
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
                        <Cards name="International Passport Application" image="passport-application.jpg" desc="We assist with international passport processing, for new and renewal applications. Locations: Lagos, Abeokuta, Ibadan, Ilorin and Ekiti."/>
                        <Cards name="Visa application and Guidance" image="visa-application.jpg" desc="We assist and provide guidiance for visa application processing for the foollowing categories; Tourism Visa: Kenya, South Africa, Dubai, Singapore, USA. Study Visa: United Kingdom, USA, Canada, Europe."/>
                        <Cards name="Flight Reservations" image="flight-booking.jpg" desc="We assist with flight booking for both local and international flights."/>
                        <Cards name="Hotel Bookings" image="hotel-booking.jpg" desc="Want a soft landing with readily available hotels, apartments or travel homes? We are your goto support. We provide the following; Hotel booking: Any location all over the world. Shortlet Booking: Lagos and Abuja."/>
                        <Cards name="Event Planning" image="event-planning.jpg" desc="Worry less about leaving a long lasting impression through memorable occasion, we got you covered! We offer the following event planning services: Company bonding, Weekend vacation, Anniversary and Birthday Get away."/>
                        <Cards name="Group Packages" image="group.jpg" desc="We offer local and international group packages to explore new culture, network, engage and most importantly have a good time out with family and friends."/>
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
