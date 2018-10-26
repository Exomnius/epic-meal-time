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

  Vue.component('entity-card', EntityCard)

  export default {
    name: 'Swiper',
    data() {
      return {
        theme: EmtTheme || {},
        entity: undefined,
        actions: {
          get: GetRandomEntity,
          createResult: CreateEntityUserResult
        }
      };
    },
    computed: {
      userId: function() { return AmplifyStore.state.userId }
    },
    created() {
      this.getRandom();
    },
    methods: {
      getRandom() {
        this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.get, {}))
          .then((res) => {
            this.entities = res || undefined;
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
