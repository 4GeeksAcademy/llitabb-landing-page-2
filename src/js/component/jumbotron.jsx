import React from "react";

const Jumbotron = () => {
    return (
        <div className="px-4 pb-3 mb-4 bg-body-secondary rounded-3">
            <div className="container-fluid pb-5">
                <h1 className="display-5 fw-normal jumbotronTitle">A Warm Welcome!</h1>
                <p className="col-12 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in neque porta, pharetra lorem et, convallis felis. Nulla facilisi. Morbi at dui ut eros sodales tristique. Vestibulum augue justo, placerat quis sollicitudin vel, posuere sed purus. Aliquam erat volutpat.
                </p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    )
}

export default Jumbotron;