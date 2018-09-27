import axios from 'axios';

export default {
  user: {
    login: (credentials) =>
      axios.post('/api/auth', {credentials}).then(res => res.data.user)
  },
  proces:{
    addProces: proces =>
      axios.post('/api/procese', {proces}).then(res=>res.data.proces),
    edit: proces =>
      axios.put('/api/procese/:id', {proces}).then(res=>res.data.proces)
  },
  chitanta:{
    addChitanta: chitanta =>
      axios.post('/api/chitante', {chitanta}).then(res=>res.data.chitanta),
    edit: chitanta =>
      axios.put('/api/chitante/:id', {chitanta}).then(res=>res.data.chitanta)
  },
  controlor:{
    addControlor: controlor =>
      axios.post('/api/controlori', {controlor}).then(res=>res.data.controlor),
    edit: controlor =>
      axios.put('/api/controlori/:id', {controlor}).then(res=>res.data.controlor)
  }
}
