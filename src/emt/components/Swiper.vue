<template>
  <div :style="theme.container">
    <entity-card v-if="nextRandomEntity" image="http://placekitten.com/400/400" :description="nextRandomEntity.description" />

    <div :style="theme.buttons">
      <button v-on:click="accept" :style="theme.button.accept">
        <font-awesome-icon icon="check" size="2x" />
      </button>

      <button v-on:click="decline" :style="theme.button.decline">
        <font-awesome-icon icon="times" size="2x" />
      </button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import EmtTheme from '../EmtTheme';
  import EntityCard from './EntityCard';
  import AmplifyStore from '../../store/store'
  import {GetRandomEntity, GetUserEntitiesByUserId, GetAllEntities, CreateUserEntity} from './persist/graphqlActions';

  Vue.component('entity-card', EntityCard)

  export default {
    name: 'Swiper',
    data() {
      return {
        theme: EmtTheme || {},
        nextRandomEntity: {},
        actions: {
          get: GetRandomEntity,
          getAlreadyResponded: GetUserEntitiesByUserId,
          getAllEntities: GetAllEntities,
          createUserEntity: CreateUserEntity
        },
      }
    },
    created() {
      this.getRandom("foo");
    },
    computed: {
      userId: function () {
        return AmplifyStore.state.user.username
      }
    },
    methods: {
      getRandom(userId) {
        let responded, all;

        const alreadyResponded = this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.getAlreadyResponded, {userId}))
          .then((res) => {
            console.log("alreadyResponded", res);
            responded = res.data.listUserEntitys.items.map(e => e.entityId);
          })
          .catch((e) => {
            console.log(e);
          });

        const allEntities = this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.getAllEntities, {}))
          .then((res) => {
            console.log("all", res);
            all = res.data.listEntitys.items;

          })
          .catch((e) => {
            console.log(e);
          });

        Promise.all([alreadyResponded, allEntities])
          .then(() => {
            const random = all.find((e) => !responded.includes(e.id))
            this.nextRandomEntity = random;
            console.log(random);
          });
      },
      accept() {
        console.log(AmplifyStore)
        this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.createUserEntity, {
          entityId: this.nextRandomEntity.id,
          userId: this.userId,
          result: true
        }))
      },
      decline() {
        this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.createUserEntity, {
          entityId: this.nextRandomEntity.id,
          userId: this.userId,
          result: false
        }))
      }
    }
  };
</script>
