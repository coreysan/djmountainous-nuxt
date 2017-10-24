<template lang="pug">

section.audio-player
  .now-playing {{ playingText }}
  .play(
    @click="playPause()"
    v-bind:class='{playing: isPlaying}')
  .mix
    .info
      span.title {{ currentMix.title }}
      span.v-rating V{{ currentMix.rating }}
      span.genres {{ currentMix.genres }}
      span.date {{ currentMix.date }}
    #progress(@click='seek')
      #seeker
    .times {{ currentTime }}

    audio#global-audio-player(ref='player')
      source.m4a(type='audio/m4a' v-bind:src='currentM4a')
      source.mp3(type='audio/mpeg' v-bind:src='currentMp3')

</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      baseUrl: process.env.baseUrl,
      $audio: null,
    };
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'playingText',
      'seekPercentage',
      'currentTime',
      'currentMix',
      'currentMp3',
      'currentM4a',
    ]),
  },
  mounted() {
    this.initialize();
    this.updateSeeker();
  },
  methods: {
    ...mapMutations([
      'initialize',
      'seekTo',
      'recalculateSeek',
    ]),
    ...mapActions([
      'playPause',
    ]),
    async seek(event) {
      const seekPercentage = event.offsetX / event.target.offsetWidth;
      await this.seekTo(seekPercentage);
      this.moveSeek();
    },
    updateSeeker() {
      setInterval(() => {
        this.recalculateSeek();
        this.moveSeek();
      }, 500);
    },
    moveSeek() {
      const $seeker = document.getElementById('seeker');
      const progressWidth = document.getElementById('progress').offsetWidth;
      const seekPx = Math.floor(progressWidth * this.seekPercentage);
      $seeker.style.left = `${seekPx}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables';

.audio-player{
  display: flex;
  flex-wrap: nowrap;

  > *{
    align-self: center;
  }

  .now-playing{
    width:  100px;
  }
  .play{
    width:  65px;
  }
  .mix{
    flex-grow: 1;
  }
}

.audio-player{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 0;
  padding: 10px 0;
  width: 100%;
  display: flex;
  background-color: black;
  border-top: 1px solid $primary-color;
  .now-playing {
    text-align: right;
    text-transform: uppercase;
    font-weight: bold;
    margin-top:  10px;
    padding-right: 15px;
    border-right:  1px solid white;
    word-spacing:  10000px;
  }
  .play {
    height:  60px;
    width:  60px;
    /* background-color:  */
    background: $primary-color url(/imgs/mtnplayer/play-button.png) no-repeat;
    background-size: cover;
    outline: none;
    cursor: pointer;
    /* float: left; */
    &.playing{
      background-color: $playing-color;
        -webkit-animation:spin 40s ease-in-out infinite;
        -moz-animation:   spin 40s ease-in-out infinite;
        animation:        spin 40s ease-in-out infinite;
    }
  }
  .mix{
    margin-left:  15px;
    .info{
      .title {
        text-transform: uppercase;
        font-size:  14pt;
      }
      .genres, .v-rating, .date{
        padding-left: 10px;
      }
      .v-rating{
        font-weight: bold;
      }
      .genres {
        color: $subdued;
      }
      .date{
        font-style: italic;
        color: $less-subdued;
      }
    }
    #progress{
      position: relative;
      overflow:  hidden;
      width: 90%;
      height: 20px;
      border-radius: 0;
      background-color: #333;
      #seeker{
        position: absolute;
        width: 100%;
        pointer-events:  none;
        height:  100px; // arbitrary high val
        border-left: 1px solid white;
        background-color:  #181818;
      }
    }
  }
}
</style>
