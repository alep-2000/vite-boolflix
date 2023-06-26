<script>
import { store } from './data/store';

export default {
    data() {
        return {
            store
        }
    },
    props: {
        myfilms: Object
    }
}
</script>

<template>
    <div>
        {{ myfilms.title }}
        {{ myfilms.original_title }}
        {{ myfilms.original_language }}
        {{ myfilms.vote_average }}
    </div>
</template>

<style lang="">
    
</style>