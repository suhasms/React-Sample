import React, { Component } from "react";

/* This is functional component
 const SearchBar = () => {
 return (
 <input />
 );
 }
 */

/* This is class based component */
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: this.props.keyVal };
    }

    render() {

        return (
            <div>
                <input onChange={event =>
                    this.setState({ term: event.target.value })
                } />
                <br />
            </div>

        );
    }
}


export default SearchBar;