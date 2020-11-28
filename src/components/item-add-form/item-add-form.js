import React, { Component } from 'react';

import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        value: ''
    }

    valueChange = (e) => {
        
        this.setState({
            value: e.target.value.replace(/[^\d]/g, '')
        })
    }

    onAddPLus = (e) => {
        e.preventDefault();
        if (this.state.value.length === 0) {
            return
        }
        this.props.onAddedPlus(this.state.value);
        this.setState({
            value: ''
        });
    }

    onAddMinus = (e) => {
        e.preventDefault();
        if (this.state.value.length === 0) {
            return
        }
        this.props.onAddedMinus(this.state.value);
        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <form className="item-add-form d-flex">
                <input
                    type="text"
                    maxLength="7"
                    className="form-control"
                    placeholder="Введите значение"
                    onChange={this.valueChange}
                    value={this.state.value} />
                <button 
                    className="btn btn-outline-success"
                    onClick={this.onAddPLus} >Доход</button>
                <button 
                    className="btn btn-outline-danger"
                    onClick={this.onAddMinus} >Расход</button>
            </form>
        )
    }
}