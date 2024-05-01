import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import MyChart from '../component/MyChart';

const Play = () => { 
    const luckyNumber = useParams().id
    const luckyTitle = useParams().ib
    const [gameTitle,setGameTitle] = useState(luckyTitle)
    const navigate = new useNavigate()
    const [animation,setAnimation] = useState('')

    const changeTitleAtClick = (e) => {
        e.preventDefault()
        document.
        getElementById('editTitle').disabled = true
        document.
        getElementById('modification-title-div').
        classList.remove('d-none') 
        document.
        getElementById('game-title').
        classList.toggle('d-none') 
    }

    const titleInput = (e) => {
        e.preventDefault()

        setGameTitle(e.target.value)
    }

    const titleChange = (e) => {
        e.preventDefault()

        setGameTitle(e.target.value)
    }

    const saveTitle = (e) => {
        e.preventDefault()

        document.
        getElementById('editTitle').disabled = false
        document.
        getElementById('modification-title-div').
        classList.toggle('d-none') 
        document.
        getElementById('game-title').
        classList.remove('d-none') 
    }

    const startNow = (e) => {
        e.preventDefault()
        setAnimation('roue')
    }

    const navigateToStartGame = (e, paramsA,paramsB) => {
        e.preventDefault()

        navigate(`/LuckyGame/StartGame/${paramsA}/${paramsB}`)
    }

    return(
        <>
            <section>
                <header>
                    <h2 className='py-4'>
                        <button id='game-title' disabled className="button-a">
                            {gameTitle}
                        </button>
                    </h2>
                    <div id='modification-title-div' className='row mb-3 d-none'>
                        <input
                            onInput={titleInput}
                            onChange={titleChange} 
                            id='title-input' 
                            name='title' 
                            value={gameTitle} 
                            className="form-control mb-2"
                        />
                        <button onClick={saveTitle} className="btn btn-light btn-md">Enregistrer</button>
                    </div>
                </header>

                <MyChart
                    animation={animation}
                    luckyChoice={luckyNumber}
                    rule='one-lucky'
                ></MyChart>

                <br/><br/>

                <i className="bi bi-geo-alt-fill fs-1 boussole"
                >
                </i>

                <div className="row">
                    <div>
                        <button title={'Jouer le jeu'} onClick={startNow} className="button-j">Jouer</button>
                    </div>
                </div>

                <div className="d-flex py-5">
                    <button 
                        onClick={(e) => navigateToStartGame(e, luckyNumber, luckyTitle)}
                        className="button-d"
                        style={{transform: 'translateX(-50px)'}}
                    >
                        <i className="bi bi-arrow-left"></i>
                    </button>
                </div>
                
            </section>
        </>
    )
}

export default Play