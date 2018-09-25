import axios from 'axios';

export default {
  user: {
    login: (credentials) =>
      axios.post('/api/auth', {credentials}).then(res => res.data.user)
  },
  proces:{
    addProces: proces =>
      axios.post('/api/procese', {proces}).then(res=>res.data.proces)
  }
}
