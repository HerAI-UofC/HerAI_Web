/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
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
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
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
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
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
export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
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
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $input: UpdateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    updateCandidate(input: $input, condition: $condition) {
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
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $input: DeleteCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    deleteCandidate(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
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
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
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
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
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
export const createFavourite = /* GraphQL */ `
  mutation CreateFavourite(
    $input: CreateFavouriteInput!
    $condition: ModelFavouriteConditionInput
  ) {
    createFavourite(input: $input, condition: $condition) {
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
export const updateFavourite = /* GraphQL */ `
  mutation UpdateFavourite(
    $input: UpdateFavouriteInput!
    $condition: ModelFavouriteConditionInput
  ) {
    updateFavourite(input: $input, condition: $condition) {
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
export const deleteFavourite = /* GraphQL */ `
  mutation DeleteFavourite(
    $input: DeleteFavouriteInput!
    $condition: ModelFavouriteConditionInput
  ) {
    deleteFavourite(input: $input, condition: $condition) {
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
export const createContactMessage = /* GraphQL */ `
  mutation CreateContactMessage(
    $input: CreateContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    createContactMessage(input: $input, condition: $condition) {
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
export const updateContactMessage = /* GraphQL */ `
  mutation UpdateContactMessage(
    $input: UpdateContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    updateContactMessage(input: $input, condition: $condition) {
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
export const deleteContactMessage = /* GraphQL */ `
  mutation DeleteContactMessage(
    $input: DeleteContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    deleteContactMessage(input: $input, condition: $condition) {
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
