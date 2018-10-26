// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEntity = `mutation CreateEntity($input: CreateEntityInput!) {
  createEntity(input: $input) {
    id
    description
  }
}
`;
export const updateEntity = `mutation UpdateEntity($input: UpdateEntityInput!) {
  updateEntity(input: $input) {
    id
    description
  }
}
`;
export const deleteEntity = `mutation DeleteEntity($input: DeleteEntityInput!) {
  deleteEntity(input: $input) {
    id
    description
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
  }
}
`;
export const createUserEntity = `mutation CreateUserEntity($input: CreateUserEntityInput!) {
  createUserEntity(input: $input) {
    id
    userId
    entityId
    result
  }
}
`;
export const updateUserEntity = `mutation UpdateUserEntity($input: UpdateUserEntityInput!) {
  updateUserEntity(input: $input) {
    id
    userId
    entityId
    result
  }
}
`;
export const deleteUserEntity = `mutation DeleteUserEntity($input: DeleteUserEntityInput!) {
  deleteUserEntity(input: $input) {
    id
    userId
    entityId
    result
  }
}
`;
