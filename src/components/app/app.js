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
                {name: 'Simon K.', salary: 1500, increase: false, rise: true,  id: 1},
                {name: 'Enrico B.', salary: 200, increase: false, rise: false,  id: 2},
                {name: 'Ralf D.', salary: 100, increase: false, rise: false,  id: 3}
            ],
            temp: '',
            filter: 'all'
        }
        this.maxId = 4
        this.onToggleIncrease = this.onToggleIncrease.bind(this)
        this.onToggleRise = this.onToggleRise.bind(this)
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id : this.maxId++
        }
        this.setState(({dataEmployees}) => {
            
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

    onToggleIncrease (id) {
        this.setState(({dataEmployees}) => {
            const index = dataEmployees.findIndex(item => item.id === id)
            const old = dataEmployees[index]
            const newItem = {...old, increase: !old.increase}
            
            const newArr = [...dataEmployees.slice(0, index), newItem, ...dataEmployees.slice(index + 1)]
            return {
                dataEmployees: newArr
            }
        })
    }

    onToggleRise (id) {
        this.setState(({dataEmployees}) => ({
            dataEmployees: dataEmployees.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item
            })
        }))
        
    }

    searchEmp = (items, temp) => {
        if (temp.length === 0) {
            return items
        }
        
        return items.filter(item => {
            
            return item.name.indexOf(temp) > -1;
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'more1000' :
                return items.filter(item => item.salary > 1000)
            default: 
                return items
        }
    }

    onUpdateSearch = (temp) => {
        this.setState({temp})
    }
    
    onFilterChoice = (filter) => {
        this.setState({filter})
    }

    render() {
        
        const {dataEmployees, temp, filter} = this.state;
        const totalEmployees = this.state.dataEmployees.length
        const prizeEmployees = this.state.dataEmployees.filter(item => item.increase).length

        const visibleDataEmployees = this.filterPost(this.searchEmp(dataEmployees, temp), filter);
        
        
        return (
            <div className="app">
                <AppInfo
                    totalEmployees = {totalEmployees}
                    prizeEmployees = {prizeEmployees}
                />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter 
                    filter = {filter} 
                    
                    onFilterChoice = {this.onFilterChoice}/>
                </div>
                <EmployersList 
                    data = {visibleDataEmployees}
                    onDelete = {this.deleteItem}
                    onToggleIncrease = {this.onToggleIncrease}
                    onToggleRise = {this.onToggleRise}
                />
                <EmployeesAddForm
                data = {this.state.dataEmployees}
                onAdd = {this.addItem}
                
                />
            </div>
        )}
    }
export default App;