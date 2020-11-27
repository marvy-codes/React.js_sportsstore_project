// The redux package provides a createStore function sets up a new data store using a reducer...

import { createStore, applyMiddleware } from "redux";
import { ShopReducer } from "./ShopReducer"; 
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware";

export const SportsStoreDataStore 
    = createStore(CommonReducer(ShopReducer, CartReducer), 
        applyMiddleware(asyncActions));


// applyMiddleware is used to wrap the middleware so that it recieves the actions, and the result is passed as 
// an argument to the createStore function which creates data store, the asyncActions function will be able
// to inspect all the above actions sent to the datastore and seamlessly deal with those with a Promise payload.

