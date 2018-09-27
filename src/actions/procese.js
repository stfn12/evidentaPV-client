import { PROCES_ADDED, PROCES_EDITED } from "../types";
import api from '../api';

export const procesAdded = (proces) => ({
  type: PROCES_ADDED,
  proces
});

export const procesEdited = (proces) => ({
  type: PROCES_EDITED,
  proces
});

export const edit = (data) => (dispatch) =>
  api.proces.edit(data).then(proces => dispatch(procesEdited(proces)));

export const addProces = (data) => (dispatch) =>
  api.proces.addProces(data).then(proces => dispatch(procesAdded(proces)));
