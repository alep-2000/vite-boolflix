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
    <div class="total-kard">
        <div class="flip">
            <div class="front">
                <img class="size" :src="`https://image.tmdb.org/t/p/w342${myfilms.poster_path}`" alt="">
            </div>
            <div class="back">
                <h1> Titolo: {{ myfilms.title }}</h1>
                <h2> Titolo originale: {{ myfilms.original_title }}</h2>
                <div>
                    <img class="img-flag"
                        :src="`../../node_modules/country-flag-icons/3x2/${myfilms.original_language.toUpperCase()}.svg`" />
                </div>
                <!-- <div>
                    <i class=" fa-regular fa-star"></i>
                </div> -->
                {{ myfilms.vote_average }}
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

    .total-kard:hover .flip {
        transform: rotateY(180deg);
        background-color: red
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

            .size {
                width: 350px;
                height: 500px;
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
        }
    }

}

.img-flag {
    width: $width;
}
</style>