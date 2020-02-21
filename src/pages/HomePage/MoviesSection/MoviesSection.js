import React, { Component } from 'react';
import './MoviesSection.css'
import { Link } from 'react-router-dom'
import { getMovies } from '../../../services/ApiService'
import Carousel from './components/Carousel/Carousel'

class MoviesSection extends Component {

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
        const movie = this.state.movie.map((movie) => {
            movieCount++
            let duration = Math.round((movie.duration)/60);
            let genres = (movie.genres).join(' · ')
            let title = (movie.title)
            if(title.length > 20) {
                title = title.substr(0, 20) + "..."
            } 


            //<Link id={'movie'+ movieCount} to={'/movie/'+movieCount} onClick={this.goToMovie} data-event={movieCount} key={movieCount}>

            //                            <img className="movie-thumbnail" src={movie.images[0].url} alt={movie.title}/>

            let sectionStyle = {
                backgroundSize: "cover",
                backgroundImage: `url(${movie.images[0].url})`
            }

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

export default MoviesSection