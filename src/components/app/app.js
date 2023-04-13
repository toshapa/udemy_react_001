import { Component } from 'react';


import './app.css'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataEmployees: [
                {name: 'Simon K.', salary: 1500, increase: false, id: 1},
                {name: 'Enrico B.', salary: 2130, increase: false, id: 2},
                {name: 'Ralf D.', salary: 100, increase: true, id: 3}
            ]
        }
        this.maxId = 4
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id : this.maxId++
        }
        this.setState(({dataEmployees}) => {
            console.log(dataEmployees)
            const newArr = [...dataEmployees, newItem]
            
            return {
                dataEmployees: newArr
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({dataEmployees}) => {
            return {
                dataEmployees : dataEmployees.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data = {this.state.dataEmployees}
                    onDelete = {this.deleteItem}
                />
                <EmployeesAddForm
                data = {this.state.dataEmployees}
                onAdd = {this.addItem}
                />
            </div>
        )}
    }
export default App;