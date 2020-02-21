import React, { Component } from 'react'
import Page from '../../components/Page/Page'
import './NotFound.css'

export class NotFound extends Component {
    render () {
        return(
            <Page title='Detail Page'>
                <section>
                    <h1 className="notfound">404 NotFound</h1>
                </section>
            </Page>
        )
    }
}