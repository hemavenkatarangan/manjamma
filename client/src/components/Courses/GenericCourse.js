import axios from 'axios'
import {useState, useEffect} from 'react'
import ReactQuill from 'react-quill';

function GenericCourses() {
    const [data, setData] = useState({})

    useEffect(() => {
        var idFind = window.location.href.split('/')
        var id = idFind[idFind.length - 1]
        axios.get('/courses/' + id)
        .then((res) => {
            console.log(res.data)
            setData(res.data.result)
        })
        .catch(err => console.error(err))
    },[])
    return (
        <>
        <div className="ex-basic-1 pt-5 pb-5" style={{ marginTop: '30px' }}>
                <div className="container">
                <div className="row" >
                        <div className="col-xl-10 offset-xl-1" >
                            <h1 style={{textAlign:'center', marginTop:'50px',fontFamily: 'Poppins', color: 'darkblue',fontSize: '32px' }}>{data.course_name}</h1>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'-62px'}}>
                        <div className="col-lg-12">
                            <img className="img-fluid mt-5 mb-3" src="../images/courses/AbhayaM.png" style={{ width: '100%', height: '500px' }} alt="byvk" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ex-basic-1 pt-4" style={{marginTop: '-50px'}}>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1" >
                            <ReactQuill
                                value={data.contents || ''}
                                readOnly={true}
                                theme={"bubble"}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenericCourses