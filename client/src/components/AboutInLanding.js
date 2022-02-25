function AboutInLanding() {
    return (
        <>
            <div className="row">
                <div className="col-lg-7">
                    <div className="text-container" style={{ marginTop: '32px' }}>
                        <h1 className="h1-large" style={{ fontFamily: 'Poppins', color: '#004AAD',fontSize: '24px' }}>About BYVK</h1>
                        <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                            Our mission is to bring about change in the minds and bodies of people so that they can discover the full potential of their mental and physical faculties through Yoga.
                            Our goal is to demystify and present Yogic teachings in a simple, relevant way that is applicable in modern times. <a href="/about">[Read More]  </a> </p>
                    </div>
                </div>
                <div className="col-lg-5" style={{ textAlign: 'center', marginTop: '65px' }}>
                    <img src="../images/aboutuslanding.jpg" alt="SriM" />
                </div>
            </div>
        </>
    )
}

export default AboutInLanding
