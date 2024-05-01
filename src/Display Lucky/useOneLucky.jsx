import React from 'react'
import DisplayChart from '../component/DisplayChart';


const useOneLucky = ({rule,luckyChoice}) => {
    if(rule === 'one-lucky'){
        if(luckyChoice == 5){
            return (
                <DisplayChart 
                // luckyText='5 Chances'
                    rule='one-lucky'
                    chartDataA={<PieChart chartData={userData.luckyChoiceA} chartOptions={userData.options}/>}
                />
            );  
        }
    
        if(luckyChoice == 10){
            return (
                <DisplayChart 
                // luckyText='10 Chances'
                rule='one-lucky'
                chartDataA={<PieChart chartData={userData.luckyChoiceB} chartOptions={userData.options}/>}
                />
            );  
        }
    
        if(luckyChoice == 12){
            return (
                <DisplayChart 
                // luckyText='12 Chances'
                rule='one-lucky'
                chartDataA={<PieChart chartData={userData.luckyChoiceC} chartOptions={userData.options}/>}
                />
            );  
        }
    
        if(luckyChoice == 15){
            return (
                <DisplayChart 
                // luckyText='15 Chances'
                rule='one-lucky'
                chartDataA={<PieChart chartData={userData.luckyChoiceD} chartOptions={userData.options}/>}
                />
            );  
        }
    }

}

export default useOneLucky