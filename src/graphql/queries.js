/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
      id
      title
      location
      date
      isUpcoming
      summary
      description
      videoDescription
      pdfDescription
      presenters
      favourites {
        nextToken
        __typename
      }
      followers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        location
        date
        isUpcoming
        summary
        description
        videoDescription
        pdfDescription
        presenters
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      id
      firstname
      lastname
      message
      number
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        message
        number
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFollower = /* GraphQL */ `
  query GetFollower($id: ID!) {
    getFollower(id: $id) {
      id
      userId
      event {
        id
        title
        location
        date
        isUpcoming
        summary
        description
        videoDescription
        pdfDescription
        presenters
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      eventsFollowersId
      __typename
    }
  }
`;
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        createdAt
        updatedAt
        eventsFollowersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFavourite = /* GraphQL */ `
  query GetFavourite($id: ID!) {
    getFavourite(id: $id) {
      id
      userId
      event {
        id
        title
        location
        date
        isUpcoming
        summary
        description
        videoDescription
        pdfDescription
        presenters
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      eventsFavouritesId
      __typename
    }
  }
`;
export const listFavourites = /* GraphQL */ `
  query ListFavourites(
    $filter: ModelFavouriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavourites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        createdAt
        updatedAt
        eventsFavouritesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContactMessage = /* GraphQL */ `
  query GetContactMessage($id: ID!) {
    getContactMessage(id: $id) {
      id
      firstName
      lastName
      email
      phone
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContactMessages = /* GraphQL */ `
  query ListContactMessages(
    $filter: ModelContactMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        phone
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
