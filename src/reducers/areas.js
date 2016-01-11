import { DEFAULT, MAPS, CALL_NUMBERS, DIRECTORY, HOURS, ROOM, VISITOR } from '../constants/AreaTypes.js';

const initialState = [
  {
    activeArea: DEFAULT
  }
]

export default function areas(state = initialState, action) {
  return {activeArea: action.setArea};
}
