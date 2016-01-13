'use strict'
/*
 * Action Types
 */
export const SET_CONTAINER_CONTENT = 'SET_CONTAINER_CONTENT';

/*
 * Constant Values
 */
export const DEFAULT = 'DEFAULT';
export const MAPS = 'MAPS';
export const DIRECTORY = 'DIRECTORY';
export const CALL_NUMBERS = 'CALL_NUMBERS';
export const ROOM_RESERVATIONS = 'ROOM_RESERVATIONS';
export const HOURS = 'HOURS';
export const VISITOR_INFO = 'VISITOR_INFO';

/*
 * Action creators
 */
 export function setContainerContent(content) {
   return {
     type: SET_CONTAINER_CONTENT, content
   }
 }
