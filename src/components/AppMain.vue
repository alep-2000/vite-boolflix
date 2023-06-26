<script>
import { store } from '../components/data/store'
import AppCardFilms from '../components/AppCardFilms.vue';
import AppCardSeries from '../components/AppCardSeries.vue';


export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppCardFilms,
        AppCardSeries
    }
}
</script>

<template>
    <div v-for="(film, index) in store.films" :key="index">
        <AppCardFilms :myfilms="film" />
    </div>
    <div v-for="(serie, index) in store.series" :key="index">
        <AppCardSeries :myseries="serie" />
    </div>
</template>

<style lang="">
    
</style>