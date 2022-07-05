function AboutInLanding() {
    return (
        <>
            <div className="row">
                <div className="col-lg-7">
                    <div className="text-container" style={{ marginTop: '32px' }}>
                        <h2 className="heading white-heading" style={{ textAlign: 'left', color: 'darkblue', fontFamily: 'Poppins', fontSize: '24px', marginTop: '20px', marginBottom: '20px' }}>About BYVK</h2>

                        <p className="p-large" style={{ fontFamily: 'Poppins', textAlign: 'justify', color: '#333436', fontSize: '16px' }}>
                            Our mission is to bring about change in the minds and bodies of people so that they can discover the full potential of their mental and physical faculties through Yoga.
                            Our goal is to demystify and present Yogic teachings in a simple, relevant way that is applicable in modern times. <a href="/about">[Read More]  </a> </p>
                    </div>
                </div>
                <div className="col-lg-5" style={{ textAlign: 'center', marginTop: '65px' }}>
                    <img src="../images/aboutuslanding1.png" alt="SriM" />
                </div>
            </div>
        </>
    )
}

export default AboutInLanding
