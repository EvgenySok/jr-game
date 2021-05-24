import {
  TRANSITION_DELAY,
  UPDATE_CURRENT_ROUND,
  UPDATE_FIELD, UPDATE_FIRST_CLICKED_ITEM_ID
} from './types'


export function createNewField() {
  return (dispatch, getState) => {
    const { colorPalette, numberColorsOnField, numberCards, currentRound } = getState().reducer
    const rundomColors = colorPalette.sort(() => Math.random() - 0.5).slice(0, numberColorsOnField)

    let newField = []
    while (newField.length < numberCards) {
      newField = [...newField, ...rundomColors]
    }
    newField.length = numberCards
    newField = newField.sort(() => Math.random() - 0.5)
    newField = newField.map(color => ({
      cardStyle: { transform: 'rotateX(0deg)' },
      backStyle: { backgroundColor: color },
    }))
    console.log('newField:', newField)
    
    dispatch({
      type: UPDATE_FIELD,
      payload: newField
    })

    if (currentRound === null) {
      dispatch({
        type: UPDATE_CURRENT_ROUND,
        payload: currentRound + 1
      })
    }
  }
}

function checkRound() {
  return (dispatch, getState) => {
    const { field, currentRound, numberRounds } = getState().reducer
    const isEnd = field.filter(square => square.cardStyle.visibility === 'hidden').length === field.length
    // end of the game
    if (isEnd && currentRound === numberRounds) {
      dispatch({
        type: UPDATE_CURRENT_ROUND,
        payload: null
      })
    }
    // end of the round
    else if (isEnd) {
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
    // First clickFirst click
    if (firstClickedItemID === null) {
      dispatch({
        type: UPDATE_FIRST_CLICKED_ITEM_ID,
        payload: id
      })
    }
    // Match !!!
    else if (firstClickedItemID !== null &&
      field[firstClickedItemID].backStyle.backgroundColor === field[id].backStyle.backgroundColor) {

      const newField = field.map((it, index) => {
        if (index === id || index === firstClickedItemID) {
          const newCardStyle = { ...it.cardStyle, opacity: 0, visibility: 'hidden', transform: 'rotateX(0deg)' }
          return { ...it, cardStyle: newCardStyle }
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
      field[firstClickedItemID].backStyle.backgroundColor !== field[id].backStyle.backgroundColor) {
      const newField = field.map((it, index) => {
        if (index === id || index === firstClickedItemID) {
          const newCardStyle = { ...it.cardStyle, transform: 'rotateX(0deg)' }
          return { ...it, cardStyle: newCardStyle }
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
          const newCardStyle = { ...it.cardStyle, transform: 'rotateX(180deg)' }
          return { ...it, cardStyle: newCardStyle }
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



