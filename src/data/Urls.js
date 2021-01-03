// Projects often require different URLs in productin and development.
// Added this file to avoid hard-coding the URLs into individual javascript files.

import { DataTypes } from "./Types";

// const protocol = "http";
// const hostname = "localhost";
// const port = 3500;

export const RestUrls = {
    [DataTypes.PRODUCTS]: `/api/products`,
    [DataTypes.CATEGORIES]: `/api/categories`,
    [DataTypes.ORDERS]: `/api/orders`
}

export const GraphQlUrl = `/graphql`;
// GraphQL requires only one URL, unlike REST,it does not use the URL or HTTP method to describe an operation

export const authUrl = `/login`;