import './app-info.css'


const AppInfo = (props) => {
    const {totalEmployees, prizeEmployees} = props
    return (
        <div className="app-info">
            <h1>Employee Accounting In Company: {}</h1>
            <h2>Total Employees: {totalEmployees}</h2>
            <h3>The Prize Will Be Given To: {prizeEmployees}</h3>
        </div>
    )
}

export default AppInfo;