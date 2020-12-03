// HTTP requests sent by js are performed asynchronously, and it does not fit well with Redux dara store
// Redux data stores can be extended to support asynchronous ops using a middleware function
// it inspects the actions that are sent to the data stores and alters them b4 they are processed.

// This middleware wwait until the promise is resolved and then pass on the acion using the outcome of the promise as payload

const isPromise = (payload) => 
    (typeof(payload) === "object" || typeof(payload) === "function")
        && typeof(payload.then) === "function";

export const asyncActions = () => (next) => (action) => {
    if(isPromise(action.payload)) {
        action.payload.then(result => next({...action, payload: result}));
    } else {
        next(action)
    }
}

// actions whose payload are not a promise are passed on immediately
