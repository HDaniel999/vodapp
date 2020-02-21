import React, { Component } from 'react';
import './MovieHistory.css'
import { Link } from 'react-router-dom'
import { getMovies } from '../../../services/ApiService'
import Carousel from '../../HomePage/MoviesSection/components/Carousel/Carousel'

class MoviesHistory extends Component {

    constructor (props) {
        super(props)
        this.state = {
            movie: []
        }
    }

    componentDidMount () {
        getMovies()
        .then(movie => this.setState({ movie }))
        .catch(console.error)
    }


    render() {

        let movieCount = 0

        let movieHistory = localStorage.getItem('movieHistory')
        movieHistory = movieHistory ? movieHistory.split(',') : []

        const movie = this.state.movie.map((movie) => {

            movieCount++
            let duration = Math.round((movie.duration)/60);
            let genres = (movie.genres).join(' · ')
            let title = (movie.title)
            if(title.length > 20) {
                title = title.substr(0, 20) + "..."
            } 

            let sectionStyle = {
                backgroundSize: "cover",
                backgroundImage: `url(${movie.images[0].url})`
            }


            movieHistory = movieHistory.map((index) => {
                console.log(index)
                parseInt(movieCount) === parseInt(index) ? console.log(movie) : console.log('no match' + movieCount)
            })

            if(movieCount === 5) {
                return(
                    <React.Fragment>
                        <article className="movie-item">
                            <Link to={{pathname: `/movie/${movieCount}`, movieCount: {movieCount}}}>
                                <div className="movie-thumbnail" style={sectionStyle}></div>
                                <div className="overlay">
                                    <div className="movie-info">
                                        <h2>{title}</h2>
                                        <p>{duration} min</p>
                                        <p>{genres}</p>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    </React.Fragment>
                )
            } 
        })

        return(
            <div>
                <Carousel>
                    { movie }
                </Carousel>
            </div>
        )
    }

}

export default MoviesHistory