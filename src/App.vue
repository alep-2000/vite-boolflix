<script>
// IMPORT COMPONENTS
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './components/data/store'

export default {
  // USABLE COMPONENTS 
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      // USABLE STORE
      store
    }
  },
  methods: {
    // SEARCH FUNCTION
    searchContent() {
      let myUrl = store.apiUrl
      let myUrlSeries = store.apiUrlSeries;


      if (store.name !== '') {
        myUrl += `&query=${store.name}`
        myUrlSeries += `&query= ${store.name}`
      }

      // API CALLS
      axios.get(myUrl).then((results) => {
        store.films = results.data.results
        console.log(results.data.results)
      })

      axios.get(myUrlSeries).then((results) => {
        store.series = results.data.results
        console.log(results.data.results)
      })
    }
  }

}
</script>

<template>
  <div>
    <AppHeader @search="searchContent" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/variables.scss' as *;
@use './style/mixins.scss' as *;
</style>