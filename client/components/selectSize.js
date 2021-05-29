
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFieldSize, setNumberVariantsOnField } from '../redux/reducers/actions'


const SelectSize = () => {
  const dispatch = useDispatch()
  const { widthField, heightField } = useSelector(s => s.reducer)
  const size = ['2x2', '3x3', '4x4', '5x5']

  const handleChange = (e) => {
    const [width, height] = e.target.value.split('x')
    dispatch(setFieldSize(+width, +height))
    dispatch(setNumberVariantsOnField(2))
  }

  return (
    <>
      <div htmlFor="select-size">Select field size:</div>
      <select value={`${widthField}x${heightField}`} onChange={handleChange} id="select-size">
        {size.map((num, id) => <option key={id} value={num}>{num}</option>)}
      </select>

    </>
  )
}

export default SelectSize