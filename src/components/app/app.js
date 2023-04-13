import { Component } from 'react';


import './app.css'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
// import EmployersListItem from '../employers-list-item/employers-list-item';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataEmployees: [
                {name: 'Simon K.', salary: 1500, increase: false, upgrade: false, id: 1},
                {name: 'Enrico B.', salary: 2130, increase: false, upgrade: false, id: 2},
                {name: 'Ralf D.', salary: 100, increase: true, upgrade: true, id: 3}
            ]
        }
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
                <EmployeesAddForm/>
            </div>
        )}
    }

export default App;