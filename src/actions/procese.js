import { PROCES_ADDED } from "../types";
import api from '../api';

export const procesAdded = (proces) => ({
  type: PROCES_ADDED,
  proces
});


export const addProces = (data) => (dispatch) =>
  api.proces.addProces(data).then(proces => dispatch(procesAdded(proces)));
