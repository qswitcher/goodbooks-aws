/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = `query GetBook($id: ID!) {
  getBook(id: $id) {
    id
    title
    description
    author {
      id
      firstName
      lastName
      books {
        nextToken
      }
    }
  }
}
`;
export const listBooks = `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      author {
        id
        firstName
        lastName
      }
    }
    nextToken
  }
}
`;
export const getAuthor = `query GetAuthor($id: ID!) {
  getAuthor(id: $id) {
    id
    firstName
    lastName
    books {
      items {
        id
        title
        description
      }
      nextToken
    }
  }
}
`;
export const listAuthors = `query ListAuthors(
  $filter: ModelAuthorFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      books {
        nextToken
      }
    }
    nextToken
  }
}
`;
