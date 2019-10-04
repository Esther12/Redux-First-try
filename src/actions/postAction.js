import { FETCH_POSTS, NEW_POST} from "./types";
const axios = require("axios");

export const fetchPosts = ()=> dispatch =>{
    console.log("fetching....");
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get'
          })
          .then(res=>{
              console.log(res.data);
              // passing the api value to the dispatch(the type file)
              dispatch({
                type : FETCH_POSTS,
                payload : res.data
            });
          })
    
}