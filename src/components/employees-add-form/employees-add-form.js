import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(event) {
        
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    addNewEmployees = () => {
        return this.state
    }

    submit = (event) => {
        event.preventDefault()
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
        
    }

    render () {
        
        const {name, salary} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.submit}
                    className="add-form d-flex">
                    <input type="text"
                        required
                        className="form-control new-post-label"
                        placeholder="How It`s Employees Name?"
                        name = "name"
                        value={name}
                        onChange = {this.onValueChange} />
                    <input type="number"
                        required
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        name = 'salary'
                        value={salary}
                        onChange={this.onValueChange} />
                    <button type="submit"
                            className="btn btn-outline-light"
                            // onClick = {this.addNewEmployees}
                            >Add</button>
                </form>
            </div>
        )
    }
}


export default EmployeesAddForm;