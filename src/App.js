import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";
import Fof from "./components/Fof";
import Home from "./components/Home";

import "./App.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      "query":"",
      "goHome" : false,
      "data": {}
    }
  }

  changeState = async(key, value) =>{
    if(key === "goHome"){
      await(this.setState({"goHome": value}));
      return;
    }
    if(key === "query"){
      await(this.setState({"query":value}));
      return;
    }
    if(key === "data"){
      await(this.setState({"data":value}));
      return;
    }
  }

  render(){
    if(this.state.goHome){
      this.changeState("goHome",false);
      return(
        <Router>
          <Redirect to = {"/Veganalysis/"}/>
        </Router>
      )
    }
    if(this.state.query!==""){
      this.changeState("query","");
      return(
        <Router>
          <Redirect to={"/Veganalysis/search/"+this.state.query}/>
        </Router>
      )
    }
    return(
      <div className = "container">
        <Header changeStateFn = {this.changeState} />
        <SearchBar changeStateFn = {this.changeState}/>

        <Router>
          <Switch>
            <Route exact path = "/Veganalysis/" component = {Home}/>
            <Route exact path = "/Veganalysis/search/:query" render = {(props) => <RecipeList {...props}/>} />
            <Route exact path = "/Veganalysis/recipe/:id" render = {(props) => <Recipe {...props}/>} />
            <Route component = {Fof}/>
          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;
