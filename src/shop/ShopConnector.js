// Connecting to the Data Store and URL Router

// The shop component and its CategoryNavigation and ProductsChildren need access to the data store.
// This component connect these componenets to the features they require.

import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import  * as ShopActions /*{ loadData, placeOrder }*/ from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import * as CartActions /*{ addToCart, updateCartQuantity, removeFromCart, clearCart }*/
 from "../data/CartActionCreators";
import { CartDetails } from "./CartDetails";
import { DataGetter } from "../data/DataGetter";
import { Checkout } from "./Checkout";
import { Thanks } from "./Thanks";
//import { ProductList } from "./ProductList";

/*
const mapStateToProps = (dataStore) => ({
    ...dataStore
})
*/

const mapDispatchToProps = { ...ShopActions, ...CartActions
    /*
    loadData, 
    addToCart, updateCartQuantity, removeFromCart, clearCart,
    placeOrder
    */
}

/* ***The products will already be filtered by the web service
const filterProducts = (products = [], category) => 
    (!category || category === "All") 
        ? products 
        : products.filter(p => p.category.toLowerCase() === category.toLowerCase());
*/


// The redux package provides the connect function, which is used to link a component to a data store,
// so that its props are either values from the data store or functions that dispatch datastore actions 
// when they are invoked.
export const ShopConnector = connect(/*mapStateToProps*/ds => ds, mapDispatchToProps)(
    class extends Component {

        selectComponent = (routeProps) => {
            const wrap = (Component, Content) => 
                <Component { ...this.props } { ...routeProps}>
                    { Content && wrap(Content)}
                </Component>
            switch (routeProps.match.params.section) {
                case "products":
                    return wrap(DataGetter, Shop);
                case "cart":
                    return wrap(CartDetails);
                case "checkout":
                    return wrap(Checkout);
                case "thanks":
                    return wrap(Thanks);    
                default:
                    return <Redirect to="/shop/products/all/1" />
            }
        }

        render() {
            return <Switch>
                <Redirect from="/shop/products/:category"
                    to="/shop/products/:category/1" exact={ true } />
                <Route path={ "/shop/:section?/:category?/:page?" }
                    render = { routeProps => this.selectComponent(routeProps) } />
            </Switch>           
        }

        componentDidMount = () => {
            this.props.loadData(DataTypes.CATEGORIES);
            //this.props.loadData(DataTypes.PRODUCTS);
        }
    }
)

/*
                <Route path="/shop/products/:category/:page"
                    render={ (routeProps) => 
                        <DataGetter { ...this.props } { ...routeProps } >
                            <Shop { ...this.props } { ...routeProps } />
                        </DataGetter>
                }/>
                
                <Route path="/shop/cart" render={ (routeProps) => 
                        <CartDetails { ...this.props } { ...routeProps }  />} />

                <Route path="/shop/checkout" render={ routeProps =>
                    <Checkout { ...this.props } { ...routeProps } /> } />
                
                <Route path="/shop/thanks" render={ routeProps =>
                    <Thanks { ...this.props } { ...routeProps } /> } />
                                                        
                <Redirect to="/shop/products/all/1" />
*/


// Incorporating URL routing, data store properties, action creators 
// The advantage of consolidating thes features is that the other shopping comonents are simpler to write, maintain and test
// The disadvantage is that consolidition results in code that is hard to read and where errors are likely to arise