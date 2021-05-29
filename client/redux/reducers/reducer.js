import {
  SET_FIELD_SIZE,
  SET_NUMBER_ROUNDS,
  SET_NUMBER_VARIANTS,
  UPDATE_CURRENT_ROUND,
  UPDATE_FIELD, UPDATE_FIRST_CLICKED_ITEM_ID,
} from './types'

const inicialState = {
  numberVariantsOnField: 2,
  widthField: 2,
  heightField: 2,
  firstClickedItemID: null,
  numberRounds: 3,
  currentRound: null,
  field: [],
}

// eslint-disable-next-line import/prefer-default-export
export const reducer = (state = inicialState, action) => {

  switch (action.type) {
    case UPDATE_FIELD:
      return { ...state, field: action.payload }

    case UPDATE_FIRST_CLICKED_ITEM_ID:
      return { ...state, firstClickedItemID: action.payload }

    case UPDATE_CURRENT_ROUND:
      return { ...state, currentRound: action.payload }

    case SET_FIELD_SIZE:
      return {
        ...state,
        widthField: action.width ? action.width : state.widthField,
        heightField: action.height ? action.height : state.heightField
      }

    case SET_NUMBER_VARIANTS:
      return { ...state, numberVariantsOnField: action.payload }
    
      case SET_NUMBER_ROUNDS:
        return { ...state, numberRounds: action.payload }

    default:
      return state
  }
}
