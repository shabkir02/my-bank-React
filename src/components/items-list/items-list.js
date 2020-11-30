import React from 'react';

import './items-list.css';
import EveryItem from '../every-item';

const ItemsList = ({money, onDeleted}) => {

    const elements = money.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <EveryItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)} />
            </li>
        )
    })

    return (
        <ul className="items-list">
            {elements}
        </ul>
    )
}

export default ItemsList;