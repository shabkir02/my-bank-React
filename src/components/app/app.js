import React, { Component } from 'react';

import './app.css';
import AppHeader from '../app-header';
import ItemAddForm from '../item-add-form';
import ItemsList from '../items-list';


export default class App extends Component {

    maxId = 100;

    state = {
        money: [
            {value: '323', plus: false, id: 1},
            {value: '321', plus: true, id: 2},
            {value: '5434', plus: true, id: 3},
            {value: '75534', plus: false, id: 4}
        ]
    }

    calcMoney = (arr) => {
        return arr.reduce((prev, next) => {
            return +prev + +(next.value)
         }, 0);
    }

    calcPlus = () => {
        const arr = this.state.money.filter(item => {
            return item.plus
        });
        return this.calcMoney(arr);
    }

    calcMinus = () => {
        const arr = this.state.money.filter(item => {
            return !item.plus
        });
        return this.calcMoney(arr);
    }

    createNewItem = (value, bool) => {
        return {
            value,
            plus: bool,
            id: this.maxId++,
          }
    }

    onAddedPlus = (value) => {
        const newItem = {
            value,
            plus: true,
            id: this.maxId++
        };

        this.setState(({money}) => {
            const newArr = [...money, newItem]
            return {
                money: newArr
            }
        });
    }

    onAddedMinus = (value) => {
        const newItem = {
            value,
            plus: false,
            id: this.maxId++
        };

        this.setState(({money}) => {
            const newArr = [...money, newItem]
            return {
                money: newArr
            }
        });
    }

    onDeleted = (id) => {
        this.setState(({money}) => {
            const idx = money.findIndex((el) => el.id === id);
            const newArr = [...money.slice(0, idx), ...money.slice(idx + 1)];

            return {
                money: newArr
            }
        })
    }

    render() {
        const {money} = this.state;
        const countPlus = this.calcPlus();
        const countMinus = this.calcMinus();

        return (
            <div className="todo-app">
                <AppHeader 
                    calcPlus={countPlus}
                    calcMinus={countMinus} />
                <ItemAddForm 
                    onAddedPlus={this.onAddedPlus}
                    onAddedMinus={this.onAddedMinus} />
                <ItemsList 
                    money={money}
                    onDeleted={this.onDeleted}/>
            </div>
        )
    }
}