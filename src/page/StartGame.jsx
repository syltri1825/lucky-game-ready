import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import MyChart from '../component/MyChart';
import Table  from '../component/Table'



const StartGame = () => { 
    let luckyParams = useParams().id
    let luckyTitle = useParams().ib
    const navigate = new useNavigate()
    const [gameTitle,setGameTitle] = useState(luckyTitle)
    const [reactivePage,setReactivePage] = useState({
        loader: '',
        status: false,
        text: '',
        animation: '',
        rotation: null,
        luckyTitle: '',
        resultVal: null,
        start: false,
        angleTable: [],
        numberTable: [],
        choixTable: [],
        numberComponent: ''
    })
    const [textResult,setTextResult] = useState('')
    const [valResult,setValResult] = useState(null)
    const [status,setStatus] = useState(false)
    const [start,setStart] = useState(false)
    const [fv,setFv] = useState(0)
    const [te,setTe] = useState(0)
    const [tw,setTw] = useState(0)
    const [fi,setFi] = useState(0)
    const [progress,setProgress] = useState(0)
    const [style,setStyle] = useState({
        buttonI1: 'button-i1-1',buttonI2: 'button-i2-1',buttonI3: 'button-i3-1',
        buttonI4: 'button-i4-1',buttonI5: 'button-i5-1',buttonI6: 'button-i6-1',
        buttonI7: 'button-i7-1',buttonI8: 'button-i8-1',buttonI9: 'button-i9-1',
        buttonI10: 'button-i10-1',buttonI11: 'button-i11-1',buttonI12: 'button-i12-1',
        buttonI13: 'button-i13-1',buttonI14: 'button-i14-1',buttonI15: 'button-i15-1',
    })


    const [sta,setSta] = useState(false)
    let titleAtLoad;
    let rotateValue;
    const [controlAnimation,setControlAnimation] = useState(false)

    // const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    // const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


    useEffect(() => {
        let luckyGameClockCookie = sessionStorage.getItem('lucky-cookie')

        if(!luckyGameClockCookie){
            navigate('/redirect')
        }
    },[])

    useEffect(() => {
        titleAtLoad = sessionStorage.getItem('title-game')

        if(titleAtLoad) setGameTitle(titleAtLoad)
        
    }, [])
    


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

        sessionStorage.setItem('title-game',gameTitle)
    }

    const navigateToChoice = (e) => {
        e.preventDefault()

        titleAtLoad = sessionStorage.getItem('title-game')
        if(titleAtLoad) sessionStorage.removeItem('title-game')

        navigate(`/Choices`)
    }

    const navigateToPlay = (e, paramsA,paramsB) => {
        e.preventDefault()

        navigate(`/Play/${paramsA}/${paramsB}`)
    }



    const startNow = (e) => {
        e.preventDefault()
        
        if(reactivePage.choixTable.length > 0){
            manageGame()

            document.getElementById('beforePlay')?.classList.toggle('d-none')
            document.getElementById('editTitle').disabled = false

            setTimeout(() => {
                if(!document.getElementById('modification-title-div')?.classList.contains('d-none')){
                    document.
                    getElementById('modification-title-div').
                    classList.toggle('d-none') 
                    document.
                    getElementById('game-title').
                    classList.remove('d-none') 
                    document.
                    getElementById('editTitle').disabled = false
                }
            }, 0);
        }
        else{
            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: `Vous devez faire vos choix de numéro`
                })
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: ''
                })
            }, 3000);
        }
    }


    const manageGame = () => {
        if(luckyParams == '5'){
            let getValueA

            Table.myConditionA.forEach(element => {
                if(element == Table.myConditionA[fv]){
                    getValueA = element
                } 
                setFv(fv + 1)
            })


            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'rotate 7s linear infinite',
                    rotation: getValueA,
                    start: true,
                    angleTable: Table.rowTableA,
                    numberTable: Table.myTableA,
                })
            }, 0);

            setTimeout(() => {
                document.getElementById('bt1').disabled = true
                document.getElementById('bt2').disabled = true
                document.getElementById('bt3').disabled = true
                document.getElementById('bt4').disabled = true
                document.getElementById('bt5').disabled = true
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null,
                    start: false,
                    choixTable: []
                })
            }, 2000);

            setStyle({
                ...style,
                buttonI1: 'button-i1-1',buttonI2: 'button-i2-1',buttonI3: 'button-i3-1',
                buttonI4: 'button-i4-1',buttonI5: 'button-i5-1',
            })

            setTimeout(() => {
                document.getElementById('displayText')?.classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.toggle('d-none')
            }, 1000);

            setTimeout(() => {
                if(fv == 29){
                    setFv(0)
                }
            }, 0);
            
        }
        if(luckyParams == '10'){
            let getValueB

            Table.myConditionB.forEach(element => {
                if(element == Table.myConditionB[te]){
                    getValueB = element
                } 
                setTe(te + 1)
            })

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'rotate 7s linear infinite',
                    rotation: getValueB,
                    start: true,
                    angleTable: Table.rowTableB,
                    numberTable: Table.myTableB,
                })
            }, 0);

            setTimeout(() => {
                document.getElementById('bt1').disabled = true
                document.getElementById('bt2').disabled = true
                document.getElementById('bt3').disabled = true
                document.getElementById('bt4').disabled = true
                document.getElementById('bt5').disabled = true
                document.getElementById('bt6').disabled = true
                document.getElementById('bt7').disabled = true
                document.getElementById('bt8').disabled = true
                document.getElementById('bt9').disabled = true
                document.getElementById('bt10').disabled = true
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null,
                    start: false,
                    choixTable: []
                })
            }, 2000);

            setStyle({
                ...style,
                buttonI1: 'button-i1-1',buttonI2: 'button-i2-1',buttonI3: 'button-i3-1',
                buttonI4: 'button-i4-1',buttonI5: 'button-i5-1',buttonI6: 'button-i6-1',
                buttonI7: 'button-i7-1',buttonI8: 'button-i8-1',buttonI9: 'button-i9-1',
                buttonI10: 'button-i10-1',
            })

            setTimeout(() => {
                document.getElementById('displayText')?.classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.toggle('d-none')
            }, 1000);

            setTimeout(() => {
                if(te == 29){
                    setTe(0)
                }
            }, 0);
        }
        if(luckyParams == '12'){
            let getValueC
            
            Table.myConditionC.forEach(element => {
                if(element == Table.myConditionC[tw]){
                    getValueC = element
                } 
                setTw(tw + 1)
            })

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'rotate 7s linear infinite',
                    rotation: getValueC,
                    start: true,
                    angleTable: Table.rowTableC,
                    numberTable: Table.myTableC,
                })
            }, 0);

            setTimeout(() => {
                document.getElementById('bt1').disabled = true
                document.getElementById('bt2').disabled = true
                document.getElementById('bt3').disabled = true
                document.getElementById('bt4').disabled = true
                document.getElementById('bt5').disabled = true
                document.getElementById('bt6').disabled = true
                document.getElementById('bt7').disabled = true
                document.getElementById('bt8').disabled = true
                document.getElementById('bt9').disabled = true
                document.getElementById('bt10').disabled = true
                document.getElementById('bt11').disabled = true
                document.getElementById('bt12').disabled = true
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null,
                    start: false,
                    choixTable: []
                })
            }, 2000);

            setStyle({
                ...style,
                buttonI1: 'button-i1-1',buttonI2: 'button-i2-1',buttonI3: 'button-i3-1',
                buttonI4: 'button-i4-1',buttonI5: 'button-i5-1',buttonI6: 'button-i6-1',
                buttonI7: 'button-i7-1',buttonI8: 'button-i8-1',buttonI9: 'button-i9-1',
                buttonI10: 'button-i10-1',buttonI11: 'button-i11-1',buttonI12: 'button-i12-1',
            })

            setTimeout(() => {
                document.getElementById('displayText')?.classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.toggle('d-none')
            }, 1000);

            setTimeout(() => {
                if(tw == 29){
                    setTw(0)
                }
            }, 0);
        }
        if(luckyParams == '15'){
            let getValueD
            
            Table.myConditionD.forEach(element => {
                if(element == Table.myConditionD[fi]){
                    getValueD = element
                } 
                setFi(fi + 1)
            })

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'rotate 7s linear infinite',
                    rotation: getValueD,
                    start: true,
                    angleTable: Table.rowTableD,
                    numberTable: Table.myTableD,
                })
            }, 0);

            setTimeout(() => {
                document.getElementById('bt1').disabled = true
                document.getElementById('bt2').disabled = true
                document.getElementById('bt3').disabled = true
                document.getElementById('bt4').disabled = true
                document.getElementById('bt5').disabled = true
                document.getElementById('bt6').disabled = true
                document.getElementById('bt7').disabled = true
                document.getElementById('bt8').disabled = true
                document.getElementById('bt9').disabled = true
                document.getElementById('bt10').disabled = true
                document.getElementById('bt11').disabled = true
                document.getElementById('bt12').disabled = true
                document.getElementById('bt13').disabled = true
                document.getElementById('bt14').disabled = true
                document.getElementById('bt15').disabled = true
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null,
                    start: false,
                    choixTable: []
                })
            }, 2000);

            setStyle({
                ...style,
                buttonI1: 'button-i1-1',buttonI2: 'button-i2-1',buttonI3: 'button-i3-1',
                buttonI4: 'button-i4-1',buttonI5: 'button-i5-1',buttonI6: 'button-i6-1',
                buttonI7: 'button-i7-1',buttonI8: 'button-i8-1',buttonI9: 'button-i9-1',
                buttonI10: 'button-i10-1',buttonI11: 'button-i11-1',buttonI12: 'button-i12-1',
                buttonI13: 'button-i13-1',buttonI14: 'button-i14-1',buttonI15: 'button-i15-1',
            })

            setTimeout(() => {
                document.getElementById('displayText')?.classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText')?.classList.toggle('d-none')
            }, 1000);

            setTimeout(() => {
                if(fi == 29){
                    setFi(0)
                }
            }, 0);    
        }
    }

    const updateText = (params) => {
        if(params){
            document.
            getElementById('beforePlay')?.
            classList.remove('d-none')

            if(luckyParams === '5'){
                setTimeout(() => {
                    document.getElementById('bt1').disabled = false
                    document.getElementById('bt2').disabled = false
                    document.getElementById('bt3').disabled = false
                    document.getElementById('bt4').disabled = false
                    document.getElementById('bt5').disabled = false
                }, 2000);
            }
            else if(luckyParams === '10'){
                setTimeout(() => {
                    document.getElementById('bt1').disabled = false
                    document.getElementById('bt2').disabled = false
                    document.getElementById('bt3').disabled = false
                    document.getElementById('bt4').disabled = false
                    document.getElementById('bt5').disabled = false
                    document.getElementById('bt6').disabled = false
                    document.getElementById('bt7').disabled = false
                    document.getElementById('bt8').disabled = false
                    document.getElementById('bt9').disabled = false
                    document.getElementById('bt10').disabled = false
                }, 2000);
            }
            else if(luckyParams === '12'){
                setTimeout(() => {
                    document.getElementById('bt1').disabled = false
                    document.getElementById('bt2').disabled = false
                    document.getElementById('bt3').disabled = false
                    document.getElementById('bt4').disabled = false
                    document.getElementById('bt5').disabled = false
                    document.getElementById('bt6').disabled = false
                    document.getElementById('bt7').disabled = false
                    document.getElementById('bt8').disabled = false
                    document.getElementById('bt9').disabled = false
                    document.getElementById('bt10').disabled = false
                    document.getElementById('bt11').disabled = false
                    document.getElementById('bt12').disabled = false
                }, 2000);
            }
            else if(luckyParams === '15'){
                setTimeout(() => {
                    document.getElementById('bt1').disabled = false
                    document.getElementById('bt2').disabled = false
                    document.getElementById('bt3').disabled = false
                    document.getElementById('bt4').disabled = false
                    document.getElementById('bt5').disabled = false
                    document.getElementById('bt6').disabled = false
                    document.getElementById('bt7').disabled = false
                    document.getElementById('bt8').disabled = false
                    document.getElementById('bt9').disabled = false
                    document.getElementById('bt10').disabled = false
                    document.getElementById('bt11').disabled = false
                    document.getElementById('bt12').disabled = false
                    document.getElementById('bt13').disabled = false
                    document.getElementById('bt14').disabled = false
                    document.getElementById('bt15').disabled = false
                }, 2000);
            }
        }
    }


    const generateRotateValue = (params) => {
        let alertValue = Math.floor(Math.random() * (355 - 0 + 1) + 0)
        return Math.floor(alertValue)
    }

    const generateResultValue = (currentAngle, angleRanges, winningNumbers) => {
        for (let i = 0; i < angleRanges.length; i++) {
            const {minDeg, maxDeg, value } = angleRanges[i];
    

            if (currentAngle >= minDeg && currentAngle <= maxDeg) {
                
                if (winningNumbers.includes(value)) {
                    return value;
                }
            }
        }
    
        return null; 
    }

    
    const getPlageAngle = (numberOfSections) => {
        const angleParSection = 360 / numberOfSections;

        const wheelSections = Array.from({ length: numberOfSections }, (_, index) => {
            const minDeg = index * angleParSection;
            const maxDeg = (index + 1) * angleParSection;
            let control = index + 2

            if(control == 6){
                control = 2
                const minDeg = index * angleParSection;
                const maxDeg = (index + 1) * angleParSection;
                return {
                    value: control,
                    minDeg,
                    maxDeg,
                };
            }
            else{
                return {
                    value: control,
                    minDeg,
                    maxDeg,
                };
            }
        });

        return wheelSections
    }

    const registerNumberChoices = (e,params) => {
        e.preventDefault()

        if(luckyParams === '5'){
            let choice = 1
            if(reactivePage.choixTable.length < choice){

                if(params == 1){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI1: 'button-i1-2'
                    })
                }
                else if(params == 2){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI2: 'button-i2-2'
                    })
                }
                else if(params == 3){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI3: 'button-i3-2'
                    })
                }
                else if(params == 4){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI4: 'button-i4-2'
                    })
                }
                else if(params == 5){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI5: 'button-i5-2'
                    })
                }
                else if(params == 6){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI6: 'button-i6-2'
                    })
                }
                else if(params == 7){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI7: 'button-i7-2'
                    })
                }
                else if(params == 8){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI8: 'button-i8-2'
                    })
                }
                else if(params == 9){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI9: 'button-i9-2'
                    })
                }
                else if(params == 10){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI10: 'button-i10-2'
                    })
                }
                else if(params == 11){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI11: 'button-i11-2'
                    })
                }
                else if(params == 12){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI12: 'button-i12-2'
                    })
                }
                else if(params == 13){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI13: 'button-i13-2'
                    })
                }
                else if(params == 14){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI14: 'button-i14-2'
                    })
                }
                else if(params == 15){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI15: 'button-i15-2'
                    })
                }
            }
            else if(reactivePage.choixTable.length >= choice){
                setTimeout(() => {
                    setReactivePage({
                        ...reactivePage,
                        text: `Vous avez droit à ${choice} choix de numéro`
                    })
                }, 0);
    
                setTimeout(() => {
                    setReactivePage({
                        ...reactivePage,
                        text: ''
                    })
                }, 3000);
            }
        }
        else if(luckyParams === '10'){
            let choice = 2
            if(reactivePage.choixTable.length < choice){

                if(params == 1){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI1: 'button-i1-2'
                    })
                }
                else if(params == 2){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI2: 'button-i2-2'
                    })
                }
                else if(params == 3){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI3: 'button-i3-2'
                    })
                }
                else if(params == 4){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI4: 'button-i4-2'
                    })
                }
                else if(params == 5){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI5: 'button-i5-2'
                    })
                }
                else if(params == 6){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI6: 'button-i6-2'
                    })
                }
                else if(params == 7){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI7: 'button-i7-2'
                    })
                }
                else if(params == 8){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI8: 'button-i8-2'
                    })
                }
                else if(params == 9){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI9: 'button-i9-2'
                    })
                }
                else if(params == 10){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI10: 'button-i10-2'
                    })
                }
                else if(params == 11){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI11: 'button-i11-2'
                    })
                }
                else if(params == 12){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI12: 'button-i12-2'
                    })
                }
                else if(params == 13){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI13: 'button-i13-2'
                    })
                }
                else if(params == 14){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI14: 'button-i14-2'
                    })
                }
                else if(params == 15){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI15: 'button-i15-2'
                    })
                }
            }
            else if(reactivePage.choixTable.length >= choice){
                setTimeout(() => {
                    setReactivePage({
                        ...reactivePage,
                        text: `Vous avez droit à ${choice} choix de numéro`
                    })
                }, 0);
    
                setTimeout(() => {
                    setReactivePage({
                        ...reactivePage,
                        text: ''
                    })
                }, 3000);
            }
        }
        else if(luckyParams === '12'){
            let choice = 3
            if(reactivePage.choixTable.length < choice){

                if(params == 1){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI1: 'button-i1-2'
                    })
                }
                else if(params == 2){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI2: 'button-i2-2'
                    })
                }
                else if(params == 3){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI3: 'button-i3-2'
                    })
                }
                else if(params == 4){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI4: 'button-i4-2'
                    })
                }
                else if(params == 5){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI5: 'button-i5-2'
                    })
                }
                else if(params == 6){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI6: 'button-i6-2'
                    })
                }
                else if(params == 7){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI7: 'button-i7-2'
                    })
                }
                else if(params == 8){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI8: 'button-i8-2'
                    })
                }
                else if(params == 9){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI9: 'button-i9-2'
                    })
                }
                else if(params == 10){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI10: 'button-i10-2'
                    })
                }
                else if(params == 11){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI11: 'button-i11-2'
                    })
                }
                else if(params == 12){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI12: 'button-i12-2'
                    })
                }
                else if(params == 13){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI13: 'button-i13-2'
                    })
                }
                else if(params == 14){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI14: 'button-i14-2'
                    })
                }
                else if(params == 15){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI15: 'button-i15-2'
                    })
                }
            }
            else if(reactivePage.numberTable.length >= choice){
                setTimeout(() => {
                    setReactivePage({
                        ...reactivePage,
                        text: `Vous avez droit à ${choice} choix de numéro`
                    })
                }, 0);
    
                setTimeout(() => {
                    setReactivePage({
                        ...reactivePage,
                        text: ''
                    })
                }, 3000);
            }
        }
        else if(luckyParams === '15'){
            let choice = 4
            if(reactivePage.choixTable.length < choice){

                if(params == 1){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI1: 'button-i1-2'
                    })
                }
                else if(params == 2){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI2: 'button-i2-2'
                    })
                }
                else if(params == 3){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI3: 'button-i3-2'
                    })
                }
                else if(params == 4){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI4: 'button-i4-2'
                    })
                }
                else if(params == 5){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI5: 'button-i5-2'
                    })
                }
                else if(params == 6){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI6: 'button-i6-2'
                    })
                }
                else if(params == 7){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI7: 'button-i7-2'
                    })
                }
                else if(params == 8){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI8: 'button-i8-2'
                    })
                }
                else if(params == 9){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI9: 'button-i9-2'
                    })
                }
                else if(params == 10){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI10: 'button-i10-2'
                    })
                }
                else if(params == 11){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI11: 'button-i11-2'
                    })
                }
                else if(params == 12){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI12: 'button-i12-2'
                    })
                }
                else if(params == 13){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI13: 'button-i13-2'
                    })
                }
                else if(params == 14){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI14: 'button-i14-2'
                    })
                }
                else if(params == 15){
                    reactivePage.choixTable.push(params)
                    setStyle({
                        ...style,
                        buttonI15: 'button-i15-2'
                    })
                }
            }
            else if(reactivePage.choixTable.length >= choice){
                setTimeout(() => {
                    setReactivePage({
                        ...reactivePage,
                        text: `Vous avez droit à ${choice} choix de numéro`
                    })
                }, 0);
    
                setTimeout(() => {
                    setReactivePage({
                        ...reactivePage,
                        text: ''
                    })
                }, 3000);
            }
        }
    }

    const restart = (e,params) => {
        e.preventDefault()

        setTimeout(() => {
            setReactivePage({
                ...reactivePage,
                choixTable: []
            })
        }, 0);
        setStyle({
            ...style,
            buttonI1: 'button-i1-1',buttonI2: 'button-i2-1',buttonI3: 'button-i3-1',buttonI4: 'button-i4-1',
            buttonI5: 'button-i5-1',buttonI6: 'button-i6-1',buttonI7: 'button-i7-1',buttonI8: 'button-i8-1',
            buttonI9: 'button-i9-1',buttonI10: 'button-i10-1',buttonI11: 'button-i11-1',buttonI12: 'button-i12-1',
            buttonI13: 'button-i13-1',buttonI14: 'button-i14-1',buttonI15: 'button-i15-1'
        })
    }


    return(
        <>
            {/* <button 
                className='button-info' 
                data-bs-container="body" 
                data-bs-toggle="popover" 
                data-bs-placement="left" 
                data-bs-content=" Jouer à lucky game autant que vous voulez! Choisissez juste un numéro et après avoir lancer le jeu, attendez l'arrêt du roue pour connaître le résultat. Vous pouvez aussi modifier le nom du du joueur en appuyant sur le boutton éditer."
            >
                <i className='bi bi-info'/>
            </button> */}

            
            {
                luckyParams === '5' ?
                (
                    <div className="list-btn-choices">
                        <button id="bt1" onClick={(e) => registerNumberChoices(e,1)} className={`${style.buttonI1} font-s`}>1</button>
                        <button id="bt2" onClick={(e) => registerNumberChoices(e,2)} className={`${style.buttonI2} font-s`}>2</button>
                        <button id="bt3" onClick={(e) => registerNumberChoices(e,3)} className={`${style.buttonI3} font-s`}>3</button>
                        <button id="bt4" onClick={(e) => registerNumberChoices(e,4)} className={`${style.buttonI4} font-s`}>4</button>
                        <button id="bt5" onClick={(e) => registerNumberChoices(e,5)} className={`${style.buttonI5} font-s`}>5</button>
                        <button id="btd" title="Annuler le choix des boutons" onClick={(e) => restart(e)} className={`button-z font-s`}>Annuler</button>
                    </div>
                ) :
                luckyParams === '10' ? 
                (
                    <div className="list-btn-choices">
                        <button id="bt1" onClick={(e) => registerNumberChoices(e,1)} className={`${style.buttonI1} font-s`}>1</button>
                        <button id="bt2" onClick={(e) => registerNumberChoices(e,2)} className={`${style.buttonI2} font-s`}>2</button>
                        <button id="bt3" onClick={(e) => registerNumberChoices(e,3)} className={`${style.buttonI3} font-s`}>3</button>
                        <button id="bt4" onClick={(e) => registerNumberChoices(e,4)} className={`${style.buttonI4} font-s`}>4</button>
                        <button id="bt5" onClick={(e) => registerNumberChoices(e,5)} className={`${style.buttonI5} font-s`}>5</button>
                        <button id="bt6" onClick={(e) => registerNumberChoices(e,6)} className={`${style.buttonI6} font-s`}>6</button>
                        <button id="bt7" onClick={(e) => registerNumberChoices(e,7)} className={`${style.buttonI7} font-s`}>7</button>
                        <button id="bt8" onClick={(e) => registerNumberChoices(e,8)} className={`${style.buttonI8} font-s`}>8</button>
                        <button id="bt9" onClick={(e) => registerNumberChoices(e,9)} className={`${style.buttonI9} font-s`}>9</button>
                        <button id="bt10" onClick={(e) => registerNumberChoices(e,10)} className={`${style.buttonI10} font-s`}>10</button>
                        <button id="btd" title="Annuler le choix des boutons" onClick={(e) => restart(e)} className={`button-z font-s`}>Annuler</button>
                    </div> 
                ) :
                luckyParams === '12' ? 
                (
                    <div className="list-btn-choices">
                        <button id="bt1" onClick={(e) => registerNumberChoices(e,1)} className={`${style.buttonI1} font-s`}>1</button>
                        <button id="bt2" onClick={(e) => registerNumberChoices(e,2)} className={`${style.buttonI2} font-s`}>2</button>
                        <button id="bt3" onClick={(e) => registerNumberChoices(e,3)} className={`${style.buttonI3} font-s`}>3</button>
                        <button id="bt4" onClick={(e) => registerNumberChoices(e,4)} className={`${style.buttonI4} font-s`}>4</button>
                        <button id="bt5" onClick={(e) => registerNumberChoices(e,5)} className={`${style.buttonI5} font-s`}>5</button>
                        <button id="bt6" onClick={(e) => registerNumberChoices(e,6)} className={`${style.buttonI6} font-s`}>6</button>
                        <button id="bt7" onClick={(e) => registerNumberChoices(e,7)} className={`${style.buttonI7} font-s`}>7</button>
                        <button id="bt8" onClick={(e) => registerNumberChoices(e,8)} className={`${style.buttonI8} font-s`}>8</button>
                        <button id="bt9" onClick={(e) => registerNumberChoices(e,9)} className={`${style.buttonI9} font-s`}>9</button>
                        <button id="bt10" onClick={(e) => registerNumberChoices(e,10)} className={`${style.buttonI10} font-s`}>10</button>
                        <button id="bt11" onClick={(e) => registerNumberChoices(e,11)} className={`${style.buttonI11} font-s`}>11</button>
                        <button id="bt12" onClick={(e) => registerNumberChoices(e,12)} className={`${style.buttonI12} font-s`}>12</button>
                        <button id="btd" title="Annuler le choix des boutons" onClick={(e) => restart(e)} className={`button-z font-s`}>Annuler</button>
                    </div>
                ) :
                luckyParams === '15' ? 
                (
                    <div className="list-btn-choices">
                        <button id="bt1" onClick={(e) => registerNumberChoices(e,1)} className={`${style.buttonI1} font-s`}>1</button>
                        <button id="bt2" onClick={(e) => registerNumberChoices(e,2)} className={`${style.buttonI2} font-s`}>2</button>
                        <button id="bt3" onClick={(e) => registerNumberChoices(e,3)} className={`${style.buttonI3} font-s`}>3</button>
                        <button id="bt4" onClick={(e) => registerNumberChoices(e,4)} className={`${style.buttonI4} font-s`}>4</button>
                        <button id="bt5" onClick={(e) => registerNumberChoices(e,5)} className={`${style.buttonI5} font-s`}>5</button>
                        <button id="bt6" onClick={(e) => registerNumberChoices(e,6)} className={`${style.buttonI6} font-s`}>6</button>
                        <button id="bt7" onClick={(e) => registerNumberChoices(e,7)} className={`${style.buttonI7} font-s`}>7</button>
                        <button id="bt8" onClick={(e) => registerNumberChoices(e,8)} className={`${style.buttonI8} font-s`}>8</button>
                        <button id="bt9" onClick={(e) => registerNumberChoices(e,9)} className={`${style.buttonI9} font-s`}>9</button>
                        <button id="bt10" onClick={(e) => registerNumberChoices(e,10)} className={`${style.buttonI10} font-s`}>10</button>
                        <button id="bt11" onClick={(e) => registerNumberChoices(e,11)} className={`${style.buttonI11} font-s`}>11</button>
                        <button id="bt12" onClick={(e) => registerNumberChoices(e,12)} className={`${style.buttonI12} font-s`}>12</button>
                        <button id="bt13" onClick={(e) => registerNumberChoices(e,13)} className={`${style.buttonI13} font-s`}>13</button>
                        <button id="bt14" onClick={(e) => registerNumberChoices(e,14)} className={`${style.buttonI14} font-s`}>14</button>
                        <button id="bt15" onClick={(e) => registerNumberChoices(e,15)} className={`${style.buttonI15} font-s`}>15</button>
                        <button id="btd" title="Annuler le choix des boutons" onClick={(e) => restart(e)} className={`button-z font-s`}>Annuler</button>
                    </div>
                ) :
                ''
            }
    
            <section>
                <header className='d-flex flex-row justify-content-center align-items-center text-center mar-app'>
                    <div className='col pt-4 position-absolute'>
                        <button id='game-title' disabled className="button-a">
                            {gameTitle}
                        </button>
                    </div>
                    <div id='modification-title-div' className='col pt-4 position-absolute d-none'>
                        <div className='row gap-0 text-start'>
                            <div className='col-8'>
                                <form id='form-title'>
                                    <input
                                        onInput={titleInput}
                                        onChange={titleChange} 
                                        id='title-input' 
                                        name='title' 
                                        value={gameTitle}
                                        className="form-control form-control-sm"
                                    />
                                </form>
                            </div>
                            <div className='col-4'>
                                <button onClick={saveTitle} className="btn btn-light btn-sm">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </header>

                <MyChart
                    action={reactivePage}
                    luckyChoice={luckyParams}
                    rule='one-lucky'
                    updateText={updateText}
                ></MyChart>

                <br/><br/>
                    
                <div className="d-flex justify-items-center align-items-center text-center row row-cols-2 position-absolute marg-action" id='beforePlay'>
                    <div>
                        <button title={'cliquer pour démarrer le jeu'} 
                        id='play'
                        onClick={startNow}
                        className="button-j">Jouer</button>
                    </div>
                    <div>
                        <button id="editTitle" title="modifier le titre" onClick={changeTitleAtClick} className="button-e">Editer</button>
                    </div>
                </div>


                {
                    reactivePage.text != '' ?
                    (<div className="modal position-static d-block bg-transparent p-4 py-md-5 z-3" tabIndex="-1" role="dialog" id="modalChoice">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content rounded-3 shadow">
                                <div className="modal-body p-4 text-black text-center">
                                    <p className="mb-0">{reactivePage.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                    : ''
                }


                <div className="d-flex position-absolute mt-5 py-5 marg-action-back">
                    <button 
                        onClick={navigateToChoice}
                        className="button-d"
                        style={{transform: 'translateX(-100px)'}}
                    >
                        <i className="bi bi-arrow-left"></i>
                    </button>
                </div>
                
            </section>
        </>
    )
}

export default StartGame