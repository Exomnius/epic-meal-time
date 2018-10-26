

const GetRandomEntity = `query {
  listEntitys(limit:1) {
    items {
      description
    }
  }
}`;

const CreateUserEntity = `mutation createUserEntity($entityId!, $userId!, $result: Boolean!) {
  createUserEntity(input: {entityId: $entityId, userId: $userId, result: $result}) {
    entityId
    userId,
    result
  }
}`;


export {
  GetRandomEntity,
  CreateUserEntity
}
