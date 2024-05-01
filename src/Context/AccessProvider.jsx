import { createContext, useContext, useState } from "react"


const AccessContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});


const AccessProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [token,setToken_] = useState('')

    const setToken = (token) => {
        setToken_(token)
        
        if(token){
            sessionStorage.setItem('ACCESS_TOKEN', token)
        }
        else{
            sessionStorage.removeItem('ACCESS_TOKEN')
        }
    }


    return (
        <AccessContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </AccessContext.Provider>
    )
}

export default AccessProvider

export const useAccessContext = () => useContext(AccessContext)