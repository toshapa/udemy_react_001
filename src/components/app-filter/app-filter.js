import './app-filter.css'


const AppFilter = (props) => {

    const btnsData = [
        {name: 'all', label : 'All Employees'},
        {name: 'rise', label : 'Salary Increase'},
        {name: 'more1000', label : ' More then 1000$'}
    ]

    const btns = btnsData.map(({name, label}) => {
        
        const active = props.filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button 
            className = {`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterChoice(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}

export default AppFilter;