import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser, getCartItems } from '../actions/authActions'

function Home() {
    const user = useSelector(state => state.auth)
    const [isAuthenticated, setAuthenticated] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(user)
        if(user.isAuthenticated) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }
    })

    return (
        <div>
            <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-container">
                                <h3 className="h3-large" style={{fontFamily: 'Poppins'}}>Thanks for signing up</h3>
                                <p className="" style={{fontFamily: 'Poppins'}}>We will keep you informed about our ongoing programs .</p>
                                <p style={{fontFamily: 'Poppins'}}>To learn more about Amma Manjamma please go to our <a href="/about">[About Amma section]</a></p>
                                 <p style={{fontFamily: 'Poppins'}}>
                                    Warmly, <br />
                                    Amma Manjamma Team
                                </p>
                              </div>
                              </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home;