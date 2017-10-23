import Vuex from 'vuex';

function isNewMix(currentMix, newMix) {
  return currentMix.slug !== newMix.slug;
}

function mixUrl(base, slug, ext) {
  return `${base}/mixes/dj-mountainous-${slug}.${ext}`;
}

/**
 * Controls the music player
 *
 * @return
 */
const createStore = () => {
  return new Vuex.Store({
    state: {
      currentTrackSlug: 'elfin-lakes',
      currentMix: { // todo cs - draw this dynamically from the mix list
        title: 'Elfin Lakes',
        genres: 'House, Progressive, Trance',
        date: 'January 2017',
        slug: 'elfin-lakes',
        rating: 4,
      },
      isPlaying: false,
      seekPercentage: 0,
      $audio: null,
      baseUrl: process.env.baseUrl,
    },
    getters: {
      isPlaying: state => state.isPlaying,
      currentMix: state => state.currentMix,
      seekPercentage: state => state.seekPercentage,
      playingText: state => (state.isPlaying ? 'Now Playing' : 'Next Up'),
      currentMp3: state => mixUrl(state.baseUrl, state.currentMix.slug, 'mp3'),
      currentM4a: state => mixUrl(state.baseUrl, state.currentMix.slug, 'm4a'),
    },
    mutations: {
      play(state, mix = {}) {
        if (mix.slug && isNewMix(state.currentMix, mix)) {
          // this.currentMix
        }
        state.$audio.play();
        state.isPlaying = true;
      },
      seekTo(state, seekPercentage) {
        state.$audio.currentTime = seekPercentage * state.$audio.duration;
        state.seekPercentage = seekPercentage;
      },
      pause(state, mix = {}) {
        state.$audio.pause();
        state.isPlaying = false;
      },
      initialize(state) {
        state.$audio = document.getElementById('global-audio-player');
      },
    },
    actions: {
      playPause({ state, commit }, mix) {
        if (!state.isPlaying) {
          commit('play', mix);
        } else {
          commit('pause', mix);
        }
      },
    },
  });
};

export default createStore;
