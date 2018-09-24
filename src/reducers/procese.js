import {createSelector} from 'reselect';

export default function procese(state = {}, action = {}) {
  switch (action.type) {
    default: return state;
  }
}

//selectors

export const proceseSelector = state => state.procese;

export const allProceseSelector = createSelector(
  proceseSelector,
  proceseHash => Object.values(proceseHash)
);