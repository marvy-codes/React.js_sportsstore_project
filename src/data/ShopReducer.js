// Actions are processed by data store reducers, which are functions that receive 
// the current contents of the data store and an action object and use them to make changes...

import { ActionTypes } from "./Types";

export const ShopReducer = (storeData, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return { 
                ...storeData, 
                [action.payload.dataType]: action.payload.data,
                [`${action.payload.dataType}_total`]: action.payload.total,
                [`${action.payload.dataType}_params`]: action.payload.params 
            };
        case ActionTypes.DATA_SET_PAGESIZE:
            return { ...storeData, pageSize: action.payload }
            
        case ActionTypes.DATA_SET_SORT_PROPERTY:
            return { ...storeData, sortKey: action.payload }
        default:
            return storeData || {};
    }
}

// Reducers are required to create and return new objects "data" that incorporate any required changes.

/*
placeholder data
types
actioncreator
shopreducer
datastore
*/