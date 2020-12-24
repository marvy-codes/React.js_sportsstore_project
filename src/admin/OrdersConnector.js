// The rgaphql function ( a couterpart to the connect and withRouter functions)
// The function connects a component to the GraphQL features by creating a hihgher-order component
// Providing features to a component

// This component creates a connecting between OrdersTable component and the query

import { graphql, compose } from "react-apollo";
import { ordersSummaryQuery } from "./clientQueries";
import { OrdersTable } from "./OrdersTable";
import { shipOrder } from "./clientMutations"

const vars = {
    onlyShipped: false, page: 1, pageSize: 10, sort: "id"
}

export const OrdersConnector = compose(
    graphql(ordersSummaryQuery, 
        {    
            options: (props) => ({ variables: vars }),
            props: ({data: { loading, orders, refetch }}) => ({
                totalSize: loading ? 0 : orders.totalSize,
                orders: loading ? []: orders.orders,
                currentPage: vars.page,
                pageCount: loading ? 0 : Math.ceil(orders.totalSize / vars.pageSize),
                
                navigateToPage: (page) => { vars.page = Number(page); refetch(vars)},
                pageSize: vars.pageSize,
                setPageSize: (size) => { vars.pageSize = Number(size); refetch(vars)},
                sortKey: vars.sort,
                setSortProperty: (key) => { vars.sort = key; refetch(vars)},
            })
        }
    ),
    graphql(shipOrder, {
        props: ({ mutate }) => ({
            toggleShipped: (id, shipped) => mutate({ variables: {id, shipped}})
        })
    })
)( OrdersTable )

