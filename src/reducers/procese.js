import {createSelector} from 'reselect';
import { PROCES_ADDED, PROCES_EDITED } from "../types";

export default function procese(state = {}, action = {}) {
  switch (action.type) {
    case PROCES_ADDED:
    case PROCES_EDITED:
      return action.proces;
    default: return state;
  }
}

//selectors

export const proceseSelector = state => state.procese;

export const allProceseSelector = createSelector(
  proceseSelector,
  proceseHash => Object.values(proceseHash)
);