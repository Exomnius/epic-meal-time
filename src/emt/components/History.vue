<template>
  <div :style="theme.container">
    <div v-for="entity in entities">
      <div>
        {{entity.description}}
      </div>
      <div>
        <font-awesome-icon icon="times" @click="removeEntityResult(entity.userEntityId)"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import EmtTheme from '../EmtTheme';
  import AmplifyStore from '../../store/store'
  import {GetUserEntitiesByUserId, GetAllEntities, DeleteUserEntity} from './persist/graphqlActions';

  export default {
    name: 'History',
    data() {
      return {
        theme: EmtTheme || {},
        entities: [],
        actions: {
          getUserEntitiesByUserId: GetUserEntitiesByUserId,
          getAllEntities: GetAllEntities,
          deleteUserEntity: DeleteUserEntity
        },
      }
    },
    created() {
      this.getAll();
    },
    computed: {
      userId: function () {
        return AmplifyStore.state.user.username
      }
    },
    methods: {
      getAll() {
        let results, all;

        const resultsPromise = this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.getUserEntitiesByUserId, {userId: this.userId}))
          .then((res) => {
            results = res.data.listUserEntitys.items;
          });
        const allPromise = this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.getAllEntities, {}))
          .then((res) => {
            all = res.data.listEntitys.items;
          });

        Promise.all([resultsPromise, allPromise]).then(() => {
          const entities = results.map(result => ({
            ...all.find(e => e.id === result.entityId),
            userEntityId: result.id
          }));
          this.entities = entities;
        });
      },
      removeEntityResult(userEntityId) {
        this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.deleteUserEntity, {id: userEntityId}))
          .then(() => {
            this.getAll();
          });
      }
    }
  };
</script>
