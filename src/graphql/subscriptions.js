/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
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
export const onUpdateBook = `subscription OnUpdateBook {
  onUpdateBook {
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
export const onDeleteBook = `subscription OnDeleteBook {
  onDeleteBook {
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
export const onCreateAuthor = `subscription OnCreateAuthor {
  onCreateAuthor {
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
export const onUpdateAuthor = `subscription OnUpdateAuthor {
  onUpdateAuthor {
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
export const onDeleteAuthor = `subscription OnDeleteAuthor {
  onDeleteAuthor {
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
