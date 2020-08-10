import gql from "graphql-tag";

export const GET_SEARCH_PRODUCT = gql`
  query GetSearchProduct {
     products @client {
        _id
        brand
        description
        id
        image
        price
     }
     disccountAmount @client
     sentence @client
     numberProducts @client
  }
`;