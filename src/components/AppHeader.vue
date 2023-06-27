<script>
import { store } from '../components/data/store'

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header class="d-flex justify-content-between align-items-center">
        <div class="ms-5">
            <strong>BOOLFLIX</strong>
        </div>
        <div class="me-5">
            <input class="form-control-lg m-2" type="text" placeholder="Inserisci il nome di un film" v-model="store.name">
            <button class="btn btn-sm btn-primary " @click="$emit('search')">Cerca</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 100px;
    background-color: #54595e;

    strong {
        font-size: 30px;
        color: #cb2918;
    }
}
</style>