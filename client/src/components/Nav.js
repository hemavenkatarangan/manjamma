import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/authActions'
import axios from 'axios'
import $ from 'jquery';

function Nav() {
    const user = useSelector(state => state.auth)
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [admins, setAdmins] = useState(['jyoti.byvk@gmail.com', 'hema.s.kasturi@gmail.com', 'divakarvishwamithra@gmail.com', 'lohith88@gmail.com'])
    const [adminAuth, setAdminAuth] = useState(false)
    const [courses, setCourses] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        if (user.isAuthenticated) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }
    })

    useEffect(() => {
        getCoursesData()
    }, [])

    const getCoursesData = () => {
        axios.get('/courses')
        .then(res => {
            setCourses(res.data.result)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const logOutUserFromPanel = () => {
        dispatch(logoutUser())
    }

    const toggler = () => {
        $('.offcanvas-collapse').toggleClass('open')
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
            <div className="container">
                <a className="navbar-brand logo-image" href="/" style={{ marginLeft: '12px' }}>

                    
                    <div className='row'>

                        <div className='col'>
                            <img src="../images/logo.png" alt="" />
                        </div>
                        <div className='col' style={{ marginLeft: '-28px', marginTop: '10px' }}>
                            <div className='row'>
                                <b style={{ padding: '3px', color: 'darkblue', fontWeight: 'bold', lineHeight: 'normal', fontFamily: 'Droid Serif', fontSize: '18px' }}>Amma Manjamma</b>
                            </div>
                            <div className='row'>
                                <b style={{ color: 'gray', fontSize: '.85rem', fontFamily: 'Droid Serif', fontStyle: 'italic', marginLeft: '.2rem', fontSize: '12px' }}>Lokah Samastah Sukhino Bhavantu</b>
                            </div>
                        </div>
                    </div>

                </a>

                <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas" id="navbarBut" onClick={(e) => toggler(e)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto" style={{ fontFamily: 'Poppins' }}>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" style={{ color: 'black',fontSize: '14px' }} href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" style={{ color: 'black',fontSize: '14px' }} href="/about">About Manjamma</a>
                        </li>
                       
                       
                       
                       
                        <li>
                            {isAuthenticated ? <> <div>
                                <span className="nav-item">
                                    <a className="btn-solid-sm page-scroll" onClick={(e) => logOutUserFromPanel(e)}>Logout</a>
                                </span>
                            </div> </>: <div>
                                <span className="nav-item">
                                    <a className="btn-solid-sm page-scroll" href="/register">Sign Up</a>
                                </span>
                            </div>}
                        </li>
                        <li>
                            <img style={{ height: '32px' }} src="/images/logosatsang1.png" alt="byvk"></img>
                        </li>
                       
                    </ul>
                  

                </div>
            </div>
        </nav>
    )
}

export default Nav
