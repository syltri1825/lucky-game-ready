import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useDisconnectContext } from './component/DisconnectContextProvider'
import { axiosInstance } from '../ApiConnect/axios';
import useAccessContext from '../Context/AccessProvider'


const DashboardPanel = ({children}) => {

    const title = document.getElementById('lucky-game-unique-user')
    title.textContent = 'Lucky Game'
    const [controlAnimation,setControlAnimation] = useState(false)
    const [luckyUser,setLuckyUser] = useState({
        luckyAdminKey: '',
        luckyAdminPseudo: '',
        luckyAdminEmail: '',
        luckyAdminPassword: '',
        userExist: false,
        status: false,
        error: '',
        registerExist: false
    })
    const navigate = new useNavigate()
    const { user, token, setUser, setToken } = useAccessContext()

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
            luckyAdminKey: e.target.value,
            luckyAdminPseudo: e.target.value,
            luckyAdminEmail: e.target.value,
            luckyAdminPassword: e.target.value,
            status: true,
        })
    }

    const csrf = () => axiosInstance.get('sanctum/csrf-cookie')


    const luckySubmitPseudo = async(e) => {
        e.preventDefault()
        await csrf()

        await axiosInstance.post('api/pseudo',luckyUser.luckyAdminPseudo)
        .then(response => {
            if(response.data && response.data.status){
                setTimeout(() => {
                    setLuckyUser({
                        ...luckyUser,
                        luckyAdminPseudo: '',
                        luckyAdminEmail: '',
                        userExist: true,
                    })
                }, 0);
            }
        })
        .catch((error) => {
            const res = error.response
            if(res.data.status === 422){
                setLuckyUser({
                    ...luckyUser,
                    error: res.data.password,
                })
            }
        })
    }
    

    const luckySubmitPassword = async(e) => {
        e.preventDefault()

        await csrf()
        await axiosInstance.post('api/password',{
            password: luckyUser.luckyAdminPassword
        })
        .then(response => {
            if(response.data && response.data.status){
                setTimeout(() => {
                    setLuckyUser({
                        ...luckyUser,
                        luckyAdminPassword: '',
                        userExist: false,
                    })
                    setUser(response.data.user)
                    setToken(response.data.token)
                }, 0);
                document.getElementById('my-btn-password').destroy()
                navigate('/DashboardPanel')
            }
        })
        .catch((error) => {
            const res = error.response
            if(res.data.status === 422){
                setLuckyUser({
                    ...luckyUser,
                    error: res.data.password,
                })
            }
        })
    }


    const luckySubmitRegister = async(e) => {
        e.preventDefault()

        await csrf()
        await axiosInstance.post('api/register',{
            pseudo: luckyUser.luckyAdminPseudo,
            email: luckyUser.luckyAdminEmail
        })
        .then(response => {
            if(response.data && response.data.status){
                setTimeout(() => {
                    setLuckyUser({
                        ...luckyUser,
                        luckyAdminPassword: '',
                        userExist: true,
                    })
                    setUser(response.data.user)
                    setToken(response.data.token)
                }, 0);
                document.getElementById('my-btn-password').destroy()
                navigate('/DashboardPanel')
            }
        })
        .catch((error) => {
            const res = error.response
            if(res.data.status === 422){
                setLuckyUser({
                    ...luckyUser,
                    error: res.data.password,
                })
            }
        })
    }
    
    

            // {
            //     controlAnimation ? 
            //     (
            //         <>
            //             <div id="dash-load-home" className="d-flex align-items-center justify-content-center w-100 h-100 position-fixed top-0 end-0 bottom-0 start-0 bg-load z-3">
            //                 <div className="text-center">
            //                     <div className="spinner-border text-white" role="status">
            //                         <span className="col visually-hidden"></span>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div id="dash-load-home" className="d-flex align-items-center justify-content-center w-100 h-100 position-fixed top-0 end-0 bottom-0 start-0 bg-load z-2">
            //                 <div className="text-center">
            //                     <div className="spinner-border text-white" role="status">
            //                         {/* <span className="col visually-hidden"></span> */}
            //                     </div>
            //                 </div>
            //             </div>
            //         </>
            //     ) :
            //     ''
            // }

    if(luckyUser.registerExist){
        return(
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Panneau de connexion et d'inscription</h1>
                        <p className="col-lg-10 fs-4">Inscrivez-vous pour accéder au panneau d'administration</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input 
                                    type="text" 
                                    name="luckyAdminPseudo" 
                                    value={luckyUser.luckyAdminPseudo}
                                    className="form-control" 
                                    id="floatingInputPseudo" 
                                    onChange={luckyChange}
                                    placeholder="pseudo"
                                />
                                <label htmlFor="floatingInputPseudo">Pseudo</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="email" 
                                    name="luckyAdminEmail" 
                                    value={luckyUser.luckyAdminEmail}
                                    className="form-control" 
                                    id="floatingInputEmail" 
                                    onChange={luckyChange}
                                    placeholder="xxx@example.com"
                                />
                                <label htmlFor="floatingInputEmail">Email address</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-warning" type="submit">S'inscrire</button>
                            <hr className="my-4"/>
                        </form>
                    </div>
                </div>
            </div>
        ) 
    }
    else if(!luckyUser.registerExist){
        if(luckyUser.userExist){ 
            return(
                <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Panneau de connexion et d'inscription</h1>
                            <p className="col-lg-10 fs-4">Veuillez entrer votre mot de passe</p>
                        </div>
                        <div className="col-md-10 mx-auto col-lg-5">
                            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={luckySubmitPassword}>
                                <div className="form-floating mb-3">
                                    <input 
                                        type='password'
                                        id='luckyPassword' 
                                        name="luckyAdminPassword" 
                                        className='form-control border-none'
                                        value={luckyUser.luckyAdminPassword}
                                        onChange={luckyChange}
                                    />
                                    <label htmlFor="luckyPassword">Password</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-warning" type="submit">valider</button>
                                <hr className="my-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        else if(!luckyUser.userExist){
            return (
                    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                        <div className="row align-items-center g-lg-5 py-5">
                            <div className="col-lg-7 text-center text-lg-start">
                                <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Panneau de connexion et d'inscription</h1>
                                <p className="col-lg-10 fs-4">Veuillez entrer votre pseudo</p>
                            </div>
                            <div className="col-md-10 mx-auto col-lg-5">
                                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={luckySubmitPseudo}>
                                    <div className="form-floating mb-3">
                                        <input 
                                            type='text'
                                            id='luckyPseudo' 
                                            name="luckyAdminPseudo" 
                                            className='form-control border-none'
                                            value={luckyUser.luckyAdminPseudo}
                                            onChange={luckyChange}
                                        />
                                        <label htmlFor="luckyPseudo">Pseudo</label>
                                    </div>
                                    <button className="w-100 btn btn-lg btn-warning" type="submit">valider</button>
                                    <hr className="my-4"/>
                                </form>
                            </div>
                        </div>
                    </div>
                ) 
            
        }
    }

}

export default DashboardPanel