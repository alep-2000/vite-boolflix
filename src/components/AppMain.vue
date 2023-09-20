<script>
// IMPORT COMPONENTS
import { store } from '../components/data/store'
import AppCardFilms from '../components/AppCardFilms.vue';
import AppCardSeries from '../components/AppCardSeries.vue';


export default {
    data() {
        return {
            // USABLE STORE
            store
        }
    },
    components: {
        // USABLE COMPONENTS 
        AppCardFilms,
        AppCardSeries
    }
}
</script>

<template>
    <!-- MAIN -->
    <div class="container">
        <div class="row">
            <div class="col-12" v-if="store.films != ''">
                <h4 class="color-cb fw-bold mt-3">FILMS</h4>
            </div>
            <!-- CICLI FOR -->
            <div class="col-6 col-md-5 col-lg-4 my-3" v-for="(film, index) in store.films" :key="index">
                <AppCardFilms :myfilms="film" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h4 class="color-cb fw-bold mt-5" v-if="store.series != ''">SERIES</h4>
            </div>
            <div class="col-6 col-md-5 col-lg-4 my-3" v-for="(serie, index) in store.series" :key="index">
                <AppCardSeries :myseries="serie" />
            </div>
        </div>
    </div>
    <!-- END MAIN -->
</template>

<style lang="scss">
.color-cb {
    color: #CB2918;
}
</style>