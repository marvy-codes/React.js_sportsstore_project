import React, { Component } from "react";
import { DataTypes } from "../data/Types";

export class DataGetter extends Component {
 
    render() {
        return <React.Fragment>{ this.props.children }</React.Fragment>
    }
 
    componentDidUpdate = () => this.getData(); 
    componentDidMount = () => this.getData();

    getData = () => {
        const dsData = this.props.products_params || {} ;
        const rtData = {
            _limit: this.props.pageSize || 4,
            _sort: this.props.sortKey || "name",
            _page: this.props.match.params.page || 1,
            category_like: (this.props.match.params.category || "") === "all"
            ? "" : this.props.match.params.category
        }
    
        if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
            this.props.loadData(DataTypes.PRODUCTS, rtData);
        }
    }
} // THIS COMPONENT RECEIVE DETAILS OF THE CURENT ROUTE AAND ITS PARAMETER AND ALSO ACCESS THE DATA STORE

// <React.Fragment> is useful for defining components that provides services to the application but that
// don't present content to the user.
