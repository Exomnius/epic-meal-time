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


export {
  GetRandomEntity,
  GetUserEntitiesByUserId,
  GetAllEntities
}
