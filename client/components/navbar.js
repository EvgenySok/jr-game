import React from 'react'
import { useDispatch } from 'react-redux'
import { createNewField } from '../redux/reducers/actions'

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <header className="navbar" >
      <h3>Game</h3>
      <ul className="navbar-menu">
        {/* <li><a href="#" onClick={getAll}>Get all repositories</a></li> */}
        <li><a href="#" onClick={() => dispatch(createNewField())}>Update</a></li>
      </ul>
    </header>
  )
}

export default Navbar
