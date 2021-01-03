import React from "react";

export const AuthContext = React.createContext({
    isAuthenticated: false,
    webToken: null,
    authenticate: (username, password) => {},
    signout: () => {}
})

// The React.createContext method is used to create a context, and the object it receives is used for default values, which is why the authenticate and signout functions are empty.

// The real functionality for a context is provided by a provider component.