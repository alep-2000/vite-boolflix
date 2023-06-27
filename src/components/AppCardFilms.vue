<script>
import { store } from './data/store';
import { hasFlag } from 'country-flag-icons';

export default {
    data() {
        return {
            store,
            hasFlag
        }
    },
    props: {
        myfilms: Object,
    }
}
</script>

<template>
    <div>
        {{ myfilms.title }}
        {{ myfilms.original_title }}
        <div>
            <img :src="`https://image.tmdb.org/t/p/w342${myfilms.poster_path}`" alt="">
        </div>
        <div>
            <img class="img-flag"
                :src="`../../node_modules/country-flag-icons/3x2/${myfilms.original_language.toUpperCase()}.svg`" />
        </div>
        <!-- <div>
            <i class=" fa-regular fa-star"></i>
        </div> -->
        {{ myfilms.vote_average }}
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.img-flag {
    width: $width;
}
</style>