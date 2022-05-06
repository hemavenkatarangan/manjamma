import './Gallery.css';

function Gallery() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row" style={{ textAlign: 'center' }}>
                        <div className="col-xl-10 offset-xl-1">
                            <h1>Gallery</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container gallery-container">

                <div className="tz-gallery">

                    <div className="row">

                        <div className="col-sm-12 col-md-4">
                            <a className="lightbox" href="../images/slider/1.JPG">
                                <img src="../images/slider/1.JPG" alt="Sri M" />
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <a className="lightbox" href="../images/slider/5.JPG">
                                <img src="../images/slider/5.JPG" alt="Sri M" />
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <a className="lightbox" href="../images/slider/6.jpg">
                                <img src="../images/slider/6.jpg" alt="Sri M" />
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <a className="lightbox" href="../images/slider/4.JPG">
                                <img src="../images/slider/4.JPG" alt="Sri M" />
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <a className="lightbox" href="../images/slider/2.jpg">
                                <img src="../images/slider/2.jpg" alt="Sri M" />
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <a className="lightbox" href="../images/slider/3.JPG">
                                <img src="../images/slider/3.JPG" alt="Sri M" />
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Gallery