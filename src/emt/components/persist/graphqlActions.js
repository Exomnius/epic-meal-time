

const GetRandomEntity = `query {
  listEntitys(limit:1) {
    items {
      description
    }
  }
}`;

const GetUserEntitiesByUserId = `query GetUserEntitiesByUserId($userId: String) {
  listUserEntitys(filter: {userId: {eq: $userId}}) {
    items {
      id
      entityId
    }
  }
}`;

const GetAllEntities = `query {
  listEntitys {
    items {
      id
      description
    }
  }
}`;

const GetEntityById = `
query($id: ID!){
   getEntity(id: $id) {
    id
    description
  }
}`;

const CreateEntity =
  `mutation createEntity($description: String!) {
   createEntity(input: {description: $description}) {
    id
    description
  }
}`;

const CreateUserEntity = `mutation createUserEntity($entityId: String!, $userId: String!, $result: Boolean!) {
  createUserEntity(input: {entityId: $entityId, userId: $userId, result: $result}) {
    entityId
    userId,
    result
  }
}`;

const DeleteUserEntity = `mutation DeleteUserEntity($id: ID!) {
  deleteUserEntity(input: {id: $id}) {
    id
  }
}
`;

export {
  GetUserEntitiesByUserId,
  GetAllEntities,
  GetRandomEntity,
  GetEntityById,
  CreateEntity,
  CreateUserEntity,
  DeleteUserEntity
}
