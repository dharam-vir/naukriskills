import React, { Fragment } from 'react'
import Slider from 'react-slick'
import user_small_1 from "../../assets/images/user_small_1.jpg";
import user_small_2 from "../../assets/images/user_small_2.jpg";
import user_small_3 from "../../assets/images/user_small_3.jpg";

const testimonials = [
    {
        image: user_small_1,
        name: "John Williams",
        role: "Designer",
        text: "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since an unknown printer scrambled it to make a type specimen book."
    },
    {
        image: user_small_2,
        name: "John Williams",
        role: "Designer",
        text: "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since an unknown printer scrambled it to make a type specimen book."
    },
    {
        image: user_small_3,
        name: "John Williams",
        role: "Employer",
        text: "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since an unknown printer scrambled it to make a type specimen book."
    },
    {
        image: user_small_1,
        name: "David Peterson",
        role: "Designer",
        text: "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since an unknown printer scrambled it to make a type specimen book."
    },
    {
        image: user_small_2,
        name: "Marcin Kowalski",
        role: "Designer",
        text: "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since an unknown printer scrambled it to make a type specimen book."
    }
];

const Testimonials = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            }
        ]
    };
    return (
        <Fragment>
            <div className="section gray padding-top-65 padding-bottom-55">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="utf-section-headline-item centered margin-top-0 margin-bottom-30">
                                <span>Clients Say About Us</span>
                                <h3>Our Customers Says</h3>
                                <div className="utf-headline-display-inner-item">Clients Say About Us</div>
                                <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Categories Carousel */}
                <div className="utf-carousel-container-block">              
                        <Slider {...settings} className="utf-testimonial-carousel-block testimonials" style={{display:"block"}}>
                            {testimonials.map((item, index) => (
                                <div className="utf-carousel-review-item" kay={index}>
                                    <div className="utf-testimonial-box">
                                        <div className="utf-testimonial-avatar-photo"> <img src={item.image}  alt={`testimonial_${index}`} /> </div>
                                        <div className="utf-testimonial-author-utf-detail-item">
                                            <h4>{item.name}</h4>
                                            <span>{item.role}</span> </div>
                                        <div className="testimonial">{item.text}</div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                 
                </div>
            </div>

        </Fragment>
    )
}

export default Testimonials