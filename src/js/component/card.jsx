import React from "react";
import propTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body mb-2">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Find out </a>
            </div>
            <div className="card-footer">
                <a href={props.buttonUrl} className="btn btn-primary" target="_blank">{props.buttonLabel}</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    imageUrl: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    buttonLabel: propTypes.string,
    buttonUrl: propTypes.string,
}

export default Card