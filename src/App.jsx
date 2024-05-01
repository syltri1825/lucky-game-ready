import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useDisconnectContext } from './component/DisconnectContextProvider'


const App = ({children}) => {

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
        let luckyGameClockCookie = sessionStorage.getItem('lucky-cookie')

        setTimeout(() => {
            if(luckyGameClockCookie){
                navigate('/Redirect')
            }
        }, 0);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setControlAnimation(true)
        }, 0);

        setTimeout(() => {
            setControlAnimation(false)
        }, 2000);
    }, [])


    const luckyChange = (e) => {
        setLuckyUser({
            luckyUserKey: e.target.value,
            status: true,
        })
    }


    const luckySubmit = (e) => {
        e.preventDefault()
        const cook = `validate${Math.floor(Math.random(21) * Math.ceil(12 * 3556 + 600))}`

        if(luckyUser.luckyUserKey == date.toDateString()){
            sessionStorage.setItem('lucky-cookie',cook)
            navigate('/redirect')
        }
        else{
            sessionStorage.setItem('info-error', true)
            navigate('/error')
        }
    }
    
    
    return (
        <>
            {
                controlAnimation ? 
                (
                    <>
                        <div id="dash-load-home" className="d-flex align-items-center justify-content-center w-100 h-100 position-fixed top-0 end-0 bottom-0 start-0 bg-load z-3">
                            <div className="text-center">
                                <div className="spinner-border text-white" role="status">
                                    <span className="col visually-hidden"></span>
                                </div>
                            </div>
                        </div>
                        <div id="dash-load-home" className="d-flex align-items-center justify-content-center w-100 h-100 position-fixed top-0 end-0 bottom-0 start-0 bg-load z-2">
                            <div className="text-center">
                                <div className="spinner-border text-white" role="status">
                                    {/* <span className="col visually-hidden"></span> */}
                                </div>
                            </div>
                        </div>
                    </>
                ) :
                ''
            }

            
            <form onSubmit={luckySubmit}>
                <div className='d-flex p-5 flex-column align-items-start shadow-warning bg-white rounded-1 home-form'>
                    <label 
                        htmlFor='luckyKey'
                        className='mb-3'
                    >Entrer le mot clé de l'administrateur</label>
                    <input 
                        type='text'
                        id='lucky-key' 
                        name="luckyUserKey" 
                        className='form-control border-none'
                        value={luckyUser.luckyUserKey}
                        onChange={luckyChange}
                    />
                    <button 
                        id='my-btn' 
                        type='submit' 
                        className='button-j mt-1'
                    >valider</button>
                </div>
            </form>
        </>
    )
}

export default App