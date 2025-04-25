import React, { Fragment } from 'react'
import blog_compact_post_01 from "../../assets/images/blog-compact-post-01.jpg";
import blog_compact_post_02 from "../../assets/images/blog-compact-post-02.jpg";
import blog_compact_post_03 from "../../assets/images/blog-compact-post-03.jpg";
import blog_compact_post_04 from "../../assets/images/blog-compact-post-04.jpg";
import blog_compact_post_05 from "../../assets/images/blog-compact-post-05.jpg";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const blogarrayposts = [
    blog_compact_post_01,
    blog_compact_post_02,
    blog_compact_post_03,
    blog_compact_post_04,
    blog_compact_post_05
];

const Blogposts = () => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
      };

    return (
        <Fragment>
            <div className="section padding-top-65 padding-bottom-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                                <span>Our Blog &amp; Articles</span>
                                <h3>Latest Blog Post</h3>
                                <div className="utf-headline-display-inner-item">Our Blog &amp; Articles</div>
                                <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
                            </div>
                            <div className="utf-blog-carousel-block" style={{display: 'block'}}>       
                            <Slider {...settings}>
                                {                                  
                                    blogarrayposts.map((logo, index) => (
                                        <Link to="blog-post-right-sidebar.html" className="utf-blog-item-container-part" key={index} style={{margin:'10px',width:"50%"}}>
                                            <div className="utf-blog-compact-item"> <img src={logo} alt={`blog_compact_post_${index + 1}`} />
                                                <div className="utf-blog-compact-item-content">
                                                    <h3>How to “Woo” a Recruiter and Land Your Dream Job.</h3>
                                                    <ul className="utf-blog-post-tags">
                                                        <li>By, John Williams</li>
                                                        <li>20 Jan, 2021</li>
                                                    </ul>
                                                    <p>Lorem Ipsum is simply dummy text of printing industry Lorem Ipsum been industry standard dummy text since book.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Blogposts