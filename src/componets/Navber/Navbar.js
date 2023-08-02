import React from 'react'
import {useSelector} from  'react-redux'


export default function Navbar() {

  const amount = useSelector(state => state.amount);

  return (
    <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <button class="btn btn-success" disabled={true} type="submit">youre balace : {amount}</button>
            </form>
            </div>
        </div>
        </nav>
    </div>
  )
}
