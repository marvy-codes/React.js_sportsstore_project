// Defining queries separately from connector components
// GraphQL queries are defined as javascript string literals in the client application
// The client-side query has to be defined before data can be retrived from the server


import gql from "graphql-tag";

export const ordersSummaryQuery = gql`
    query($onlyShipped: Boolean, $page:Int, $pageSize:Int, $sort:String) {
        orders(onlyUnshipped: $onlyShipped) {
            totalSize,
        orders(page: $page, pageSize: $pageSize, sort: $sort) {
            id, name, email, shipped
            products {
                quantity, product { price }
            }
        }
    }
}`

export const productsList = gql`
    query($page: Int, $pageSize: Int, $sort: String) {
        products {
            totalSize,
            products(page: $page, pageSize: $pageSize, sort: $sort) {
                id, name, category, price
            }
        }
    }`

export const product = gql`
    query($id: ID!) {
        product(id: $id) {
            id, name, description, category, price
        }
    }`
    