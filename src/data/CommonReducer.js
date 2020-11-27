// BY default redux data store uses only one reducer,but it is easy to combine multiple
// reducers to suit your project.

// There is built-in support for dividing responsibilities for data store between multiple reducers
// but it splits up data so each reducer can see only part of the model.

// This component allows each reducer to have acces to the compplete data store.

export const CommonReducer = (...reducers) => (storeData, action) => {
    for (let i = 0; i < reducers.length; i++ ) {
        let newStore = reducers[i](storeData, action);
        if (newStore !== storeData) {
            return newStore;
        }
    }    
    return storeData;
}
