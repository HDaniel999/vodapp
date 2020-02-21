import 'whatwg-fetch'

export function getMovies() {
    return fetch('https://demo5520281.mockable.io/movies')
    .then(response => response.json())
    .then(movies => movies.entries)
    .catch(ex => console.log('parsing failed', ex))
} 

export function getMovie(index) {
    return fetch('https://demo5520281.mockable.io/movies')
    .then(response => response.json())
    .then(movies => movies.entries[index])
    .catch(ex => console.log('parsing failed', ex))
}