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
        myfilms: Object
    }
}
</script>

<template>
    <div class="total-kard">
        <div class="flip">
            <div class="front">
                <img class="size" :src="`https://image.tmdb.org/t/p/w342${myfilms.poster_path}`" :alt="myfilms.title">
            </div>
            <div class="back">
                <h1> Titolo: {{ myfilms.title }}</h1>
                <h2> Titolo originale: {{ myfilms.original_title }}</h2>
                <div>
                    <img class="img-flag"
                        :src="`../../node_modules/country-flag-icons/3x2/${myfilms.original_language.toUpperCase()}.svg`"
                        :alt="myfilms.original_language.toUpperCase()" />
                </div>
                <h4>
                    <div class="d-flex justify-content-center mt-3">
                        <span>Voto:</span>
                        <!-- <div class="d-flex" v-for="(  star, index  ) in  vote(star)" :key="index">
                            <i class="fa-solid fa-star"></i>
                        </div> -->
                        <!-- <div class="d-flex" v-for="(  star, index  ) in   Math.floor(5 - myfilms.vote_average / 2)  "
                            :key="index">
                            <i class=" fa-regular fa-star"></i>
                        </div> -->
                    </div>
                </h4>
                <p>{{ myfilms.overview }}</p>
            </div>
            <!-- {{ myfilms.vote_average }} -->
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