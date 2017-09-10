<template lang="pug">
  .container
    main.main
      os-artist-banner(
        :user="user"
      )
      .page-wrapper
        aside.aside-left.aside-left--profile
          .artist-left__add-contact
            a(href='').btn.btn--green
              span Add contact
          .artist-rating(v-if="!isUser")
            os-svg(name="star", width="17px", height="17px" key="n" v-for="n in 5").artist-rating__star
          os-artist-feedback(v-if="!isUser")
          .artist-share
            .artist-share__title
              os-svg(name="world", width="14px", height="14px").artist-share__icon
              | social links
            .artist-share__list
              a(:href="item.link" v-for="item in artistShare" key="index").artist-share__link
                os-svg(:name="item.icon", width="14px", height="14px")
          .aside-adv
            img.img(src="../assets/img/sidebar-banner-01.jpg")
          .aside-adv
            img.img(src="../assets/img/sidebar-banner-02.jpg")

        .page-content.page-content--profile
          .artist-center__artist-biography
            p.artist-center__describe {{user.description}}
          os-artist-tags(v-if="!isUser && user.tags && user.tags.length" :tags="user.tags")

          os-artist-tabs

        aside.aside-right
          .artist-right__action(v-if="isArtist")
            .artist-right__rider
              button.btn.btn--dark-blue(@click="showModalRider = true")
                span Request rider
            a(href="").artist-right__link
              os-svg(name="message", width="15px", height="14px").artist-right__link-icon
              span.artist-right__link-text message
          os-profile-stats
          .only-agent(v-if="isAgent")
            .border-top.border-top--20
            os-profile-partners(
              header-title="Resident clubs"
              svg-name="dynamic"
              :counter="43"
              :items="agentClubs"
            )
            .border-top.border-top--20
            os-profile-partners(
              header-title="Promote artists"
              svg-name="note"
              :counter="47"
              :items="agentArtist"
            )
          .only-club(v-if="isClub")
            .border-top.border-top--20
            os-profile-partners(
              header-title="Residents"
              svg-name="dynamic"
              :counter="residents.length"
              :items="residents"
            )
            .border-top.border-top--20
            os-profile-partners(
              header-title="Agents"
              svg-name="note"
              :counter="45"
              :items="agentArtist"
            )
          .border-top.border-top--20
          os-artist-events
      os-modal.modal-rider(
      modal-title="Rider-list"
      v-if="showModalRider"
      @close="showModalRider = false")
        .modal-rider__body(slot="body")
          .modal-rider__list
            os-rider-item(v-for="n in 3" key="n")

</template>

<script>

import OsHeader from '@/components/sections/os-header.vue'
import OsArtistBanner from '@/components/artist/os-artist-banner/os-artist-banner'
import OsArtistTags from '@/components/artist/os-artist-tags/os-artist-tags'
import OsArtistFeedback from '@/components/artist/os-artist-feedback/os-artist-feedback'
import OsArtistTabs from '@/components/artist/os-artist-tabs/os-artist-tabs'
import OsProfileStats from '@/components/sections/os-profile-stats/os-profile-stats'
import OsArtistEvents from '@/components/artist/os-artist-events/os-artist-events'
import OsArtistPlayer from '@/components/artist/os-artist-player/os-artist-player'
import OsAudioPlayer from '@/components/os-audio-player/os-audio-player.vue'
import OsModal from '@/components/os-modal/os-modal.vue'
import OsRiderItem from '@/components/os-rider-item/os-rider-item.vue'
import OsProfilePartners from '@/components/sections/os-profile-partners/os-profile-partners.vue'

import OsSvg from '@/components/elements/os-svg'

import { mapGetters, mapState } from 'vuex'

export default {

  components: {
    OsHeader,
    OsArtistBanner,
    OsArtistTags,
    OsArtistFeedback,
    OsArtistTabs,
    OsProfileStats,
    OsArtistEvents,
    OsArtistPlayer,
    OsSvg,
    OsAudioPlayer,
    OsModal,
    OsRiderItem,
    OsProfilePartners
  },

  data () {
    return {
      showModalRider: false,
      showModalGallery: false,

      artistStats: [
        {
          icon: 'speach',
          text: 'feedbacks',
          count: 143
        },
        {
          icon: 'events',
          text: 'events',
          count: 143
        },
        {
          icon: 'friends',
          text: 'friends',
          count: 1043
        }
      ],

      artistShare: [
        {
          icon: 'tw',
          title: '',
          link: ''
        },
        {
          icon: 'artist-cloud',
          title: '',
          link: ''
        },
        {
          icon: 'artist-video',
          title: '',
          link: ''
        },
        {
          icon: 'inst',
          title: '',
          link: ''
        },
        {
          icon: 'fb',
          title: '',
          link: ''
        }
      ],
      agentClubs: [
        {
          name: 'Ya ma hea'
        },
        {
          name: 'Reactor'
        },
        {
          name: 'Re: Public'
        },
        {
          name: 'R-Club'
        }
      ],
      agentArtist: [
        {
          name: 'DJ Snake'
        },
        {
          name: 'Major Lazer'
        },
        {
          name: 'Tiesto'
        },
        {
          name: 'Lyapis'
        }
      ],
      residents: [
        {
          id: 16,
          name: 'Сalvin Harris',
          role: 'artist',
          avatar_image: 'http://165.227.140.41:1323/pictures/accounts/musicians/artist-avatar-02.jpg'
        },
        {
          id: 17,
          name: 'Kraftwerk',
          role: 'artist',
          avatar_image: 'http://165.227.140.41:1323/pictures/accounts/musicians/artist-avatar-01.jpg'
        },
        {
          id: 20,
          name: "Кавер-бэнд pinK'Kode",
          role: 'artist',
          avatar_image: 'http://165.227.140.41:1323/pictures/accounts/musicians/artist-avatar-03.jpg'
        }
      ]
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('getUser', {id: this.$route.params.id})
        .catch((error) => {
          if (error) {
            this.$router.push({name: 'home'})
          }
        })
    }
  },
  computed: {
    ...mapGetters([
      'isUser',
      'isArtist',
      'isAgent',
      'isClub'
    ]),
    ...mapState({
      user: state => state.currentUser
    })
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  }
}

</script>
