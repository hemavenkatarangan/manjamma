import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function ImagesDashboard() {
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

    return(
        <>
        </>
    )
}

export default ImagesDashboard