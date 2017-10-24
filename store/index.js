import Vuex from 'vuex';

function isNewMix(currentMix, newMix) {
  return currentMix.slug !== newMix.slug;
}

function mixUrl(base, slug, ext) {
  return `${base}/mixes/dj-mountainous-${slug}.${ext}`;
}

function getSource($audio, base, mix) {
  if ($audio.canPlayType('audio/mpeg')) {
    return mixUrl(base, mix.slug, 'mp3');
  }
  return mixUrl(base, mix.slug, 'm4a');
}

/**
 * Controls the music player
 *
 * @return
 */
const createStore = () => {
  return new Vuex.Store({
    state: {
      currentMix: { // todo cs - draw this dynamically from the mix list
        title: 'Elfin Lakes',
        genres: 'House, Progressive, Trance',
        date: 'January 2017',
        slug: 'elfin-lakes',
        rating: 4,
      },
      isPlaying: false,
      seekPercentage: 0,
      currentTime: 0,
      $audio: null,
      baseUrl: process.env.baseUrl,
    },
    getters: {
      isPlaying: state => state.isPlaying,
      currentMix: state => state.currentMix,
      $audio: state => state.$audio,
      seekPercentage: state => state.seekPercentage,
      currentTime: (state) => {
        let minutes = Math.floor(state.currentTime / 60);
        let seconds = Math.round(state.currentTime % 60);
        seconds = (seconds <= 9) ? '0'+seconds : seconds;//eslint-disable-line
        if (seconds >= 60) {
          minutes++;
          seconds = '00';
        }
        return `${minutes}:${seconds}`;
      },
      playingText: state => 'Now Playing',
      currentMp3: state => mixUrl(state.baseUrl, state.currentMix.slug, 'mp3'),
      currentM4a: state => mixUrl(state.baseUrl, state.currentMix.slug, 'm4a'),
    },
    mutations: {
      play(state, mix = {}) {
        if (mix.slug && isNewMix(state.currentMix, mix)) {
          state.$audio.pause();
          state.currentMix = mix;
          state.$audio.src = getSource(state.$audio, state.baseUrl, state.currentMix);
          state.currentTime = 0;
          state.seekPercentage = 0;
        }
        state.$audio.play();
        state.isPlaying = true;
      },
      seekTo(state, seekPercentage) {
        state.$audio.currentTime = seekPercentage * state.$audio.duration;
        state.currentTime = state.$audio.currentTime;
        state.seekPercentage = seekPercentage;
      },
      recalculateSeek(state) {
        state.currentTime = state.$audio.currentTime;
        state.seekPercentage = state.$audio.currentTime / state.$audio.duration;
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
