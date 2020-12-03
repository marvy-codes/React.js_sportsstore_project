import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../data/ActionCreators";

const mapStateToProps = dataStore => dataStore;
const mapDispatchToProps = { setPageSize, setSortProperty };

const mergeProps = (dataStore, actionCreators, router) => ({
    ...dataStore, ...router, ...actionCreators,
    currentPage: Number(router.match.params.page),
    pageCount: Math.ceil((dataStore.products_total
        | dataStore.setPageSize || 5 )),
    navigateToPage: (page) => router.history
        .push(`/shop/products/${router.match.params.category}/${page}`),
})

export const ProductPageConnector = (PageComponent) => 
    withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent))

// React app complexity often coalesces where dofferent features are combined, which is the connector component in this app
// This code creates a higher-order-component(HOC) which is a function that provides features to another component through it's props

