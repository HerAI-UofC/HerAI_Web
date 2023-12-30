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
    }
  }
`;
