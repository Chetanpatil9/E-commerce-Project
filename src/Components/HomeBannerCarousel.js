import React from 'react'
import "./Components.css"
import Carousel from 'react-bootstrap/Carousel';
import electronicsBanner from '../Assets/Home Page/electronics-banner.png'
import electronicsBanner2 from '../Assets/Home Page/electronics-banner-2.png'
import fashionBanner from '../Assets/Home Page/fashion-banner.png'
import healthAndPersonalCareBanner from '../Assets/Home Page/health-and-personal-care-banner.png'


const HomeBannerCarousel = () => {
    return (
        <>
            <div id='carousel-container'>
                <div id='carousel'>
                    <Carousel slide={false}>
 
                    <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={electronicsBanner2}
                                alt="electronics-banner"
                                style={{ height: "28rem" }}
                            />
                        </Carousel.Item>

                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={electronicsBanner}
                                alt="electronics-banner"
                                style={{ height: "28rem" }}
                            />
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={healthAndPersonalCareBanner}
                                alt="health-and-personal-care-banner"
                                style={{ height: "28rem" }}
                            />
                        </Carousel.Item>
                       
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fashionBanner}
                                alt="fashion-banner"
                                style={{ height: "28rem" }}
                            />
                        </Carousel.Item>
                       

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={healthAndPersonalCareBanner}
                                alt="health-and-personal-care-banner"
                                style={{ height: "28rem" }}
                            />
                        </Carousel.Item>


                    </Carousel >
                </div >
            </div >
        </>
    )
}

export default HomeBannerCarousel