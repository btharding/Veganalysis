import React from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";
import {getApiQueryPath, getApiError} from "../Helpers";

class RecipeList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      "query": this.props.match.params.query,
      "loading": true,
      "result":{}
    }
  }
  componentDidMount = async() =>{
    await(this.apiRecipeSearch());
  }

  apiRecipeSearch = async () =>{
    // let path = this.props.getApiQueryPath("recipes/complexSearch", "&number=10&instructionsRequired=true&query='"+this.state.query+"'");
    let path = getApiQueryPath("recipes/complexSearch", "&number=10&instructionsRequired=true&query='"+this.state.query+"'");
    //Make API call
    await(this.setState({"loading":true}));
    await(fetch(path,
      {method: "GET",
      headers:
        {"Content-Type": "application/json"}
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            "result":result,
            "loading": false
          })
        }
      ))
  }

  render(){
    if(this.state.loading){
      return(
        <div className = "loader"></div>
      )
    }

    if(this.state.result.status){
      return getApiError(this.state.result);
    }
    if(this.state.result.results.length > 0){
      return(
        <div className = "container">
          <h1>Results for {this.state.query}</h1>
          {this.state.result.results.map((item, i)=>{return(
              <div key = {i} className = "recipeResult" recipeid = {item.id}>
                <Link to = {{
                  pathname: `Veganalysis/recipe/${item.id}`,
                  state: {
                    getApiError : this.props.getApiError,
                    getApiQueryPath : this.props.getApiQueryPath
                  }
                }}>
                  <h2>{item.title}</h2>
                  <img src = {item.image} alt = {"Image of " + item.title} />
                  <div className = "imageHider"></div>
                </Link>
              </div>
          )})}
        </div>
      )
    }
    return(
      <div className = "container">
        <h1>No results for {this.state.query}</h1>
      </div>
    )
  }
}

export default withRouter(RecipeList);
