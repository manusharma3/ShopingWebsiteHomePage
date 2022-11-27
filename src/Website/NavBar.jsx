import React from 'react'

const NavBar = () => {
    return (
        <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">MyShop</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    
                </ul>
                <form class="form-inline my-200 my-lg-1000">
      <input class="form-control mr-sm-200" type="search" placeholder="Search" aria-label="Search"/>
      </form><button class="btn btn-success mx-100" type="submit">Search</button>
            </div>
        </nav></div>
    )
}

export default NavBar