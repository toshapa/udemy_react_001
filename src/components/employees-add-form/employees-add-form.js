


const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="How it`s employees name?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary in $?" />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}