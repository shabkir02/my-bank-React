import React from 'react';

import './app-header.css';

const AppHeader = ({calcPlus, calcMinus}) => {

    return (
        <div className="app-header">
            <div className="card text-white bg-success mb-3">
                <div className="card-header">Все доходы</div>
                <div className="card-body">
                    <h5 className="card-title">{`+${calcPlus}`}</h5>
                </div>
            </div>
            <div className="card text-white bg-danger mb-3">
                <div className="card-header">Все расходы</div>
                <div className="card-body">
                    <h5 className="card-title">{`-${calcMinus}`}</h5>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;