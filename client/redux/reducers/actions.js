import {
  SET_FIELD_SIZE,
  TRANSITION_DELAY,
  UPDATE_CURRENT_ROUND,
  UPDATE_FIELD, UPDATE_FIRST_CLICKED_ITEM_ID
} from './types'


export function createNewField() {
  return (dispatch, getState) => {
    const { colorPalette, numberColorsOnField, currentRound, widthField, heightField } = getState().reducer
    const rundomColors = colorPalette.sort(() => Math.random() - 0.5).slice(0, numberColorsOnField)
    const numberCards = widthField * heightField
    let newField = []
    while (newField.length < numberCards) {
      newField = [...newField, ...rundomColors]
    }

    newField.length = numberCards

    newField = newField.map(color => ({
      color,
      isHidden: false,
      isShow: true,
    }))


    if (numberCards % 2 !== 0) {
      const indexCentralElement = Math.floor(numberCards / 2)
      newField.length = numberCards - 1
      newField = newField.sort(() => Math.random() - 0.5)
      newField.splice(indexCentralElement, 0, { isHidden: true, isShow: true, })
    } else {
      newField = newField.sort(() => Math.random() - 0.5)
    }

    dispatch({
      type: UPDATE_FIELD,
      payload: newField
    })

    if (currentRound === null) {
      dispatch({
        type: UPDATE_CURRENT_ROUND,
        payload: 1
      })
    }
  }
}

function checkRound() {
  return (dispatch, getState) => {
    const { field, currentRound, numberRounds } = getState().reducer
    const isEnd = field.filter(square => square.isHidden).length === field.length
    // end of the game
    if (isEnd && currentRound === numberRounds) {
      dispatch({
        type: UPDATE_CURRENT_ROUND,
        payload: null
      })
    }
    // end of the round
    else if (isEnd && currentRound !== null) {
      dispatch({
        type: UPDATE_CURRENT_ROUND,
        payload: currentRound + 1
      })
      dispatch(createNewField())
    }
  }
}

function checkMatch(id) {
  return (dispatch, getState) => {
    const { field, firstClickedItemID } = getState().reducer
    // First click
    if (firstClickedItemID === null) {
      dispatch({
        type: UPDATE_FIRST_CLICKED_ITEM_ID,
        payload: id
      })
    }
    // Match !!!
    else if (firstClickedItemID !== null &&
      field[firstClickedItemID].color === field[id].color) {

      const newField = field.map((it, index) => {
        if (index === id || index === firstClickedItemID) {
          return { ...it, isHidden: true, isShow: false }
        }
        return it
      })
      dispatch({
        type: UPDATE_FIELD,
        payload: newField
      })
      dispatch({
        type: UPDATE_FIRST_CLICKED_ITEM_ID,
        payload: null
      })
      setTimeout(() => dispatch(checkRound()), TRANSITION_DELAY)
    }
    // Not Match :(
    else if (firstClickedItemID !== null &&
      field[firstClickedItemID].color !== field[id].color) {
      const newField = field.map((it, index) => {
        if (index === id || index === firstClickedItemID) {
          return { ...it, isShow: false }
        }
        return it
      })
      dispatch({
        type: UPDATE_FIELD,
        payload: newField
      })
      dispatch({
        type: UPDATE_FIRST_CLICKED_ITEM_ID,
        payload: null
      })
    }
    else if (true) {
      console.log('function checkMatch Error !!!')
    }
  }
}

export function updateClickedSquare(id) {
  return (dispatch, getState) => {
    const { field, firstClickedItemID } = getState().reducer
    if (id !== firstClickedItemID) {
      const newField = field.map((it, index) => {
        if (index === id) {
          return { ...it, isShow: true }
        }
        return it
      })
      dispatch({
        type: UPDATE_FIELD,
        payload: newField
      })
      setTimeout(() => dispatch(checkMatch(id)), TRANSITION_DELAY, id)
    }
  }
}

export const setFieldSize = (width, height) => ({
  type: SET_FIELD_SIZE,
  width, height,
})



