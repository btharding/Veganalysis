import React from 'react';
import {toTitleCase} from "../Helpers";
import {flagged} from '../flaggedFoods';
import {alternatives} from '../alternatives';

class Ingredient extends React.Component{
  constructor(props){
    super(props);
    //By default, an ingredient is vegan, and therefore has no alternatives.
    this.vegan = true;
    this.alternative = {};

    if(this.props.veganRecipe === false){

      let names = this.props.details.name.split(" ");
      this.findAlternative(names);
      for(let i = 0; i < names.length; i++){
        if(flagged.indexOf(names[i])!==-1){
          this.vegan = false;
          break;
        }
      }
    }
  }
  render(){
    return(
      <p className = {"Name" in this.alternative ? "non-vegan" : ""}>{
        toTitleCase(this.props.details.measures.us.amount +" " +this.props.details.measures.us.unitLong +" "+ this.props.details.name)
        +
        ("Name" in this.alternative ? " | Suggested substitution " + this.alternative.Name : "")
      }</p>
    );
  }

  findAlternative = (names) => {
    //Working backwards, search through each word in the name
    for(let i = names.length-1; i >= 0; i-- ){
      //Find alternatives
      let x = alternatives.findIndex(e => e.Name === names[i]);
      //If an alternative is found
      if(x !== -1){
        this.alternative = alternatives[x].Substitute;
        this.props.addToInitCarbon(alternatives[x].Carbon * this.props.details.measures.metric.amount);
        this.props.addToSubCarbon(alternatives[x].Substitute.Carbon * this.props.details.measures.metric.amount);
        break;
      }
    }
  }

}

export default Ingredient;
