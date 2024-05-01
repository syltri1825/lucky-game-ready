import { createContext } from 'react';

const DisconnectContext = createContext({
    init: () => {}
});


const DisconnectContextProvider = ({children}) => {
    const init = (dateNowConnect) => {

        try {
            let date
            if(dateNowConnect){
                let minutes = dateNowConnect.setMinutes()

                if(minutes == minutes + 60){
                    sessionStorage.getItem('lucky-cookie')?.removeItem()
                }
            }

        } catch (error) {
            console.error(error)
        }
        
    }


    return (
        <DisconnectContextProvider.Provider
            value={{
                init,
            }}
        >
            {children}
        </DisconnectContextProvider.Provider>
    )
}

export default DisconnectContextProvider

export const useDisconnectContext = () => useContext(DisconnectContext)