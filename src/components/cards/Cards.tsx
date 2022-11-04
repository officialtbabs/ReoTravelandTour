import React from "react";
import './Cards.scss';

class Cards extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            image: this.props.image
        };
    }

    render() {
        return (
            <div className="card">
                <div className="card-inner">
                    <div className="flip-card-front">
                        <img src={require(`../../assets/images/${this.props.image}`)} alt="" />
                        {/* <div className="image-container"> */}
                            <div>
                                <h2>
                                    {this.props.name}
                                </h2>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="flip-card-back">
                        <div className="text-back">
                            <div>
                                <h1 className="text-back-header">{ this.props.name }</h1>
                                <p className="text-back-desc">
                                    { this.props.desc }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;