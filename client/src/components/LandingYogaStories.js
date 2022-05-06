import { useState, useEffect } from 'react'
import axios from 'axios'

function LandingYogaStories() {
    const [stories, setStories] = useState([])

    useEffect(() => {
        let obj = {
            media_type: 'yogastories'
        }

        axios.post('/mediamanagement/media', obj)
            .then(res => {
                setStories(res.data.result[0].media_path)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className="slider-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="heading white-heading" style={{ color: 'darkblue', fontFamily: 'Poppins', fontSize: '24px' }}>Yoga Stories</h2>
                            {/* <p className="p-heading">You can read below a few testimonials from satisfied shop owners. Of course there are also some unhappy ones but they're not here</p> */}
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '-50px' }}>
                        <div className="col-lg-12">
                            <div className="slider-container">
                                <div className="swiper-container card-slider-tube">
                                    <div className="swiper-wrapper">
                                        {
                                            stories.map((data, index) => {
                                                return <div className="swiper-slide" key={index}>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div style={{ border: '1px solid black', height: '152px', width: '214px' }}>
                                                                <iframe className="youtube-player" src={data} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            })
                                        }



                                        {/* <div className="swiper-slide">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div style={{border: '1px solid black', height: '152px', width: '214px'}}>
                                                    <iframe className="youtube-player" src="https://www.youtube.com/embed/7sRjUbrwMdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                         <div className="swiper-slide">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div style={{border: '1px solid black', height: '152px', width: '214px'}}>
                                                    <iframe className="youtube-player" src="https://www.youtube.com/embed/CUnIcFVvxPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card">
                                            <div className="card-body">
                                                    <div style={{border: '1px solid black', height: '152px', width: '214px'}}>
                                                    <iframe className="youtube-player" src="https://www.youtube.com/embed/mjxZOAsLRFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                        <div className="card">
                                        <div className="card-body">
                                                    <div style={{border: '1px solid black', height: '152px', width: '214px'}}>
                                                    <iframe className="youtube-player" src="https://www.youtube.com/embed/3hTHiOVn_ss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}


                                    </div>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="slider-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="heading white-heading" style={{color: 'darkblue'}}>Yoga Stories</h2>
                            <p className="p-heading">You can read below a few testimonials from satisfied shop owners. Of course there are also some unhappy ones but they're not here</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-container">
                                <div className="swiper-container card-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="testimonial-text">This course is structured carefully and brings in a holistic approach comprehensively. The teachers were excellent in their behaviour ,kindness and imparting of knowledge.</p>
                                                    <div className="details">
                                                        <img className="testimonial-image" src="images/srim/srim.jpg" alt="alternative" />
                                                        <div className="text">
                                                            <div className="testimonial-author">Dr Shubha Chetan</div>
                                                            <div className="occupation">Doctor</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="testimonial-text">This course has been awesome. Sri M’s grace and guidance was evident. Gratitude for organizing this wonderful event.</p>
                                                    <div className="details">
                                                        <img className="testimonial-image" src="images/srim/srim.jpg" alt="alternative" />
                                                        <div className="text">
                                                            <div className="testimonial-author">Pankaj Kakkar</div>
                                                            <div className="occupation">Occupation</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="testimonial-text">This course is structured carefully and brings in a holistic approach comprehensively. The teachers were excellent in their behaviour ,kindness and imparting of knowledge.</p>
                                                    <div className="details">
                                                        <img className="testimonial-image" src="images/srim/srim.jpg" alt="alternative" />
                                                        <div className="text">
                                                            <div className="testimonial-author">Dr Shubha Chetan</div>
                                                            <div className="occupation">Doctor</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="testimonial-text">This course has been awesome. Sri M’s grace and guidance was evident. Gratitude for organizing this wonderful event.</p>
                                                    <div className="details">
                                                        <img className="testimonial-image" src="images/srim/srim.jpg" alt="alternative" />
                                                        <div className="text">
                                                            <div className="testimonial-author">Pankaj Kakkar</div>
                                                            <div className="occupation">Occupation</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )

}

export default LandingYogaStories;