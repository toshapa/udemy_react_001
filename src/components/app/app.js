
import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
// import EmployersListItem from '../employers-list-item/employers-list-item';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


function App () {

    const dataEmployees = [
        {name: 'Simon K.', salary: 1500, increase: false, id: 1},
        {name: 'Enrico B.', salary: 2130, increase: false, id: 2},
        {name: 'Ralf D.', salary: 100, increase: true, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data = {dataEmployees}/>
            
            <EmployeesAddForm/>
        </div>
    )
}

export default App;