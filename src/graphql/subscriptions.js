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
