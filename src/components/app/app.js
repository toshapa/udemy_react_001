
import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
// import EmployersListItem from '../employers-list-item/employers-list-item';
import EmployersList from '../employers-list/employers-list';


function App () {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList/>
        </div>
    )
}

export default App;