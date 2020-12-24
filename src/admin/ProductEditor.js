import React, { Component } from "react";
import { Query } from "react-apollo";
import { ProductCreator } from "./ProductCreator";
import { product } from "./clientQueries";

export class ProductEditor extends Component {

    render = () =>
        <Query query={ product } variables={ {id: this.props.match.params.id} } >
            { ({ loading, data }) => {
                if (!loading) {
                    return <ProductCreator {...this.props } product={data.product}
                        mode="edit" />
                }
                return null;
            }}
        </Query>
}

// The ProducCreator component will do double duty in the sportssstore application, when used on it's own will present the administrator with an empty form that will be send to the storeProduct mutation, when used by PRoductEditor component, will show details of an existing product and send the form data to the updateProduct mutation