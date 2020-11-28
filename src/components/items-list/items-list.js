import React, { Component } from 'react';

import './items-list.css';
import EveryItem from '../every-item';

export default class ItemsList extends Component {

    render() {
        const {money, onDeleted} = this.props;

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
}