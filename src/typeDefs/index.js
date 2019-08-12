import { gql } from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Author {
    name: String
  }

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: Author
  }

  type Todo {
    id: String!
    title: String!
    done: Boolean!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    authors: [Author]
    todos: [Todo]
  }

  type Mutation {
    toggleTodo(id: String!): Todo
    addTodo(title: String!): Todo
  }
`;

export default typeDefs;
