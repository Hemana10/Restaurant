import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Fragment } from "react";

const Carousel = ({ title, settings, children }) => {
    return (
        <Fragment>
            <div>
                <span>{ title }</span>
            </div>
            <div className="carousel">
                <Slider {...settings}>
                    { children }
                </Slider>
            </div>
        </Fragment>
    );
};

export default Carousel;