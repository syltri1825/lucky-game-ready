import React from 'react';
import { Link } from 'react-router-dom';

const DisplayChart = ({
    chartDataA, chartDataB, chartDataC, 
    chartDataD, rule, luckyText, luckyText5,
    luckyText10, luckyText12, luckyText15,
}) => {

    if(rule === 'one-lucky'){
        return (
            <>
                <section className='container-fluid'>
                    <div className="row row-cols-1 text-center text-white">
                        <div className="col">
                            {chartDataA}
                            <p>{luckyText ? luckyText : ''}</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    if(rule === 'all-lucky'){
        return (
            <>
                {/* <section className='container-fluid'>
                    <h2 className="h5 py-0">
                        <button disabled className="button-a">
                            Lucky Choices
                        </button>
                    </h2>

                    <div className="text-center text-white">                
                        <div className="row row-cols-2">
                            <div className="col-md-6">
                                <Link to='/StartGame/5/Lucky Game' className="nav-link">
                                    {chartDataA}
                                    <p>{luckyText5}</p>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to='/StartGame/10/Lucky Game' className="nav-link">
                                    {chartDataB}
                                    <p>{luckyText10}</p>
                                </Link>
                            </div>
                        </div>
                        <div className="row row-cols-2">
                            <div className="col-md-6">
                                <Link to='/StartGame/12/Lucky Game' className="nav-link">
                                    {chartDataC}
                                    <p>{luckyText12}</p>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to='/StartGame/15/Lucky Game' className="nav-link">
                                    {chartDataD}
                                    <p>{luckyText15}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className='d-flex flex-column justify-items-center align-items-center text-center text-white mar-app-2'>
                    <div className='col pt-4 text-center position-absolute'>
                        <h2 className="h5 py-3">
                            <button disabled className="button-a">
                                Lucky Choices
                            </button>
                        </h2>
                    </div>
                </section>

                <section className='text-center text-white'>
                    <div className="flex1 mt-0">
                        <div className="flex-grow1">
                            <Link to='/StartGame/5/Lucky Game' className="nav-link">
                                {chartDataA}
                                <p>{luckyText5}</p>
                            </Link>
                        </div>
                        <div className="flex-grow2">
                            <Link to='/StartGame/10/Lucky Game' className="nav-link">
                                {chartDataB}
                                <p>{luckyText10}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex1">
                        <div className="flex-grow1">
                            <Link to='/StartGame/12/Lucky Game' className="nav-link">
                                {chartDataC}
                                <p>{luckyText12}</p>
                            </Link>
                        </div>
                        <div className="flex-grow2">
                            <Link to='/StartGame/15/Lucky Game' className="nav-link">
                                {chartDataD}
                                <p>{luckyText15}</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default DisplayChart

