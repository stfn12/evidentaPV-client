//import {createSelector} from 'reselect';
import { CHITANTA_ADDED, CHITANTA_EDITED, CHITANTA_CLICKED } from "../types";

export default function chitante(state = {}, action = {}) {
  switch (action.type) {
    case CHITANTA_CLICKED:
    case CHITANTA_ADDED:
    case CHITANTA_EDITED:
      return action.chitanta;
    default: return state;
  }
}
