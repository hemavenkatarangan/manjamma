import { useState, useEffect } from 'react'
import axios from 'axios'

function SriMTeachings() {
    const [srimTeachings, setSrimTeachings] = useState([])

    useEffect(() => {
        let obj = {
            media_type: 'userstories'
        }

        axios.post('/mediamanagement/media', obj)
            .then(res => {
                setSrimTeachings(res.data.result[0].media_path)
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
                            <h2 className="heading white-heading" style={{ color: 'darkblue', textAlign: 'center', fontFamily: 'Poppins', fontSize: '24px' }}><b>Sri M On Yoga</b></h2>
                            {/* <p className="p-heading">You can read below a few testimonials from satisfied shop owners. Of course there are also some unhappy ones but they're not here</p> */}
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '-50px' }}>
                        <div className="col-lg-12">
                            <div className="slider-container">
                                <div className="swiper-container card-slider-tube">
                                    <div className="swiper-wrapper">
                                        {
                                            srimTeachings.map((data, index) => {
                                                return <div className="swiper-slide" key={index}>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div style={{ border: '1px solid black', height: '152px', width: '214px' }}>
                                                                <iframe class="youtube-player" src={data} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                                                    <iframe class="youtube-player" src="https://www.youtube.com/embed/Mx-rNCoqKOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                        <div className="card">
                                        <div className="card-body">
                                                    <div style={{border: '1px solid black', height: '152px', width: '214px'}}>
                                                    <iframe class="youtube-player" src="https://www.youtube.com/embed/lTWWhDXvFdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card">
                                            <div className="card-body">
                                                    <div style={{border: '1px solid black', height: '152px', width: '214px'}}>
                                                    <iframe class="youtube-player" src="https://www.youtube.com/embed/f_VMEB07vZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card">
                                            <div className="card-body">
                                                    <div style={{border: '1px solid black', height: '152px', width: '214px'}}>
                                                    <iframe class="youtube-player" src="https://www.youtube.com/embed/RfNSU15D80U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
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
        </>
    )

}

export default SriMTeachings;