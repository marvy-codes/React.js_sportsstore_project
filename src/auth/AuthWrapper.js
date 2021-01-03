import React, { Component } from "react";
import { AuthContext } from "./AuthContext";

export const authWrapper = (WrappedComponent) =>
    class extends Component {
        render = () =>
            <AuthContext.Consumer>
                { context =>
                    <WrappedComponent { ...this.props } { ...context } />
                }
            </AuthContext.Consumer>
    }

// The context features rely on a render prop function, which can be difficult to integrate directly into components
// The authWrapper function will allow a component to recieve the features defined by the AuthContext as props
