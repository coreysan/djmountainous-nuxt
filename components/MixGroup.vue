<template lang="pug">
div
  section.mix.audio-player(
    v-for='mix in mixes'
    v-bind:id='mix.slug'
    v-bind:class='mix.slug'
    v-bind:data-rating='mix.rating')
    h3 {{ mix.title }}

    .row.no-gutter
      .col-xs-2.intense-only
      .col-xs-10
        .progress-bar.rating-bg
          .buffer
          .played
    .times
      span.current-time
      span.divider
      span.mix-length

    .audio-controls
      .audio-controls__background.start-position
      .play-pause

    .mix__details
      .genres.progressive #[span.rating(v-bind:data-rating='mix.rating') V{{ mix.rating }}] {{ mix.genres }}
      div
        span.date.way-subdued {{ mix.date }}
        span.downloads
          a.download(download
            v-bind:href="audioFilePath(mix.slug, 'mp3')") mp3
      div.fb-like(
            v-bind:data-href='mixLink(mix.slug)'
            data-width='300'
            data-layout='button'
            data-action='like'
            data-colorscheme='light'
            data-size='small'
            data-show-faces='true'
            data-share='true')
    audio
      source(type='audio/m4a'
        v-bind:src="audioFilePath(mix.slug, 'm4a')")
      source(type='audio/mpeg'
        v-bind:src="audioFilePath(mix.slug, 'mp3')")
</template>

<script>

export default {
  props: {
    mixes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
    };
  },
  methods: {
    audioFilePath(slug, ext) {
      return `${this.baseUrl}/mixes/dj-mountainous-${slug}.${ext}`;
    },
    mixLink(slug) {
      return `${this.baseUrl}/?${slug}#mix`;
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/_variables';

 /* Animations for the pause button */
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

/* AUDIO PLAYER */
.audio-player{
  text-align: left;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 40px;

  h3 {
    margin-bottom: 10px;
  }

  &.playing{
    .audio-controls{
      .play-pause{
        background-image: url(/imgs/mtnplayer/pause-button.png);

        /* -webkit-transform:  rotate(90deg); */
        /* transform:          rotate(90deg); */
        /* -moz-transform:     rotate(90deg); */

        -webkit-animation:spin 40s ease-in-out infinite;
        -moz-animation:   spin 40s ease-in-out infinite;
        animation:        spin 40s ease-in-out infinite;
      }
      &__background{
        background-color: $playing-color;
      }
    }

    .progress-bar{
      background-color: #222;
    }

    .times{
      display: block;
      .current-time, .mix-length{
        color: #eee;
      }
    }
  }

  .audio-controls{
    width: 48px;
    height: 48px;
    margin-top: 0;
    position: relative;
    float: left;
    overflow: hidden;

    .play-pause, &__background{
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .play-pause{
      cursor: pointer;
      background: url(/imgs/mtnplayer/play-button.png) no-repeat;
      background-size: cover;
      outline: none;
    }
    &__background{
      border-radius: 50%;
      width: 95%;
      height: 95%;
      top: 1px;
      left: 1px;
      background-color: $primary-color;
      /* remove start-position when page loads to fade play button in. */
      transition: 4s background-color;
      &.start-position{
        /* background-color: black; */
      }
    }
  }

  .progress-bar{
    height: 2px;
    width: 100%;
    background-color: #000;
    position: relative;
    transition: 120ms all;
    &.expanded{
      height: 10px;
      cursor: pointer;
      .played{
        background-color: #0f0;
        border-right: 2px solid white;
      }
    }

    .played, .buffer{
      position: absolute;
      height: 100%;
      pointer-events: none;//don't capture events in JS
    }

    .played{
      border-right: 0;
      width: 0%;
      background-color: #030;
    }
    .buffer{
      background-color: #999;
      width: 0%;
    }
  }

  .times{
    display: none;
    margin-bottom: 10px;
    margin-top: 5px;
    .current-time,.mix-length{
      color: #555;
    }
    .divider{
      display: none;
      color: #666;
    }
  }

  .mix__details{
    margin-left: 55px;

    .h3,
    .h5{
      font-weight: normal;
    }

    .genres{
      margin-top: 4px;
    }

    .date{
      font-style: italic;
      margin-right: 10px;
    }

    .rating{
      cursor: pointer;
    }

    .downloads a{
      color: $primary-subdued-color;
    }

    .fb-like{
      opacity: 0.8;
      margin-top: 5px;
    }
  }

  /* mix-ratings */
  .rating{
    color: white;
  }

  &[data-rating="1"]  .rating{ color: $rating-1-color; }
  &[data-rating="2"]  .rating{ color: $rating-2-color; }
  &[data-rating="3"]  .rating{ color: $rating-3-color; }
  &[data-rating="4"]  .rating{ color: $rating-4-color; }
  &[data-rating="5"]  .rating{ color: $rating-5-color; }
  &[data-rating="6"]  .rating{ color: $rating-6-color; }
  &[data-rating="7"]  .rating{ color: $rating-7-color; }
  &[data-rating="8"]  .rating{ color: $rating-8-color; }
  &[data-rating="9"]  .rating{ color: $rating-9-color; }
  &[data-rating="10"] .rating{ color: $rating-10-color; }
}

</style>
