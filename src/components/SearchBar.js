import React from 'react';

class SearchBar extends React.Component{

  submit = (e) =>{
    e.preventDefault();
    let query = document.getElementById("searchBar").value;
    document.getElementById("searchBar").blur();
    document.getElementById("searchBar").value = "";
    this.props.changeStateFn("query", query);
  }

  render(){
    return(
      <form autoComplete = "off" className = "searchForm" onSubmit = {(e) => this.submit(e)}>
        <input required type = "text" id = "searchBar" name = "searchBar" placeholder = "Search for a recipe..."/>
        <input id = "submitBtn" type = "submit" value = "Search"/>
      </form>
    )
  }
}

export default SearchBar;
