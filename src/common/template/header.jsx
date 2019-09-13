import React from 'react'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><i className='fa  fa-cloud'></i></span> 
            <span className='logo-lg'>
            <span> <i className='fa  fa-cloud'></i> </span>
                <b>Climate</b> Search
            </span>
        </a> 
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)