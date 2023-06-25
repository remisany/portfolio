import React, {Fragment} from 'react';
import Slider from 'react-slick';
import {useSpring, a} from '@react-spring/web';

//import styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//import constants
import {projectsConstant} from '../../constants/projectsConstant';

//import components
import Slide from './Slide';

const Carousel = ({setIndex, setDisplay}) => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        dots: true,
        swipeToSlide: true,
        slidesToShow: 3,
        centerPadding: '0',
        speed: 500,
        arrows: false,
        afterChange: index => {
            setIndex(index)
            setDisplay(true)
        },
        beforeChange: () => setDisplay(false)
    };

    const animation = useSpring({
        scale: 1,
        from: {scale: .6},
    });

    return (
        <a.div style={animation}>
            <Slider {...settings}>
                {projectsConstant.slides.map((slide, index) => (
                    <Fragment key={index}>
                        <Slide tag={slide.tag} title={slide.title}/>
                    </Fragment>
                ))}
            </Slider>
        </a.div>
    )
}

export default Carousel
