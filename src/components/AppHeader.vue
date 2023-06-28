<script>
// STORE IMPORT
import { store } from '../components/data/store'

export default {
    data() {
        return {
            // USABLE STORE
            store
        }
    }
}
</script>

<template>
    <!-- HEADER -->
    <header class="d-flex justify-content-between align-items-center">
        <!-- LOGO -->
        <div class="ms-5">
            <strong>BOOLFLIX</strong>
        </div>
        <!-- SEARCH BAR -->
        <div class="me-5">
            <input class="form-control-lg m-2" type="text" placeholder="Inserisci il nome di un film" v-model="store.name">
            <button class="btn btn-sm btn-primary " @click="$emit('search')">Cerca</button>
        </div>
    </header>
    <!-- END HEADER -->
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/mixins.scss' as *;

// STYLE HEADER
header {
    @include size;
    background-color: $back_header;

    strong {
        font-size: 30px;
        color: $color;
    }
}
</style>