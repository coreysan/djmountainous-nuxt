<template lang="pug">

  section.audio-player
    .row
      .col-xs-3
        .now-playing {{ playingText }}
      .col-xs-9
        .play(@click="playPause()")
        .mix
          .info
            span.title {{ currentMix.title }}
            span.genres {{ currentMix.genres }}
            span.date {{ currentMix.date }}
          #progress(@click='seek')
            #seeker


    audio#global-audio-player(ref='player')
      source(type='audio/m4a' v-bind:src='currentM4a')
      source(type='audio/mpeg' v-bind:src='currentMp3')

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
      'playingText',
      'seekPercentage',
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
        this.moveSeek();
        console.log('Moving seek');
      }, 1000);
    },
    moveSeek() {
      const $seeker = document.getElementById('seeker');
      const progressWidth = document.getElementById('progress').offsetWidth;
      $seeker.style.left = `${(progressWidth * this.seekPercentage)}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables';

.audio-player{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 0;
  padding-top: 10px;
  height: 80px;
  width: 100%;
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
    background-color: red;
    cursor: pointer;
    float: left;
  }
  .mix{
    margin-left:  100px;
    .info{
      .title {
        text-transform: uppercase;
      }
      .genres {
        padding-left: 10px;
        color: $subdued;
      }
      .date{
        padding-left: 10px;
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
        border-left: inset 5px solid white;
      }
    }
  }
}
</style>
