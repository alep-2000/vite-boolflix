<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCard from './components/AppCard.vue';
import axios from 'axios';
import { store } from './components/data/store'

export default {
  components: {
    AppHeader,
    AppMain,
    AppCard
  },
  data() {
    return {
      store
    }
  }

}
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/variables.scss' as *;
@use './style/mixins.scss' as *;
</style>