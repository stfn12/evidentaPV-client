//import {createSelector} from 'reselect';
import { CONTROLOR_ADDED, CONTROLOR_EDITED } from "../types";

export default function controlori(state = {}, action = {}) {
  switch (action.type) {
    case CONTROLOR_ADDED:
    case CONTROLOR_EDITED:
      return action.controlor;
    default: return state;
  }
}
