const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the Class model
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    title: String
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    me: User
  }
`;

module.exports = typeDefs;
