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
        myseries: Object
    }
}
</script>

<template>
    <div>
        <img class="size" :src="`https://image.tmdb.org/t/p/w342${myseries.poster_path}`" alt="">
    </div>
    <div>
        {{ myseries.name }}
        {{ myseries.original_name }}
        <div>
            <img class="img-flag"
                :src="`../../node_modules/country-flag-icons/3x2/${myseries.original_language.toUpperCase()}.svg`" />
        </div>
        {{ myseries.vote_average }}
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.size {
    width: 350px;
    height: 500px;
    object-fit: cover;
}

.img-flag {
    width: $width;
}
</style>