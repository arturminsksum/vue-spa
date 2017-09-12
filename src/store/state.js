const state = {
  isLogin: false,
  user: {},
  currentUser: {},
  residents: {},
  events: [], // temp events will be in posts as a type
  posts: [ // mocked data
    {
      author: {
        name: 'Club',
        id: 156484878,
        publishDate: 1505161842421,
        avatar: 'artist-avatar-01.jpg' // take it from state when it will be ready
      },
      eventName: 'fesfsghhhhh',
      type: 'event',
      location: '6801 Hollywood Blvd #433, Los Angeles, CA 90028, USA',
      date: '18.10.2017',
      time: '12.05',
      tags: ['tag'],
      description: 'fesfe',
      price: '50',
      errors: false,
      id: new Date().getTime(),
      poster: 'http://carpentercollective.com/wp-content/uploads/2013/12/JackJohnson02_tadcarpenter1.jpg' // '../../assets/img/event-banner.jpg'
    },
    {
      type: 'news',
      author: {
        name: '1111',
        surname: '',
        id: 12318968745,
        publishDate: 1505161842421,
        avatar: 'artist-avatar-01.jpg' // take it from state when it will be ready
      },
      description: 'feshyyfe',
      video: {
        thumbnail: '',
        source: 'https://www.youtube.com/embed/sdQqgVzex_w'
      }
    },
    {
      type: 'news',
      author: {
        name: '22222',
        surname: '',
        id: 123184968745,
        publishDate: 1505161842421,
        avatar: 'artist-avatar-01.jpg' // take it from state when it will be ready
      },
      description: 'grsfe',
      tracks: [
        {
          songName: 'Song name',
          likes: 55,
          shared: 55,
          listened: 1043,
          talked: 3,
          time: '05:00',
          added: '3 months',
          show: true,
          filePath: '/audio/linkin_park_victimized.mp3'
        }
      ]
    },
    {
      type: 'news',
      author: {
        name: '3333',
        surname: '',
        id: 1505161842421,
        publishDate: 1505161842421,
        avatar: 'artist-avatar-01.jpg' // take it from state when it will be ready
      },
      description: 'gfessfe',
      gallery: [
        {
          source: 'gallery-01.jpg',
          comments: [
            {
              author: {
                name: 'Fefsgsr',
                avatar: 'artist-avatar-02.jpg'
              },
              publishDate: 1505161842421,
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
            }
          ]
        },
        {
          source: 'gallery-02.jpg',
          comments: [
            {
              author: {
                name: 'Fefsgsr',
                avatar: 'artist-avatar-02.jpg'
              },
              publishDate: 1505161842421,
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
            }
          ]
        },
        {
          source: 'gallery-03.jpg',
          comments: [
            {
              author: {
                name: 'Fefsgsr',
                avatar: 'artist-avatar-02.jpg'
              },
              publishDate: 1505161842421,
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
            }
          ]
        },
        {
          source: 'gallery-04.jpg',
          comments: [
            {
              author: {
                name: 'Fefsgsr',
                avatar: 'artist-avatar-02.jpg'
              },
              publishDate: 1505161842421,
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
            }
          ]
        },
        {
          source: 'gallery-05.jpg',
          comments: [
            {
              author: {
                name: 'Fefsgsr',
                avatar: 'artist-avatar-02.jpg',
                publishDate: 1505161842421,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
              }
            }
          ]
        }
      ]
    }
  ]
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

