import React, { Component } from 'react'
import Page from '../../components/Page/Page'
import './HomePage.css'
import MovieSection from './MoviesSection/MoviesSection'

export class HomePage extends Component {
    render (props) {
        return(
            <Page title='Home'>
                <section>
                    <h1>MOVIES</h1>
                        <MovieSection {...props}></MovieSection>
                </section>
            </Page>
        )
    }
}