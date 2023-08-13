const { gql } = require('apollo-server-express');


const typeDefs = gql`

  type Item {
    name : String!
    price : Float!
    inStock : Boolean!
    id: ID!
  }

  type Customer {
    name : String!
    id: ID!
    contact : String!
  }

  type Supplier {
    id: ID!
    name: String!
    products: [Item!]!
  }

  type ItemSale {
    id: ID!
    item: Item!
    customer: Customer!
    quantity: Int!
    totalPrice: Float!
    saleDate: String!
    onCredit : Boolean
    credit : Float
    debit : Float
  }

  type Query {
    hello: String
    getItem(id:ID!) : Item!
  }
  type Mutation {
    hello(name:String!): String 
    createItem(name:String!, price : Float!, inStock : Boolean!, id : ID!) : Item!
  }
`;

module.exports = typeDefs