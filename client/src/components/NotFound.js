import { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { logoutUser } from '../actions/authActions'

function NotFound(){
    const user = useSelector(state => state.auth)
    const [isAuthenticated, setAuthenticated] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if(user.isAuthenticated) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }
    })

    const logout = () => {
        dispatch(logoutUser())
    }

    return(
        <div>
            <header id="header" className="header">
                <div className="container">
                    <div className="row" style={{textAlign:'center'}}>
                        <div className="col-lg-12">
                            <div className="text-container">
                                <h1 className="h1-large">Hey Hi,</h1>
                                <p className="p-large">Sorry, Still We're Updating, Will update you through mail. Once we done.!</p>
                                {isAuthenticated ? <button type="submit" className="btn-solid-lg" onClick={(e) => logout(e)}>Logout</button> : <a className="btn-solid-lg" href="/login">Login</a>}
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

export default NotFound