

const GetRandomEntity = `query {
  listEntitys(limit:1) {
    items {
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
  GetRandomEntity,
  GetEntityById,
  CreateEntity
}
