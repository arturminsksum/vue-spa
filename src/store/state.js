const state = {
  isLogin: false,
  user: {},
  currentUser: {},
  residents: {},
  events: [], // temp events will be in posts as a type
  posts: [],
  modalWindow: {
    showModalGallery: false,
    pictureNumber: 0
  }
}

export default state
/**
 * Propose state for user, please fill it how you see it
 * const state = {
 *  app: {
 *    ...
 *  },
 *  user: {
 *    isLogin: false,
 *    avatar,
 *    name,
 *    role: 'agent',
 *    ...
 *    posts: [
 *      {
 *        type: 'event',
 *        id: '168498463458',
 *        title,
 *        ...
 *        place
 *      }
 *    ]
 *  }
 * }
 */

