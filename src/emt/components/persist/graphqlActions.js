

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


export {
  GetUserEntitiesByUserId,
  GetAllEntities,
  GetRandomEntity,
  GetEntityById,
  CreateEntity
}
