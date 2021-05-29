
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFieldSize } from '../redux/reducers/actions'


const SelectSize = () => {
  const dispatch = useDispatch()
  const { widthField, heightField } = useSelector(s => s.reducer)



  const handleChange = (e) => {
    const [width, height] = e.target.value.split('x')
    dispatch(setFieldSize(+width, +height))
  }
  return (
    <>
      <div htmlFor="select-size">Select field size:</div>
      <select value={`${widthField}x${heightField}`} onChange={handleChange} id="select-size">
        <option value="2x2'">2x2</option>
        <option value="3x3">3x3</option>
        <option value="4x4">4x4</option>
        <option value="5x5">5x5</option>
      </select>

    </>
  )
}

export default SelectSize