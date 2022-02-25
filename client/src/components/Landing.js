import { useState } from 'react'
import { Carousel, Calendar, Badge } from 'antd';
import './Landing.css'
import { Link } from 'react-router-dom';
import AboutInLanding from './AboutInLanding';
import YogaPhilosophy from './YogaPhilosophy';
import LandingCourses from './LandingCourses';
import LandingCoursesCalender from './LandingCoursesCalender';
import SriMTeachings from './SriMTeachings';
import LandingYogaStories from './LandingYogaStories';

function Landing() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="container">
            <div style={{ marginTop: ' 120px' }}>
            <div className="container">
                <div className="slider-container">
                    <div className="swiper-container slide-slider">
                        <div className="swiper-wrapper">
                            {/* <div className="swiper-slide">
                                <img src="../images/slider/1.JPG" className="img-fluid" alt='Byvk' />
                            </div> */}
                            <div className="swiper-slide">
                                <a href='/about'>
                                <img src="../images/slider/2.png" className="img-fluid" alt='Byvk' />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="/about#president">
                                <img src="../images/slider/3.png" className="img-fluid" alt='Byvk' />
                                </a>
                            </div>
                          
                            <div className="swiper-slide">
                                <a href='/abhayam'>
                                <img src="../images/slider/Picture4-AbhayaM.png" className="img-fluid" alt='Byvk' />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="/#courses">
                                <img src="../images/slider/Picture5-OurCourses.png" className="img-fluid" alt='OurCourses' />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="/ttc">
                                <img src="../images/slider/TTC-Picture3.png" className="img-fluid" alt='Byvk' />
                                </a>
                            </div>
                            
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>

                    </div>
                </div>
                </div>
            </div>
            <div >
                <AboutInLanding />
            </div>
            <div style={{ marginTop: '10px' }}>
                <YogaPhilosophy />
            </div>

            <div style={{ marginTop: '10px' }} id="courses">
                <LandingCourses />
            </div>

            <div style={{ marginTop: '10px' }}>
                <LandingCoursesCalender />
            </div>

            <div style={{ marginTop: '10px' }}>
                <SriMTeachings />
            </div>
            <div style={{ marginTop: '10px' }}>
                <LandingYogaStories />
            </div>
        </div>
    )
}

export default Landing;