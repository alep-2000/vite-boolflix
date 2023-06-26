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
    <header>
        <input class="form-control-lg me-2" type="text" placeholder="Inserisci il nome di un film" v-model="store.name">
        <button class="btn btn-md btn-primary" @click="$emit('search')">Cerca</button>
    </header>
</template>

<style lang="scss" scoped></style>