
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNumberRounds } from '../redux/reducers/actions'

const SelectNumberRounds = () => {
  const dispatch = useDispatch()
  const { numberRounds } = useSelector(s => s.reducer)
  const rounds = new Array(12).fill(null).map((it, id) => id + 1)

  return (
    <>
      <div>Select number rounds:</div>

      <select value={numberRounds} onChange={(e) => dispatch(setNumberRounds(+e.target.value))}>
        {rounds.map((round, id) => <option key={id} value={round}>{round}</option>)}
      </select>

    </>
  )
}

export default SelectNumberRounds