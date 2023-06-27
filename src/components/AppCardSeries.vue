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
    <div class="total-kard">
        <div class="flip">
            <div class="front">
                <img class="size" :src="`https://image.tmdb.org/t/p/w342${myseries.poster_path}`" :alt="myseries.name">
            </div>
            <div class="back">
                <h1>Titolo: {{ myseries.name }}</h1>
                <h2>Titolo originale: {{ myseries.original_name }}</h2>
                <div>
                    <img class="img-flag"
                        :src="`../../node_modules/country-flag-icons/3x2/${myseries.original_language.toUpperCase()}.svg`"
                        :alt="myseries.original_language.toUpperCase()" />
                </div>
                <p>{{ myseries.overview }}</p>
                <!-- {{ myseries.vote_average }} -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.total-kard {
    background-color: transparent;
    width: 350px;
    height: 500px;
    perspective: 1000px;

    &:hover .flip {
        transform: rotateY(180deg);
    }

    .flip {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;



        .front {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            background-color: #bbb;

            .size {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            background-color: black;
            color: white;
            transform: rotateY(180deg);

            p {
                font-size: 12px;
                text-align: center;
            }
        }
    }

}

.img-flag {
    width: $width;
}
</style>