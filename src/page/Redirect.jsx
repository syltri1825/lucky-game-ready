import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useDisconnectContext } from './component/DisconnectContextProvider'


const Redirect = ({children}) => {

    const title = document.getElementById('lucky-game-unique-user')
    title.textContent = 'Lucky Game'
    const [controlAnimation,setControlAnimation] = useState(false)
    const [luckyUser,setLuckyUser] = useState({
        luckyUserKey: '',
        status: false,
    })
    const navigate = new useNavigate()
    let date = new Date
    // const { init } = useDisconnectContext()


    useEffect(() => {
        setTimeout(() => {
            setControlAnimation(true)
        }, 0);
    }, [])


    useEffect(() => {
        let luckyGameClockCookie = sessionStorage.getItem('lucky-cookie')

        setTimeout(() => {
            if(luckyGameClockCookie){
                navigate('/Choices')
            }
        }, 7000);

        setTimeout(() => {
            if(!luckyGameClockCookie){
                navigate('/')
            }
        }, 7000);
    }, [])

    return (
        <>
            <>
                <div id="dash-load-home" className="d-flex align-items-center justify-content-center w-100 h-100 position-fixed top-0 end-0 bottom-0 start-0 bg-load z-3">
                    <div className="text-center">
                        <div className="text-white">
                            <div className="d-flex align-items-center">
                                <h1 className="display-5">
                                    LUCKY GAME &nbsp;
                                </h1>
                                <div>
                                    <img 
                                        id="img" src="../lucky.png" width="100px" height="100px" 
                                        className="col rounded-1 img-fluid logo"
                                    ></img>
                                </div>
                            </div>
                        </div>
                        <div className="spinner-border text-white" role="status">
                            <span className="col visually-hidden"></span>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Redirect