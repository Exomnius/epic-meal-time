

const GetRandomEntity = `query {
  listEntitys(limit:1) {
    items {
      description
    }
  }
}`;


export {
  GetRandomEntity
}
