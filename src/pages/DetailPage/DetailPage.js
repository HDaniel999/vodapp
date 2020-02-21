import React, { Component } from 'react'
import Page from '../../components/Page/Page'
import './DetailPage.css'
import { getMovie } from '../../services/ApiService'
import { Link } from 'react-router-dom'

export class DetailPage extends Component {

    constructor (props) {
        super(props)
        console.dir(props)
        this.state = {
            data: (this.props.match.params.movieCount)-1,
            title: '',
            year: '',
            description: '',
            credits: [
                {role: '', name: ''},
                {role: '', name: ''},
                {role: '', name: ''},
                {role: '', name: ''},
                {role: '', name: ''}
            ],
            duration: '',
            genres: [],
            parentalRatings: [
                {
                    rating: ''
                }
            ],
            images: [
                {
                    url: ''
                }
            ],
            contents: [
                {
                    url: ''
                }
            ],
            audios: []
        }
    }

    componentDidMount () {
        getMovie(this.state.data)
        .then(movie => this.setState(movie))
    }
    render (props) {
        console.log(this.state)
        let movieTitle = this.state.title
        let movieDescription = this.state.description
        let movie = this.state
        let movieImages = movie.images[0].url
        let listAudios = movie.audios.map((audio) => <a href={'/movie/'+movieTitle+'?audio='+audio}>{audio}</a>)
        let listCredits = movie.credits.map((item) => <span>{item.role + ': ' + item.name} </span>)
        let listContents = movie.contents.map((url) => url )
        let movieUrl = listContents[0].url
        localStorage.setItem('movieUrl', movieUrl.toString())
        let movieId = this.state.data

        return(
            <Page title='Detail Page'>
                    <main>
                        <section className="breweries">
                        <ul>
                            <li>
                                <img className="movie-poster" width="300px" src={movieImages} alt={movieTitle}/>
                            </li>
                            <li>
                                <h1 className="movie-title">{movieTitle}</h1>
                                <div className="movie-details">
                                    <span className="movie-parental-rating"><b className="pg">{movie.parentalRatings[0].rating}</b> </span>
                                    <div className="dropdown">
                                        <button className="dropbtn">
                                            Languages ▾
                                        </button>
                                        <div className="dropdown-content">
                                        {listAudios}
                                        </div>
                                    </div>
                                </div>
                                <p>{movieDescription}</p>
                                <p><b>Credits: </b>{listCredits}</p>
                                <Link to={{pathname: `/player/${movieId}`, movieId:{movieId}, title: {movieTitle}, url: {movieUrl}}}>
                                    <button className="watch-btn">Watch Movie</button>
                                </Link>
                            </li>
                        </ul>
                    </section>
                    </main>
            </Page>
        )
    }
}