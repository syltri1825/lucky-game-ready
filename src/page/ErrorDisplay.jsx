import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const App = ({children}) => {

    const title = document.getElementById('lucky-game-unique-user')
    title.textContent = 'Lucky Game Error'
    const navigate = new useNavigate()

    return (
        <>            
            <div className='d-flex p-3 flex-column shadow-warning bg-white rounded-1 home-form-1'>
                <h1 
                    className='h1 mb-3 text-danger'
                >
                    LUCKY GAME ERROR
                </h1>
                <p 
                    className='mb-3'
                >
                    Vous n'avez pas les droits requis pour utiliser Lucky Game.
                    Veuillez reprendre l'opération! Et entrer le mot clé exacte.
                </p>
            </div>
        </>
    )
}

export default App