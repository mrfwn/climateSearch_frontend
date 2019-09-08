import React from 'react'
import MenuItem from './menuitem'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard' />
        <MenuItem path='#searchcity' label='Search City' icon='search' />
    </ul>
)