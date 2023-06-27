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
    <div class="container">
        <div class="row">
            <div class="col-6 col-md-5 col-lg-4 my-3" v-for="(film, index) in store.films" :key="index">
                <AppCardFilms :myfilms="film" />
            </div>
        </div>
        <div class="row">
            <div class="col-6 col-md-5 col-lg-4 my-3" v-for="(serie, index) in store.series" :key="index">
                <AppCardSeries :myseries="serie" />
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>