<template>
  <div>
    <div :style="theme.image">
      <img :src="image"/>
    </div>
    <div :style="description">
      {{description}}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import EmtTheme from '../EmtTheme';

  export default {
    name: 'EntityCard',
    props: ['image', 'description'],
    data () {
      return {
        theme: EmtTheme || {}
      }
    },
  };
</script>
