import { FETCH_POSTS, NEW_POST} from "../actions/types";

const initialState = {
    items : [],
    item : {}
}

export default function(state = initialState, action){
    switch (action.type){
        case FETCH_POSTS : 
           // console.log("Fetcing in the postReducer.js .....")
            return {
                ...state,
                items : action.payload 
            }
        default:
            return state;
    }
}