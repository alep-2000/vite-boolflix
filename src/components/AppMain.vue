<script>
import { store } from '../components/data/store'
import AppCard from '../components/AppCard.vue';


export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppCard
    }
}
</script>

<template>
    <div v-for="(film, index) in store.films" :key="index">
        <AppCard :myfilms="film" />
    </div>
</template>

<style lang="">
    
</style>