// Creating the Data Store Action and Action creators.
// Redux data stores separate reading data from the operations that change it.
// Actions are objects that are sent to the data store to make changes to the data it contains.

// Listing the data types in the store and the set of actions that can be performed on them.


export const DataTypes = {
    PRODUCTS: "products",
    CATEGORIES: "categories"
} // Types of data in store

export const ActionTypes = {
    DATA_LOAD: "data_load",
    DATA_SET_SORT_PROPERTY: "data_set_sort",
    DATA_SET_PAGESIZE: "data_set_pagesize",
    CART_ADD: "cart_add",
    CART_UPDATE: "cart_update",
    CART_REMOVE: "cart_delete",
    CART_CLEAR: "cart_clear"
} // Actions that can be performed on them

// You can define action creators and reducers for different parts of the application
// in the same file, but breaking them into separate files can make development easier, especially in large projets.
