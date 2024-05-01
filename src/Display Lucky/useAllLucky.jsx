import React from 'react'
import DisplayChart from '../component/DisplayChart';


const useAllLucky = ({
    rule,luckyChoice,
    chartA, chartB,
    chartC, chartD,
}) => {
    if(rule === 'all-lucky'){
        return (
          <DisplayChart 
            luckyText5='5 Chances'
            luckyText10='10 Chances'
            luckyText12='12 Chances'
            luckyText15='15 Chances'
            rule='all-lucky'
            chartDataA={chartA}
            chartDataB={chartB}
            chartDataC={chartC}
            chartDataD={chartD}
          />
        );
      }

}

export default useAllLucky