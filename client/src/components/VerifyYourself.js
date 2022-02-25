import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { verifyYourself } from '../actions/authActions'
function VerifyUser (props) {
    const dispatch = useDispatch()

    const getParameterByName = () => {
        let url = window.location.href.split('/')
        return url[url.length - 1]
    }

    useEffect(() => {
        dispatch(verifyYourself(getParameterByName()))
    })

    return (
        <div>
            <header id="header" className="header">
                <div className="container">
                    <div className="row" style={{textAlign:'center'}}>
                        <div className="col-lg-12">
                            <div className="text-container">
                                <h1 className="h1-large">Hey Hi,</h1>
                                <p className="p-large">Thank You for verifying for your mail..!</p>
                                <a className="btn-solid-lg" href="/login">Login</a>
                                <a className="btn-outline-lg page-scroll" href="/">Home</a>
                            </div> 
                        </div> 
                        {/* <div className="col-lg-7">
                            <div className="image-container">
                                <img className="img-fluid" src="images/header.png" alt="alternative" />
                            </div> 
                        </div> */}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default VerifyUser