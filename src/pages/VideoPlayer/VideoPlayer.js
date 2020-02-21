import React, { Component } from 'react'
import './VideoPlayer.css'
import { getMovie } from '../../services/ApiService'

export class VideoPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.match.params.movieId,
            //id: this.props.location.id.movieId,
            //title: this.props.location.title.movieTitle,
            //video: this.props.location.url.movieUrl
            title: '',
            contents: [
                {
                    url: ''
                }
            ]
        }
    }

    componentDidMount () {
        getMovie(this.state.data)
        .then(movie => this.setState(movie))
    }

    render() {
        console.log(this.state)
        let data = this.state.data
        let title = this.state.title
        let listContents = this.state.contents.map((url) => url )
        let video = localStorage.getItem('movieUrl')
        console.log(video)

        let movieHistory = localStorage.getItem('movieHistory')
        movieHistory = movieHistory ? movieHistory.split(',') : []
        movieHistory.push(data)
        let unique = movieHistory.filter(function(item, index, array){
            return array.indexOf(item) === index
        })
        localStorage.setItem('movieHistory', unique.toString())

        return(
        <div>
            <div class="video-paused">
                <h1>{title}</h1>
            </div>
            <video className="video-player" preload="auto" autoPlay controls>
                <source src={video} tipe="video/mp4"/>
                video not supported
            </video>
        </div>
        
        )
    }
}