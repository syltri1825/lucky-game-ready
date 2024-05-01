import React, { useState, useEffect, useRef } from 'react';
import PieChart from './PieChart';
import DisplayChart from './DisplayChart';
import { FiveData } from './FiveData';
import { TenData } from './TenData';
import { TwelveData } from './TwelveData';
import { FifteenData } from './FifteenData';
import useOneLucky from '../Display Lucky/useOneLucky';

const MyChart = ({rule, luckyChoice,animation,action,updateText}) => {
  const [userData,setUserData] = useState({})
  const [table,setTable] = useState({
    ft: FiveData,
    te: TenData,
    tw: TwelveData,
    fi: FifteenData
  })
  const ref = useRef(null)

  if(rule === 'one-lucky' && luckyChoice == 5){
    return (
      <>
        <DisplayChart 
          comp={<div className='py-2'><h4>{action.text}</h4></div>}
          rule='one-lucky'
          chartDataA={
            <PieChart 
              label={'5 choices'}
              table={table.ft}
              backgroundColor={[
                "#194770", "orangered", "#0577d5ee", "white", "#5222cdee"
              ]}
              action={action}
              rule={'5 choices'}
              updateText={updateText}
            />
          }
        />
      </>
    );  
  }

  if(rule === 'one-lucky' && luckyChoice == 10){
    return (
      <DisplayChart 
        rule='one-lucky'
        chartDataA={
          <PieChart
            label={'10 choices'}
            table={table.te}
            backgroundColor={[
              "#00b982", "#aee507", "#bb0e50", "#213547"
            ]}
            action={action}
            rule={'10 choices'}
              updateText={updateText}
          />
        }
      />
    );  
  }

  if(rule === 'one-lucky' && luckyChoice == 12){
    return (
      <DisplayChart 
        rule='one-lucky'
        chartDataA={
          <PieChart
            label={'12 choices'}
            table={table.tw}
            backgroundColor={[
              "#d4d5d5", "#aee507", "#d5580a", "#35bcff",
            ]}
            action={action}
            rule={'12 choices'}
              updateText={updateText}
          />
        }
      />
    );  
  }

  if(rule === 'one-lucky' && luckyChoice == 15){
    return (
      <DisplayChart 
        rule='one-lucky'
        chartDataA={
          <PieChart
            label={'15 choices'}
            table={table.fi}
            backgroundColor={[
              "#d4d5d5", "#08876b", "#ff4a18", "#075e76",
            ]}
            action={action}
            rule={'15 choices'}
              updateText={updateText}
          />
        }
      />
    );  
  }
  
  if(rule === 'all-lucky'){
    return (
      <DisplayChart 
        luckyText5='5 Chances'
        luckyText10='10 Chances'
        luckyText12='12 Chances'
        luckyText15='15 Chances'
        rule='all-lucky'
        chartDataA={
          <PieChart
            label={'5 choices'}
            table={table.ft}
            backgroundColor={[
              "#194770", "orangered", "#0577d5ee", "white", "#5222cdee"
            ]}
            action={action}
            rule={'all-lucky'}
              updateText={updateText}
          />
        }
        chartDataB={
          <PieChart
            label={'10 choices'}
            table={table.te}
            backgroundColor={[
              "#00b982", "#aee507", "#bb0e50", "#213547"
            ]}
            action={action}
            rule={'all-lucky'}
              updateText={updateText}
          />
        }
        chartDataC={
          <PieChart
            label={'12 choices'}
            table={table.tw}
            backgroundColor={[
              "#d4d5d5", "#aee507", "#d5580a", "#35bcff",
            ]}
            action={action}
            rule={'all-lucky'}
              updateText={updateText}
          />
        }
        chartDataD={
          <PieChart
            label={'15 choices'}
            table={table.fi}
            backgroundColor={[
              "#d4d5d5", "#08876b", "#ff4a18", "#075e76",
            ]}
            action={action}
            rule={'all-lucky'}
              updateText={updateText}
          />
        }
      />
    );
  }
};

export default MyChart;