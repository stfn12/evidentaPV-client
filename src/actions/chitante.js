import { CHITANTA_ADDED, CHITANTA_EDITED } from "../types";
import api from '../api';

export const chitantaAdded = (chitanta) => ({
  type: CHITANTA_ADDED,
  chitanta
});

export const chitantaEdited = (chitanta) => ({
  type: CHITANTA_EDITED,
  chitanta
});

export const edit = (data) => (dispatch) =>
  api.chitanta.edit(data).then(chitanta => dispatch(chitantaEdited(chitanta)));

export const addChitanta = (data) => (dispatch) =>
  api.chitanta.addChitanta(data).then(chitanta => dispatch(chitantaAdded(chitanta)));
