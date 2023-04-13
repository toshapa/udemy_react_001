import { Component } from 'react'

import './employers-list-item.css';

class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            increase: false,
            upgrade: false
        }
        
        this.onIncrease = this.onIncrease.bind(this);
        this.upgradeUp = this.upgradeUp.bind(this);
    }

    onIncrease() {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    upgradeUp() {
        this.setState(({upgrade}) => ({
            upgrade: !upgrade
        }))
    }


    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, upgrade} = this.state;
        
        let classNames = "list-group-item d-flex justify-content-between"
    if (increase) {
        classNames += ' increase'
    }
        
    if (upgrade) {
        classNames += ' like'
    }

    return (
        <li className = {classNames}>
            <span 
                className="list-group-item-label"
                onClick={this.upgradeUp}>
                    {name}
            </span>

            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={this.onIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                        >
                        <i className="fas fa-trash"></i>
                </button>
                <i className= 'fas fa-star like' ></i>
            </div>
        </li>
    )}
}

export default EmployersListItem;