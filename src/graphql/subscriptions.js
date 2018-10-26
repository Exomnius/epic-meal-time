// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateEntity = `subscription OnCreateEntity {
  onCreateEntity {
    id
    description
  }
}
`;
export const onUpdateEntity = `subscription OnUpdateEntity {
  onUpdateEntity {
    id
    description
  }
}
`;
export const onDeleteEntity = `subscription OnDeleteEntity {
  onDeleteEntity {
    id
    description
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    name
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    name
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    name
  }
}
`;
export const onCreateUserEntity = `subscription OnCreateUserEntity {
  onCreateUserEntity {
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
export const onUpdateUserEntity = `subscription OnUpdateUserEntity {
  onUpdateUserEntity {
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
export const onDeleteUserEntity = `subscription OnDeleteUserEntity {
  onDeleteUserEntity {
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
