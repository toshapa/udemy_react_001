import { Component } from "react";

import "./search-panel.css"


class SearchPanel extends Component  {
    constructor (props) {
        super(props)
        this.state = {
            temp: '',
            filter: ''
        }
    }
    
    onUpdarteSearch = (e) => {
        const temp = e.target.value
        // console.log(this)
        this.setState({temp})
        this.props.onUpdateSearch(temp)
    }

    render () {

        return (
            <input 
            type="text"
            className="form-control search-input"
            placeholder="Find a Employees"
            value={this.state.temp}
            onChange={this.onUpdarteSearch}
            />
        )
    }
      
    
}

export default SearchPanel;