import React from 'react';

class Home extends React.Component{
  render(){
    return(
      <div className = "about">
        <h1>What is Veganalysis?</h1>
        <p className = "big">
        A <u><a href = "https://www.ox.ac.uk/news/2019-10-29-plant-based-foods-are-good-both-health-and-environment" target = "_blank" rel = "noopener noreferrer">study by Oxford University</a></u> concluded that the single most impactful action a person can do to help the environment is to go vegan.<br/><br/>
        Veganalysis aims to do it's part to help the environment by demonstrating how one simple change can have such a dramatic positive impact.<br/><br/>
        Simply search for a recipe, and Veganalysis will suggest simple substitutions to "veganise" the recipe. What's more, Veganalysis will calculate how much Carbon Dioxide Equivalent gas is saved by following the substitutions.
        </p><br/><br/>

        <h3>How was Veganalysis made?</h3>
        <p>
        Veganalysis's MVP was launced after it was made for the Lockdoneathon hackathon in August 2020.<br/>
        It is built using React, HTML, CSS and a sprinkle of vanilla JS.<br/>
        <u><a href = "https://github.com/btharding/Veganalysis" target = "_blank" rel = "noopener noreferrer">View the github repo.</a></u><br/>
        Veganalysis was built by <u><a href = "https://btharding.github.io" target = "_blank" rel = "noopener noreferrer">William Harding.</a></u><br/>
        <b>Disclaimer:</b> Veganalysis is a work in progress, and the data used to inform substitutions and calculations is incomplete, so you may see some non-vegan ingredients that are not flagged / may not have a substitute, or vegan ingredients that have accidentally been flagged as non-vegan.
        </p>
      </div>
    )
  }
}

export default Home;
