import { SET_CONTAINER_CONTENT, DEFAULT, MAPS, DIRECTORY, CALL_NUMBERS, ROOM_RESERVATIONS, HOURS, VISITOR_INFO, setContainerContent } from '../actions/MenuActions.js';

export function containerContent(state=DEFAULT, action){
  if(action.type == SET_CONTAINER_CONTENT) {
    state = action.content;
  }
  return state;
}
