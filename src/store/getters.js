const getters = {
  isUser: state => {
    return state.currentUser.role === 'user'
  },
  isArtist: state => {
    return state.currentUser.role === 'artist'
  },
  isAgent: state => {
    return state.currentUser.role === 'agent'
  },
  isClub: state => {
    return state.currentUser.role === 'club'
  }
}

export default getters
