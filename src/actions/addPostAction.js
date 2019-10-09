import {NEW_POST} from "./types";
const axios = require("axios");

export const addPostAction = data => dispatch =>{
    console.log("fetching....");
    axios.post("https://jsonplaceholder.typicode.com/posts", data)
          .then(post=>{
              // passing the api value to the dispatch(the type file)
              dispatch({
                type : NEW_POST,
                addNew : post
            });
          })
    
}