import { CONTROLOR_ADDED, CONTROLOR_EDITED } from "../types";
import api from '../api';

export const controlorAdded = (controlor) => ({
  type: CONTROLOR_ADDED,
  controlor
});

export const controlorEdited = (controlor) => ({
  type: CONTROLOR_EDITED,
  controlor
});

export const edit = (data) => (dispatch) =>
  api.controlor.edit(data).then(controlor => dispatch(controlorEdited(controlor)));

export const addControlor = (data) => (dispatch) =>
  api.controlor.addControlor(data).then(controlor => dispatch(controlorAdded(controlor)));
