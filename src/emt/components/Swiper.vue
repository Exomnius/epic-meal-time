<template>
  <div :style="theme.container">
    <entity-card image="http://placekitten.com/400/400" :description="entity.description" />

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
  import {GetRandomEntity} from './persist/graphqlActions';
  import EntityCard from './EntityCard';
  import Vue from 'vue'
  import {Logger} from 'aws-amplify'
  import {JS} from 'fsts'
  import EmtTheme from "../EmtTheme";
  import EntityCard from './EntityCard';
  import AmplifyStore from '../../store/store'

  import {GetRandomEntity, GetUserEntitiesByUserId, GetAllEntities} from './persist/graphqlActions';

  Vue.component('entity-card', EntityCard)

  export default {
    name: 'Swiper',
    data() {
      return {
        theme: EmtTheme || {},
        entity: undefined,
        actions: {
          get: GetRandomEntity,
          getAlreadyResponded: GetUserEntitiesByUserId,
          getAllEntities: GetAllEntities,
          createResult: CreateEntityUserResult
        },
      }
    },
    created() {
      this.getRandom("foo");
    },
    computed: {
      userId: function () {
        return AmplifyStore.state.userId
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
            console.log(random);
          });
      },
      accept() {
        this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.createResult, {
          entityId: this.entity.id,
          userId: this.userId,
          result: true
        }))
      },
      decline() {
        this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.createResult, {
          entityId: this.entity.id,
          userId: this.userId,
          result: false
        }))
      }
    }
  };
</script>
