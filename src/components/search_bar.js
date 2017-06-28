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
    }

    render() {

        return (
            <div className="search-bar">
                <input onChange={(event) => this.onChangeSearchBar(event.target.value)} />
                <br />
            </div>

        );
    }

    onChangeSearchBar(value) {

        if (!value) {
            return;
        }
        this.props.onSearchTermChange(value);
    }
}


export default SearchBar;