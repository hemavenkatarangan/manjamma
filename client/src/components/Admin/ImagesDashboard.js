import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import axios from 'axios';
import fileUploadUrl from '../../constants/constants'

const errStyle = {
    color: 'red',
    textAlign: 'center',
    fontSize: '.7rem'
}

function MediaDashboard() {
    const user = useSelector(state => state.auth)
    const [isAuthenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        if (user.userData.roles[0] !== 'ADMIN') {
            window.location.href = '/home'
            return
        }

        if (user.isAuthenticated) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }

    }, [])

    const onSliderImagesChange = (e) => {
        var form = new FormData();
        form.append('course_name', 'sliderimages')
        for (let i = 0; i < e.target.files.length; i++) {
            form.append('files', e.target.files[i])
        }

        axios.post(fileUploadUrl, form)
            .then((res) => {
                submitImagesUrl(res.data, 'sliderimages')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const submitImagesUrl = (data, name) => {
        console.log(data)
        let obj = {
            media_path: data.result,
            media_type: name
        }
        axios.post('/mediamanagement', obj)
            .then(res => {
                alert(res.data.status_message)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onUserStoriesChange = (e) => {
        var form = new FormData();
        form.append('course_name', 'userstories')
        for (let i = 0; i < e.target.files.length; i++) {
            form.append('files', e.target.files[i])
        }

        axios.post(fileUploadUrl, form)
            .then((res) => {
                submitImagesUrl(res.data, 'userstories')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onYogaStoriesChange = (e) => {
        var form = new FormData();
        form.append('course_name', 'yogastories')
        for (let i = 0; i < e.target.files.length; i++) {
            form.append('files', e.target.files[i])
        }

        axios.post(fileUploadUrl, form)
            .then((res) => {
                submitImagesUrl(res.data, 'yogastories')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="ex-basic-1 pt-5 pb-5" style={{ marginTop: '30px' }}>
                <div className="container">
                    <div className="row" >
                        <div className="col-xl-10 offset-xl-1" >
                            <h1 style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Poppins', color: 'darkblue', fontSize: '32px' }}>Media Dashboard</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ex-basic-1 pt-4" style={{ marginTop: '-50px' }}>
                <div className="container">
                    <div>
                        <p style={{textAlign:'center', color:'red'}}>Please choose images and videos properly.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1" >
                            <div className="row form-group">
                                <div className="col-xl-4">
                                    <div className="col-xl-6">
                                        <p>Slider Images</p> <strong style={errStyle}>(Images)</strong>:
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="file" multiple className="" onChange={(e) => onSliderImagesChange(e)} required />
                                        <p style={errStyle}></p>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="col-xl-6">
                                        <p>User Stories</p> <strong style={errStyle}>(Videos)</strong>:
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="file" multiple className="" onChange={(e) => onUserStoriesChange(e)} required />
                                        <p style={errStyle}></p>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="col-xl-6">
                                        <p>Yoga Stories</p> <strong style={errStyle}>(Videos)</strong>:
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="file" multiple className="" onChange={(e) => onYogaStoriesChange(e)} required />
                                        <p style={errStyle}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediaDashboard