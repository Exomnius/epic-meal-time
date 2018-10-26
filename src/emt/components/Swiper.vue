/*
* Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
* the License. A copy of the License is located at
*
*     http://aws.amazon.com/apache2.0/
*
* or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
* CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
* and limitations under the License.
*/

<template>
  <div :style="theme.container">
    <h2 :style="theme.header">Swiper</h2>
    <div v-for="entity in entities">
      {{entity.description}}
    </div>


  </div>
</template>

<script>
  import Vue from 'vue'
  import {Logger} from 'aws-amplify'
  import {JS} from 'fsts'
  import EmtTheme from "../EmtTheme";

  import AmplifyStore from '../../store/store'

  import {GetRandomEntity, GetUserEntitiesByUserId, GetAllEntities} from './persist/graphqlActions';


  export default {
    name: 'Swiper',
    data() {
      return {
        theme: EmtTheme || {},
        entities: '',
        actions: {
          get: GetRandomEntity,
          getAlreadyResponded: GetUserEntitiesByUserId,
          getAllEntities: GetAllEntities
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
      }
    }
  }
</script>
