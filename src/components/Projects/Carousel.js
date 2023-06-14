import React, {Fragment} from 'react';
import Slider from 'react-slick';

//import styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//import constants
import {projectsConstant} from '../../constants/projectsConstant';

//import components
import Slide from './Slide';

const Carousel = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        dots: true,
        swipeToSlide: true,
        slidesToShow: 3,
        centerPadding: '0px',
        speed: 500,
        arrows: false
    };

    return (
        <Slider {...settings}>
            {projectsConstant.slides.map((slide, index) => (
                <Fragment key={index}>
                    <Slide tag={slide.tag} title={slide.title}/>
                </Fragment>
            ))}
        </Slider>
    )
}

export default Carousel
