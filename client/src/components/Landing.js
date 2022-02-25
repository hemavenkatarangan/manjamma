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

const contentStyle = {
    height: '800px',
    width: '100%'
};



function Landing() {
    const [isOpen, setOpen] = useState(false)

    const getListData = (value) => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event。。....' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    }

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }

    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    }

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    return (
        <div className="container">
            <div style={{ marginTop: ' 120px' }}>
            <div className="container">
                <div className="slider-container">
                    <div className="swiper-container slide-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="../images/slider/1.JPG" className="img-fluid" alt='Byvk' />
                            </div>
                            <div className="swiper-slide">
                                <img src="../images/slider/2.png" className="img-fluid" alt='Byvk' />
                            </div>
                            <div className="swiper-slide">
                                <img src="../images/slider/3.png" className="img-fluid" alt='Byvk' />
                            </div>
                          
                            <div className="swiper-slide">
                                <img src="../images/slider/Picture4-AbhayaM.png" className="img-fluid" alt='Byvk' />
                            </div>
                            <div className="swiper-slide">
                                <img src="../images/slider/Picture5-OurCourses.png" className="img-fluid" alt='OurCourses' />
                            </div>
                            <div className="swiper-slide">
                                <img src="../images/slider/TTC-Picture3.png" className="img-fluid" alt='Byvk' />
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