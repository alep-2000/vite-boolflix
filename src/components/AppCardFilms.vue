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
            <img :src="`../../node_modules/country-flag-icons/3x2/${myfilms.original_language.toUpperCase()}.svg`" />
        </div>
        {{ myfilms.vote_average }}
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 30px;
}
</style>