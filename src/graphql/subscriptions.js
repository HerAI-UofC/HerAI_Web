/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onCreateEvents(filter: $filter) {
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
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onUpdateEvents(filter: $filter) {
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
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents($filter: ModelSubscriptionEventsFilterInput) {
    onDeleteEvents(filter: $filter) {
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
export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onCreateCandidate(filter: $filter) {
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
export const onUpdateCandidate = /* GraphQL */ `
  subscription OnUpdateCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onUpdateCandidate(filter: $filter) {
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
export const onDeleteCandidate = /* GraphQL */ `
  subscription OnDeleteCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onDeleteCandidate(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onCreateFollower(filter: $filter) {
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
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onUpdateFollower(filter: $filter) {
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
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onDeleteFollower(filter: $filter) {
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
export const onCreateFavourite = /* GraphQL */ `
  subscription OnCreateFavourite(
    $filter: ModelSubscriptionFavouriteFilterInput
  ) {
    onCreateFavourite(filter: $filter) {
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
export const onUpdateFavourite = /* GraphQL */ `
  subscription OnUpdateFavourite(
    $filter: ModelSubscriptionFavouriteFilterInput
  ) {
    onUpdateFavourite(filter: $filter) {
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
export const onDeleteFavourite = /* GraphQL */ `
  subscription OnDeleteFavourite(
    $filter: ModelSubscriptionFavouriteFilterInput
  ) {
    onDeleteFavourite(filter: $filter) {
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
export const onCreateContactMessage = /* GraphQL */ `
  subscription OnCreateContactMessage(
    $filter: ModelSubscriptionContactMessageFilterInput
  ) {
    onCreateContactMessage(filter: $filter) {
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
export const onUpdateContactMessage = /* GraphQL */ `
  subscription OnUpdateContactMessage(
    $filter: ModelSubscriptionContactMessageFilterInput
  ) {
    onUpdateContactMessage(filter: $filter) {
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
export const onDeleteContactMessage = /* GraphQL */ `
  subscription OnDeleteContactMessage(
    $filter: ModelSubscriptionContactMessageFilterInput
  ) {
    onDeleteContactMessage(filter: $filter) {
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
