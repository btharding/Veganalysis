import React from 'react';
import Ingredient from "./Ingredient";
import {getApiQueryPath, getApiError, toTitleCase} from "../Helpers";

class Recipe extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      "id": this.props.match.params.id,
      "loading":true,
      "result":{},
      "initCarbon": 0,
      "subCarbon": 0,
    }
  }

  componentDidMount = async() =>{
    await(this.apiRecipeSearch());
  }

  apiRecipeSearch = async () =>{
    let path = getApiQueryPath("recipes/"+this.state.id+"/information", "");
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

  addToInitCarbon = async(kg) =>{
    let current = this.state.initCarbon;
    await(this.setState({
      "initCarbon": current + kg
    }));
  }
  addToSubCarbon = async(kg) =>{
    let current = this.state.subCarbon;
    await(this.setState({
      "subCarbon": current + kg
    }));
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
    if(Object.keys(this.state.result).length > 0){
      //put main return call
      let carbonDeficitMessage = "";
      if(this.state.result.vegan === false){
        if(this.state.initCarbon > 0){
          let kgDifference = (this.state.initCarbon-this.state.subCarbon);
          carbonDeficitMessage = ((kgDifference/this.state.initCarbon)*100).toString().slice(0,5)+ "% (" + (kgDifference*1000).toString().slice(0,5)+"g) CO2 equivalent greenhouse gas decrease by following the suggested substitutions. This is approximately equivalent to a car driving " + (kgDifference*3.846).toString().slice(0,5) + " miles";
        }
      }

      return(
        <div className = "recipeCard">
          <h1 className = "recipeCardTitle">{toTitleCase(this.state.result.title)}</h1>
          {this.state.result.vegan ? <h3 className = "recipeCardIsVegan">This recipe is already vegan!</h3> : ""}
          <div className = "recipeCardCarbonDecrease">{carbonDeficitMessage}</div>
          <ul className = "recipeCardDetails">
            <li>Cooking Time: {this.state.result.readyInMinutes} mins</li>
            <li>Servings : {this.state.result.servings}</li>
          </ul>
          <h2 className = "recipeCardIngredient">Ingredients</h2>
          <ul className = "recipeCardIngredient">
            {this.state.result.extendedIngredients.map((item,i)=>{return(
              <li key = {i}><Ingredient addToInitCarbon = {this.addToInitCarbon} addToSubCarbon = {this.addToSubCarbon} veganRecipe = {this.state.result.vegan ? true : false} details = {item}/></li>
            )})}
          </ul>
          <h2 className = "recipeCardMethod">Method</h2>
          <div className = "recipeCardMethod">
            {this.state.result.analyzedInstructions.length > 0 ?
              this.state.result.analyzedInstructions[0].steps.map((item, i)=>{return(
                <p key = {i}>{item.step}</p>
              )})
              :
              this.state.result.instructions.split(". ").map((item,i)=>{return(
                <p key = {i}>{item}</p>
              )})
            }
          </div>

        </div>
      );
    }
    return(
      <div className = "container">
        <h1>There is no recipe with the ID {this.state.id}</h1>
      </div>
    )
  }
}

export default Recipe;
