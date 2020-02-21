import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import { DetailPage } from '../pages/DetailPage/DetailPage'
import { VideoPlayer } from '../pages/VideoPlayer/VideoPlayer'
import { NotFound } from '../pages/404/NotFound'

export function AppRouter () {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/movie/:movieCount' component={DetailPage}/>
                <Route path='/player/:movieId' component={VideoPlayer}/>
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter