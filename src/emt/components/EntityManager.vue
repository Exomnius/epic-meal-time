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
    <h2 :style="theme.header">Entity Manager</h2>
    <div>
      <div class="form">
        <div class="inputRow">
          <label class="inputLabel">Search id:</label>
          <input
            class="input"
            v-model="id"
          />
        </div>
        <div class="actionRow">
          <button class="action" v-on:click="getById()">search</button>
        </div>
      </div>
    </div>
    <div>
      <div class="form">
        <div class="inputRow" v-for="field in fields" v-bind:key="field.name">
          <div v-if="field.type === 'string'">
            <label class="inputLabel">{{field.label || field.name}}</label>
            <input
              class="input"
              v-model="entity[field.name]"
              v-bind:disabled="field.disabled"
            />
          </div>
          <div class="lineBreak" v-if="field.type === 'lineBreak'"></div>
        </div>
        <div class="actionRow">
          <button class="action" v-on:click="reset()">Reset</button>
          <button class="action" v-on:click="create()">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EmtTheme from "../EmtTheme";

  import AmplifyStore from '../../store/store'

  import {CreateEntity, GetEntityById} from './persist/graphqlActions';

  export default {
    name: 'EntityManager',
    data() {
      return {
        theme: EmtTheme || {},
        id: '',
        entity: {},
        actions: {
          get: GetEntityById,
          create: CreateEntity
        },
        fields: [
          {type: 'string', name: 'id', label: 'Id', disabled: true},
          {type: 'string', name: 'description', label: 'Description', disabled: false}
        ]
      }
    },
    created() {
    },
    computed: {
      userId: function () {
        return AmplifyStore.state.userId;
      }
    },
    methods: {
      getById() {
        this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.get, {id: this.id}))
          .then((res) => {
            this.entity = res.data.getEntity;
          })
          .catch(e => console.log(e));
      },
      create() {
        const description = this.entity.description;
        this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.create, {description}))
          .then((res) => {
            this.entity = res.data.getEntity;
          })
          .catch(e => console.log(e));
      },
      reset() {
        this.entity = null;
      }
    }
  }
</script>
