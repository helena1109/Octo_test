import React, { Component } from "react";
import Slider from "react-slick";
import './slider.sass'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: false
        };
        return (
            <div className='slider'>

                <Slider {...settings}>
                    {this.props.imgs.map((img)=>{
                        return(
                            <div >
                                <div className='slider-img-wrap'>
                                    <img src={img.image} alt=''/>
                                </div>

                            </div>
                        )
                    })}

                </Slider>
            </div>
        );
    }
}