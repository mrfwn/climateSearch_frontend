import React from 'react'
import { Router , Route , Redirect , hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import SearchCity from '../searchCitiy/searchcity'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/searchcity' component={SearchCity} />
        <Redirect path='*' to='/' />
    </Router>
)