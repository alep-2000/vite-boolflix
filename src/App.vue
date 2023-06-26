<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './components/data/store'

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchfilms() {
      let myUrl = store.apiUrl

      if (store.name !== '') {
        myUrl += `&query=${store.name}`
      }

      axios.get(myUrl).then((results) => {
        store.films = results.data.results
      })
    }
  }

}
</script>

<template>
  <div>
    <AppHeader @search="searchfilms" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/variables.scss' as *;
@use './style/mixins.scss' as *;
</style>