import React from 'react';
import {getApiKey} from './apiKey';

export function getApiQueryPath(url, query){
  let key = getApiKey();
  return "https://api.spoonacular.com/"+url+"?apiKey="+key+"&"+query;
}

export function getApiError(error){
  if(error.code === 401){
    //Incorrect key
    console.log(error);
    return <h1>Error - Contact admin. Error code 401</h1>
  }else if(error.code === 0){
    //Quota used up
    console.log(error);
    return <h1>Error - Contact admin. Error code 0</h1>
  }else if(error.code === 402){
    //Quota used up
    console.log(error);
    return <h1>Error - Contact admin. Error code 402</h1>
  }else{
    //Other errors shouldn't occur
    console.log(error);
    return <h1>{error.code} Error - {error.message}</h1>
  }
}

export function toTitleCase(text){
  let split = text.split(" ");
  let out = "";
  for(let i = 0; i < split.length; i++){
    out += split[i].substr(0,1).toUpperCase() + split[i].slice(1).toLowerCase() + " ";
  }
  out = out.slice(0,-1);
  return out;
}
