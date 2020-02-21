import React, { Component } from 'react'
import Page from '../../components/Page/Page'
import './History.css'
import MovieHistory from './MovieHistory/MovieHistory'

export class History extends Component {
    render (props) {
        return(
            <Page title='History'>
                <section>
                    <h1>MY HISTORY</h1>
                    <MovieHistory {...props}></MovieHistory>
                </section>
            </Page>
        )
    }
}