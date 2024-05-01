import React, { useState, useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, TimeScale } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, TimeScale, Tooltip, Legend);
Chart.register(ChartDataLabels);

const PieChart = ({ table, backgroundColor, label, action, rule, updateText }) => {
    const ref = useRef(null);
    const instanceRef = useRef(null);
    let i = 0
  let maxValue = 84

  const [textResult, setTextResult] = useState('');
  const [status, setStatus] = useState(false);

  if (rule === '5 choices') {
    useEffect(() => {
      if (table && table.length) {
        if (instanceRef.current) instanceRef.current.destroy();

        if (ref.current) {
          const ctx = ref.current.getContext('2d');
          instanceRef.current = new Chart(ctx, {
            plugins: [ChartDataLabels],
            type: 'pie',
            data: {
              datasets: [
                {
                  label: label,
                  data: table.map((par) => par.size),
                  backgroundColor: backgroundColor,
                },
              ],
              labels: table.map((par) => par.id),
            },
            options: {
              // rotation: 704,
              responsive: true,
              animation: { duration: 0 },
              plugins: {
                tooltip: false,
                legend: {
                  display: false,
                },
                datalabels: {
                  color: ["#ffffff", '#1fadc', '#fy6b', '#lb1k'],
                  formatter: (value, context) => context.chart.data.labels[context.dataIndex],
                  font: { size: 15 },
                  borderWidth: 2,
                  borderDash: [5, 5],
                  borderDashOffset: 2,
                },
              },
            },
          });
        }
      }

      return () => {
        if (instanceRef.current) instanceRef.current.destroy();
      };
    }, [table, backgroundColor, label]);


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

    const startAnimation = () => {
        if(action.start){
            const intervalId = setInterval(() => {
              instanceRef.current.options.rotation = instanceRef.current.options.rotation + maxValue;
              instanceRef.current.update();

              if (instanceRef.current.options.rotation >= 360) {
                i += 1
                instanceRef.current.options.rotation = 0;
                maxValue -= 1
              } else if (i > 15 && instanceRef.current.options.rotation === action.rotation) {
                clearInterval(intervalId);
                const getResult = generateResultValue(action.rotation, action.angleTable, action.numberTable);

                action.choixTable.forEach(element => {
                  if(element === getResult){
                    setTimeout(() => {
                      setTextResult(`Félicitation! Vous avez gagnez le jeu. Le numéro gagnant est ${getResult}.`);
                      setStatus(true);
                    }, 2000);
    
                    setTimeout(() => {
                      setStatus(false);
                      setTextResult('');
                      updateText(true);
                    }, 8000);
                  }
                  else{
                    setTimeout(() => {
                      setTextResult(`Désolé! Vous avez perdu le jeu. Le numéro gagnant est ${getResult}.`);
                      setStatus(true);
                    }, 2000);
    
                    setTimeout(() => {
                      setStatus(false);
                      setTextResult('');
                      updateText(true);
                    }, 8000);
                  }
                });
              } 
            }, 10);
        }
        else{
          return null
        }
    };
    startAnimation()

    return (
      <>
        <div className='my-wrapper'>
          <div className='contain'>
            <canvas ref={ref} className={`wheeling`} width='200px' height='200px' />
            <i className="bi bi-geo-alt-fill fs-1 bs"></i>
          </div>
        </div>

        {status && (
          <div className="modal position-static d-block bg-transparent p-4 py-md-5 z-3" tabIndex="-1" role="dialog" id="modalChoice">
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-3 shadow">
                <div className="modal-body p-4 text-black text-center">
                  <h5 className="mb-0">Résultat du Jeu</h5>
                  <p className="mb-0">{textResult}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        
      </>
    );
  }


  if (rule === '10 choices') {
    useEffect(() => {
      if (table && table.length) {
        if (instanceRef.current) instanceRef.current.destroy();

        if (ref.current) {
          const ctx = ref.current.getContext('2d');
          instanceRef.current = new Chart(ctx, {
            plugins: [ChartDataLabels],
            type: 'pie',
            data: {
              datasets: [
                {
                  label: label,
                  data: table.map((par) => par.size),
                  backgroundColor: backgroundColor,
                },
              ],
              labels: table.map((par) => par.id),
            },
            options: {
              // rotation: 704,
              responsive: true,
              animation: { duration: 0 },
              plugins: {
                tooltip: false,
                legend: {
                  display: false,
                },
                datalabels: {
                  color: ["#ffffff", '#1fadc', '#fy6b', '#lb1k'],
                  formatter: (value, context) => context.chart.data.labels[context.dataIndex],
                  font: { size: 15 },
                  borderWidth: 2,
                  borderDash: [5, 5],
                  borderDashOffset: 2,
                },
              },
            },
          });
        }
      }

      return () => {
        if (instanceRef.current) instanceRef.current.destroy();
      };
    }, [table, backgroundColor, label]);


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

    const startAnimation = () => {
        if(action.start){
            let val;
            if (action.resultVal != null) {
              val = action.resultVal;
            }

            const intervalId = setInterval(() => {
              instanceRef.current.options.rotation = instanceRef.current.options.rotation + maxValue;
              instanceRef.current.update();

              if (instanceRef.current.options.rotation >= 360) {
                i += 1
                instanceRef.current.options.rotation = 0;
                maxValue -= 1
              } else if (i > 15 && instanceRef.current.options.rotation === action.rotation) {
                clearInterval(intervalId);
                const getResult = generateResultValue(action.rotation, action.angleTable, action.numberTable);

                action.choixTable.forEach(element => {
                  if(element === getResult){
                    setTimeout(() => {
                      setTextResult(`Félicitation! Vous avez gagnez le jeu. Le numéro gagnant est ${getResult}.`);
                      setStatus(true);
                    }, 2000);
    
                    setTimeout(() => {
                      setStatus(false);
                      setTextResult('');
                      updateText(true);
                    }, 8000);
                  }
                  else{
                    setTimeout(() => {
                      setTextResult(`Désolé! Vous avez perdu le jeu. Le numéro gagnant est ${getResult}.`);
                      setStatus(true);
                    }, 2000);
    
                    setTimeout(() => {
                      setStatus(false);
                      setTextResult('');
                      updateText(true);
                    }, 8000);
                  }
                });
              } 
            }, 10);
        }
        else{
          return null
        }
    };
    startAnimation()

    return (
      <>
        <div className='my-wrapper'>
          <div className='contain'>
            <canvas id='myWheel' ref={ref} className={`wheeling`} width='200px' height='200px' />
            <i className="bi bi-geo-alt-fill fs-1 bs"></i>
          </div>
        </div>

        {status && (
          <div className="modal position-static d-block bg-transparent p-4 py-md-5 z-3" tabIndex="-1" role="dialog" id="modalChoice">
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-3 shadow">
                <div className="modal-body p-4 text-black text-center">
                  <h5 className="mb-0">Résultat du Jeu</h5>
                  <p className="mb-0">{textResult}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  if (rule === '12 choices') {
    useEffect(() => {
      if (table && table.length) {
        if (instanceRef.current) instanceRef.current.destroy();

        if (ref.current) {
          const ctx = ref.current.getContext('2d');
          instanceRef.current = new Chart(ctx, {
            plugins: [ChartDataLabels],
            type: 'pie',
            data: {
              datasets: [
                {
                  label: label,
                  data: table.map((par) => par.size),
                  backgroundColor: backgroundColor,
                },
              ],
              labels: table.map((par) => par.id),
            },
            options: {
              // rotation: 704,
              responsive: true,
              animation: { duration: 0 },
              plugins: {
                tooltip: false,
                legend: {
                  display: false,
                },
                datalabels: {
                  color: ["#ffffff", '#1fadc', '#fy6b', '#lb1k'],
                  formatter: (value, context) => context.chart.data.labels[context.dataIndex],
                  font: { size: 15 },
                  borderWidth: 2,
                  borderDash: [5, 5],
                  borderDashOffset: 2,
                },
              },
            },
          });
        }
      }

      return () => {
        if (instanceRef.current) instanceRef.current.destroy();
      };
    }, [table, backgroundColor, label]);


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

    const startAnimation = () => {
        if(action.start){
            let val;
            if (action.resultVal != null) {
              val = action.resultVal;
            }

            const intervalId = setInterval(() => {
              instanceRef.current.options.rotation = instanceRef.current.options.rotation + maxValue;
              instanceRef.current.update();

              if (instanceRef.current.options.rotation >= 360) {
                i += 1
                instanceRef.current.options.rotation = 0;
                maxValue -= 1
              } else if (i > 15 && instanceRef.current.options.rotation === action.rotation) {
                clearInterval(intervalId);
                const getResult = generateResultValue(action.rotation, action.angleTable, action.numberTable);

                action.choixTable.forEach(element => {
                  if(element === getResult){
                    setTimeout(() => {
                      setTextResult(`Félicitation! Vous avez gagnez le jeu. Le numéro gagnant est ${getResult}.`);
                      setStatus(true);
                    }, 2000);
    
                    setTimeout(() => {
                      setStatus(false);
                      setTextResult('');
                      updateText(true);
                    }, 8000);
                  }
                  else{
                    setTimeout(() => {
                      setTextResult(`Désolé! Vous avez perdu le jeu. Le numéro gagnant est ${getResult}.`);
                      setStatus(true);
                    }, 2000);
    
                    setTimeout(() => {
                      setStatus(false);
                      setTextResult('');
                      updateText(true);
                    }, 8000);
                  }
                });
              } 
            }, 10);
        }
        else{
          return null
        }
    };
    startAnimation()

    return (
      <>
        <div className='my-wrapper'>
          <div className='contain'>
            <canvas id='myWheel' ref={ref} className={`wheeling`} width='200px' height='200px' />
            <i className="bi bi-geo-alt-fill fs-1 bs"></i>
          </div>
        </div>

        {status && (
          <div className="modal position-static d-block bg-transparent p-4 py-md-5 z-3" tabIndex="-1" role="dialog" id="modalChoice">
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-3 shadow">
                <div className="modal-body p-4 text-black text-center">
                  <h5 className="mb-0">Résultat du Jeu</h5>
                  <p className="mb-0">{textResult}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  if (rule === '15 choices') {
    useEffect(() => {
      if (table && table.length) {
        if (instanceRef.current) instanceRef.current.destroy();

        if (ref.current) {
          const ctx = ref.current.getContext('2d');
          instanceRef.current = new Chart(ctx, {
            plugins: [ChartDataLabels],
            type: 'pie',
            data: {
              datasets: [
                {
                  label: label,
                  data: table.map((par) => par.size),
                  backgroundColor: backgroundColor,
                },
              ],
              labels: table.map((par) => par.id),
            },
            options: {
              // rotation: 704,
              responsive: true,
              animation: { duration: 0 },
              plugins: {
                tooltip: false,
                legend: {
                  display: false,
                },
                datalabels: {
                  color: ["#ffffff", '#1fadc', '#fy6b', '#lb1k'],
                  formatter: (value, context) => context.chart.data.labels[context.dataIndex],
                  font: { size: 15 },
                  borderWidth: 2,
                  borderDash: [5, 5],
                  borderDashOffset: 2,
                },
              },
            },
          });
        }
      }

      return () => {
        if (instanceRef.current) instanceRef.current.destroy();
      };
    }, [table, backgroundColor, label]);


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

    const startAnimation = () => {
        if(action.start){
            let val;
            if (action.resultVal != null) {
              val = action.resultVal;
            }

            const intervalId = setInterval(() => {
              instanceRef.current.options.rotation = instanceRef.current.options.rotation + maxValue;
              instanceRef.current.update();

              if (instanceRef.current.options.rotation >= 360) {
                i += 1
                instanceRef.current.options.rotation = 0;
                maxValue -= 1
              } else if (i > 15 && instanceRef.current.options.rotation === action.rotation) {
                clearInterval(intervalId);
                const getResult = generateResultValue(action.rotation, action.angleTable, action.numberTable);

                action.choixTable.forEach(element => {
                  if(element === getResult){
                    setTimeout(() => {
                      setTextResult(`Félicitation! Vous avez gagnez le jeu. Le numéro gagnant est ${getResult}.`);
                      setStatus(true);
                    }, 2000);
    
                    setTimeout(() => {
                      setStatus(false);
                      setTextResult('');
                      updateText(true);
                    }, 8000);
                  }
                  else{
                    setTimeout(() => {
                      setTextResult(`Désolé! Vous avez perdu le jeu. Le numéro gagnant est ${getResult}.`);
                      setStatus(true);
                    }, 2000);
    
                    setTimeout(() => {
                      setStatus(false);
                      setTextResult('');
                      updateText(true);
                    }, 8000);
                  }
                });
              } 
            }, 10);
        }
        else{
          return null
        }
    };
    startAnimation()

    return (
      <>
        <div className='my-wrapper'>
          <div className='contain'>
            <canvas id='myWheel' ref={ref} className={`wheeling`} width='200px' height='200px' />
            <i className="bi bi-geo-alt-fill fs-1 bs"></i>
          </div>
        </div>

        {status && (
          <div className="modal position-static d-block bg-transparent p-4 py-md-5 z-3" tabIndex="-1" role="dialog" id="modalChoice">
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-3 shadow">
                <div className="modal-body p-4 text-black text-center">
                  <h5 className="mb-0">Résultat du Jeu</h5>
                  <p className="mb-0">{textResult}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  if (rule === 'all-lucky') {
    useEffect(() => {
      if (table && table.length) {
        if (instanceRef.current) instanceRef.current.destroy();
  
        if (ref.current) {
          const ctx = ref.current.getContext('2d');
          instanceRef.current = new Chart(ctx, {
            plugins: [ChartDataLabels],
            type: 'pie',
            data: {
              datasets: [
                {
                  label: label,
                  data: table.map((par) => par.size),
                  backgroundColor: backgroundColor,
                },
              ],
              labels: table.map((par) => par.id),
              width: '30px',
              height: '30px',
            },
            options: {
              rotation: 704,
              responsive: true,
              animation: { duration: 0 },
              plugins: {
                tooltip: false,
                legend: {
                  display: false,
                },
                datalabels: {
                  color: ["#ffffff", '#1fadc', '#fy6b', '#lb1k'],
                  formatter: (value, context) => context.chart.data.labels[context.dataIndex],
                  font: { size: 15 },
                  borderWidth: 2,
                  borderDash: [5, 5],
                  borderDashOffset: 2,
                },
              },
            },
          });
        }
      }
  
      return () => {
        if (instanceRef.current) instanceRef.current.destroy();
      };
    }, [table, backgroundColor, label]);


    return <canvas width='225px' height='225px' ref={ref} />;
  }

  return null
};

export default PieChart;
