const getters = {
  isUser: state => {
    return state.user.role === 'user'
  },
  isArtist: state => {
    return state.user.role === 'artist'
  },
  isAgent: state => {
    return state.user.role === 'agent'
  },
  isClub: state => {
    return state.user.role === 'club'
  }
}

export default getters
