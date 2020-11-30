import React from 'react';

import './every-item.css';

const EveryItem = ({plus, value, onDeleted}) => {

    const label = plus  ? `+${value}` :  `-${value}`;
    const clazz = plus  ? "minus" : "plus";

    return (
        <span className="every-item">
            <span className={clazz}>{`${label}тг`}</span>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted} >
            <i className="fa fa-trash-o" />
            </button>
        </span> 
    )
}

export default EveryItem;