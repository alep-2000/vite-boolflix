<script>
// IMPORT COMPONENTS
import { store } from './data/store';
import { hasFlag } from 'country-flag-icons';

export default {
    data() {
        return {
            // USABLE STORE AND HAS-FLAG
            store,
            hasFlag
        }
    },
    // PROPS
    props: {
        myseries: Object
    },
    methods: {
        // FUNCTION VOTE
        vote() {
            let full_star = Math.ceil(this.myseries.vote_average / 2)
            return full_star
        },
        hallow_vote() {
            let hallow_star = Math.floor(5 - this.myseries.vote_average / 2)
            return hallow_star
        }
    }
}
</script>

<template>
    <div class="total-kard">
        <div class="flip">
            <div class="front">
                <!-- COVER IMAGE SERIES -->
                <img class="size" :src="`https://image.tmdb.org/t/p/w500${myseries.poster_path}`" :alt="myseries.name">
            </div>
            <div class="back">
                <h2>Titolo: {{ myseries.name }}</h2>
                <h3>Titolo originale: {{ myseries.original_name }}</h3>
                <div>
                    <img class="img-flag"
                        :src="`../../node_modules/country-flag-icons/3x2/${myseries.original_language.toUpperCase()}.svg`"
                        :alt="myseries.original_language.toUpperCase()" />
                </div>
                <h5>
                    <div class="d-flex justify-content-center mt-3">
                        <span>Voto:</span>
                        <!-- CICLE V-FOR -->
                        <div class="d-flex" v-for="(  stars, index  ) in  vote()" :key="index">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="d-flex" v-for="(  stars, index  ) in hallow_vote()" :key="index">
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                </h5>
                <p>{{ myseries.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/mixins.scss' as *;

// STYLE CARD SERIES
.total-kard {
    @include total;

    &:hover .flip {
        transform: $rotate;
    }

    .flip {
        @include flip;

        .front {
            @include front;

            .size {
                @include size;
                object-fit: cover;
            }
        }

        .back {
            @include back;

            .img-flag {
                width: $width;
            }

            .fa-solid {
                color: $color-star;
            }

            p {
                @include paragraph;
            }
        }
    }

}
</style>