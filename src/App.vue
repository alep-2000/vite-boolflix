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
  props: {
    myfilms: Object,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchFilms() {
      let myUrl = store.apiUrl
      let myUrlSeries = store.apiUrlSeries;


      if (store.name !== '') {
        myUrl += `&query=${store.name}`
        myUrlSeries += `&query= ${store.name}`
      }

      axios.get(myUrl).then((results) => {
        store.films = results.data.results
      })

      axios.get(myUrlSeries).then((results) => {
        store.series = results.data.results
      })
    },
    vote() {
      let calculate_vote = Math.cell(myfilms.vote_average / 2)
      return calculate_vote
    }
  }

}
</script>

<template>
  <div>
    <AppHeader @search="searchFilms" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/variables.scss' as *;
@use './style/mixins.scss' as *;
</style>