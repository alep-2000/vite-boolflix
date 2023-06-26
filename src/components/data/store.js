import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=ae4a97ae8633729ba93ef0e6477ffc97',
    films: [],
    name: ''
})