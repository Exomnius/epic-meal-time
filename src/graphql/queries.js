// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEntity = `query GetEntity($id: ID!) {
  getEntity(id: $id) {
    id
    description
  }
}
`;
export const listEntitys = `query ListEntitys(
  $filter: ModelEntityFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getUserEntity = `query GetUserEntity($id: ID!) {
  getUserEntity(id: $id) {
    id
    userId {
      id
      name
    }
    entityId {
      id
      description
    }
    result
  }
}
`;
export const listUserEntitys = `query ListUserEntitys(
  $filter: ModelUserEntityFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserEntitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId {
        id
        name
      }
      entityId {
        id
        description
      }
      result
    }
    nextToken
  }
}
`;
