import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewField } from '../redux/reducers/actions'
import { UPDATE_CURRENT_ROUND } from '../redux/reducers/types'
import SelectNumberRounds from './selectNumberRounds'
import SelectNumberVariants from './selectNumberVariants'
import SelectSize from './selectSize'

const Navbar = () => {
  const dispatch = useDispatch()
  const { currentRound, numberRounds } = useSelector(s => s.reducer)

  return (
    <header className="navbar" >
      <h3>Game</h3>
      <h4> {currentRound === null ? null : `round ${currentRound} of ${numberRounds}`}</h4>

      {
        currentRound === null ? (
          <ul className="navbar-menu">
            <li><a href="#" onClick={() => dispatch(createNewField())}>Start</a></li>
            <li><SelectSize /></li>
            <li><SelectNumberRounds /></li>
            <li><SelectNumberVariants /></li>
          </ul>
        )
          : (
            <ul className="navbar-menu">
              <li><a href="#" onClick={() => dispatch({ type: UPDATE_CURRENT_ROUND, payload: null })}>Stop</a></li>
            </ul>
          )
      }
    </header>
  )
}

export default Navbar
