/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = `mutation CreateBook($input: CreateBookInput!) {
  createBook(input: $input) {
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
export const updateBook = `mutation UpdateBook($input: UpdateBookInput!) {
  updateBook(input: $input) {
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
export const deleteBook = `mutation DeleteBook($input: DeleteBookInput!) {
  deleteBook(input: $input) {
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
export const createAuthor = `mutation CreateAuthor($input: CreateAuthorInput!) {
  createAuthor(input: $input) {
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
export const updateAuthor = `mutation UpdateAuthor($input: UpdateAuthorInput!) {
  updateAuthor(input: $input) {
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
export const deleteAuthor = `mutation DeleteAuthor($input: DeleteAuthorInput!) {
  deleteAuthor(input: $input) {
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
