import { Button } from 'antd'
import { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios'



function LandingCoursesCalender() {

    const [cData, setcData] = useState([])

    useEffect(() => {
        getProgramsData()
    },[])

    const getProgramsData = () => {
        axios.get('/programs/')
        .then(res => {
            console.log(res.data.result)
            setcData(res.data.result)
        })
        .catch(err => {
            console.log(err)
        })
    }


    const getFormatedDate = (date) => {
        return moment(date).format('DD-MMM');
    }

    const handleCourseReg = (id) => {
        
    }

    return (
        <>
           
                <div className="container"style={{ background: "url(../images/header-background.png) center center no-repeat" }}>
                    <div className="row">
                        <div className="col-lg-12">

                            <h2 className="heading" style={{color:'darkblue', fontFamily:'Poppins', marginTop:'20px',marginBottom:'20px', fontSize: '24px'}}>Events</h2>

                            {/* <p className="p-heading"></p> */}
                        </div>
                    </div>
                   
                   
                        {cData.map((data, index) => {
                            return <><div  key = { index } className="row">
                                <div className="col-lg-4" style={{textAlign: 'center'}}>
                                    <h5 style={{fontFamily:'Poppins',fontSize:'16px'}}>{getFormatedDate(data.program_start_date)} {'to'} {getFormatedDate(data.program_end_date)}</h5>
                                    {/* <p style={{fontFamily:'Poppins',fontSize:'16px'}}>{getFormatedDate(data.registration_end_date)}</p> */}
                                </div>
                                <div className="col-lg-4">
                                    <h4 style={{fontFamily:'Poppins',fontSize:'16px', textAlign: 'center'}}>{data.name}</h4>
                                    <p style={{fontFamily:'Poppins',fontSize:'16px'}}>{data.description}</p>
                                </div>
                                <div  className="col-lg-4" style={{textAlign:'center'}}>
                                    <div className="" style={{ marginTop: '0px' }}>
                                        <Button type="primary" style={{ fontFamily:'Poppins',width: '50%', background: '#f3cd74', color: 'black', borderRadius: '18px'}}>
                                            <a href={"../course/" + data.course}>Learn More</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                                <hr style={{marginTop: '4px'}}/> 
                                </>
                        })}
                    

                </div>
           
        </>
    )
}

export default LandingCoursesCalender