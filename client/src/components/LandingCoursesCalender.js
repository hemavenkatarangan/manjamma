import { Button } from 'antd'

const cData = [
    {
        cName: 'Yoga M Beginners Course',
        cDescription: '',
        date: '5 March - 26 March',
        month: '',
        cId: 1,
        link:'yogam'
    },
    {
        cName: 'TTC Yoga Teachers Training',
        cDescription: '',
        date: '3 March - 2 April',
        month: '',
        cId: 2, 
        link:'ttc'
    },
    {
        cName: 'AbhayaM Senior Citizens Course',
        cDescription: '',
        date: '3 April - 17 April',
        month: '',
        cId: 3,
        link:'abhayam'
    },
    {
        cName: 'KausalaM Intermediate Course',
        cDescription: '',
        date: '9 April - 24 April',
        month: '',
        cId: 3,
        link:'kausalam'
    },
    {
        cName: 'Avistaran Corporate Professionals Course',
        cDescription: '',
        date: '30 April - 8 May',
        month: '',
        cId: 3,
        link:'avistaran'
    }
]

function LandingCoursesCalender() {

    const handleCourseReg = (id) => {
        console.log(id)
    }

    return (
        <>
            <div style={{ background: "url(../images/header-background.png) center center no-repeat" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="heading" style={{color:'#004AAD', fontFamily:'Poppins', marginTop:'20px', fontSize:'32px'}}>Course Calendar</h2>
                            {/* <p className="p-heading"></p> */}
                        </div>
                    </div>
                    {/* style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden'}} */}
                    <div >
                        {cData.map((data, index) => {
                            return <><div className="row" style={{fontFamily:'Poppins'}}>
                                <div className="col-lg-4" style={{textAlign: 'center'}}>
                                    <h5 style={{fontSize:'16px'}}>{data.date}</h5>
                                    <p style={{fontSize:'16px'}}>{data.month}</p>
                                </div>
                                <div className="col-lg-4">
                                    <h4 style={{fontSize:'16px'}}>{data.cName}</h4>
                                    <p style={{fontSize:'16px'}}>{data.cDescription}</p>
                                </div>
                                <div className="col-lg-4" style={{textAlign:'center'}}>
                                    <div className="" style={{ marginTop: '0px' }}>
                                        <Button type="primary" style={{ width: '50%', background: '#f3cd74', color: 'black', borderRadius: '18px'}}>
                                            <a href={data.link}>Learn More</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                                <hr /> </>
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingCoursesCalender