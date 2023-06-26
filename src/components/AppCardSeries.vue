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
        <div class="mt-2">
            {{ myseries.name }}
            {{ myseries.original_name }}
            <div>
                <img :src="`../../node_modules/country-flag-icons/3x2/${myseries.original_language.toUpperCase()}.svg`" />
            </div>
            {{ myseries.vote_average }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 30px;
}
</style>