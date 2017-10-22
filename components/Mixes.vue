<template lang="pug">

  #mixes.container.content-section.text-center
    .row
      section.mix-group.col-md-5.col-md-offset-1.col-sm-6.col-sm-offset-0.col-xs-10.col-xs-offset-1(
        v-for='mixGroup in mixGroups'
        v-bind:class='mixGroup.label')
        h3.mix-group__title {{ mixGroup.name }}
          div.row.no-gutter.ratings-bar.top-bar
            div.col-xs-2.rating.rating-block(
              v-for='index in 5'
              v-bind:class="{'col-xs-offset-2': index === 1 && mixGroup.label === 'intense'}"
              v-bind:data-rating='index+mixGroup.ratingAdd'
              ) V{{ index+mixGroup.ratingAdd }}

        mix-group(:mixes='mixGroup.mixes')

    .row.no-gutter.ratings-bar.bottom-bar
      .col-xs-1(
        v-for='index in 10'
        v-on:mouseover='currentRatingHover = index'
        v-on:mouseout='currentRatingHover = 0'
        v-bind:class="{'col-xs-offset-1': index === 1}")
        .v-rating {{ index }}
        .rating.rating-block(v-bind:data-rating='index')
    .row
      .col-xs-10.col-xs-offset-1.v-descriptions
        p(v-for='index in 10'
          v-bind:data-rating='index'
          v-if='index === currentRatingHover') {{ ratingDescription(index) }}
</template>

<script>
import MixGroup from '../components/MixGroup.vue';

export default {
  components: {
    'mix-group': MixGroup,
  },
  data() {
    return {
      currentRatingHover: 0,
      mixGroups: [
        {
          name: 'Strolls',
          ratingAdd: 0,
          label: 'calm',
          mixes: [
            // new mix goes here
            {
              title: 'Elfin Lakes',
              genres: 'House, Progressive, Trance',
              date: 'January 2017',
              slug: 'elfin-lakes',
              rating: 4,
            },
            {
              title: 'Helm Creek',
              genres: 'Deep House, Chilled',
              date: 'October 2016',
              slug: 'helm-creek-ambient-deep',
              rating: 1,
            },
            {
              title: 'The Eiger',
              genres: 'Tech House',
              date: 'Sept 2016',
              slug: 'va-tech-house',
              rating: 3,
            },
            {
              title: 'Garibaldi',
              genres: 'Deep House',
              date: 'June 2016',
              slug: 'va-deep-house-v2',
              rating: 2,
            },
          ],
        },
        {
          name: 'Scrambles',
          ratingAdd: 5,
          label: 'intense',
          mixes: [
            // new mix goes here
            {
              title: 'Blueprint 19th Warmup',
              genres: 'Rezz Griz Grime W.S.N DFrancis',
              date: 'October 2016',
              slug: 'blueprint-19-warmup',
              rating: 9,
            },
            {
              title: 'Live @ BirthRave 2016',
              genres: 'Bass Funk, Trap, Dub',
              date: 'Sept 24, 2016',
              slug: 'live-birthrave-2016-bass-funk-dub',
              rating: 8,
            },
            {
              title: 'Black Tusk',
              genres: 'Trap & Dubstep',
              date: 'August 2016',
              slug: 'va-dubtrap',
              rating: 9,
            },
            {
              title: 'Seven Lions warmup',
              genres: 'Dreamstep',
              date: 'October 2016',
              slug: 'seven-lions-warm-up-mix',
              rating: 7,
            },
          ],
        },
      ],
      ratingDescriptions: [
        '', // no zero index in the v-ratings
        'Smooth and soft, a meandering river. Pleasant sounds bordering on ambient.',
        'Deep beats and vocal tunes with the occassional rock or root.',
        'Tech house dives into the deep for gentle hill climbs.',
        'Lyrical segments blend with building intensity, stopping short of the bluffs.',
        'Find the party here. Crowd-pleasing deep-house, hip-hop and pop tunes belt out the cabin window.', // 5
        'Pop standing at the gates of the underworld. Purgatory\'s playlist. Tempted by the summit.',
        'Try not dancing to these tunes. Occasional climaxes interspersed with funk, hip hop, and cliff edge.',
        'Heavy tunes fit for the main stage. Vocal hooks and trail-running, pumping bass.', // 8
        'Drop after drop after drop, no holds barred. Vocal tunes get some play. Don\'t look down.',
        'The North face. You might have climbed too high, but frostbite isn\'t a problem here.', // 10
      ],
    };
  },
  methods: {
    ratingDescription(index) {
      return this.ratingDescriptions[index];
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/_variables';

#mixes{

  .mix-group{
    &__title{
      font-size: 13pt;
      font-weight: normal;
    }
  }

  h3{
    margin-bottom: 10px;
  }

  p{
    font-size: 12pt;
    color: #ccc;
    margin-bottom: 5px;
  }

  .ratings-bar {
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 20px;

    &.top-bar{
      height: 1px;
      opacity: 0.3;
    }

    &.bottom-bar{
      margin-top: 70px;
      margin-bottom: 0px;
      height: 40px;

       > div:hover{
        .v-rating{
          color: white;
        }

        .rating-block{
          opacity: 1 !important;
        }
      }

      > div{
        cursor: pointer;
      }

      .rating-block{
        opacity: 0.5;
      }
      .v-rating{
        text-align: center;
        letter-spacing: 2px;
        color: #ddd;
      }
    }

    .rating{
      border-right: 1px solid black;
    }

    .rating-block{
      height: 25px;
      overflow: hidden;
    }

    .rating-block[data-rating="1"], .rating-bg[data-rating="1"] { background-color: $rating-1-color; }
    .rating-block[data-rating="2"], .rating-bg[data-rating="2"] { background-color: $rating-2-color; }
    .rating-block[data-rating="3"], .rating-bg[data-rating="3"] { background-color: $rating-3-color; }
    .rating-block[data-rating="4"], .rating-bg[data-rating="4"] { background-color: $rating-4-color; }
    .rating-block[data-rating="5"], .rating-bg[data-rating="5"] { background-color: $rating-5-color; }
    .rating-block[data-rating="6"], .rating-bg[data-rating="6"] { background-color: $rating-6-color; }
    .rating-block[data-rating="7"], .rating-bg[data-rating="7"] { background-color: $rating-7-color; }
    .rating-block[data-rating="8"], .rating-bg[data-rating="8"] { background-color: $rating-8-color; }
    .rating-block[data-rating="9"], .rating-bg[data-rating="9"] { background-color: $rating-9-color; }
    .rating-block[data-rating="10"], .rating-bg[data-rating="10"] { background-color: $rating-10-color; }
  }

  .v-descriptions{
    height: 30px;
    padding-top: 10px;
  }
  .mix-group{
    margin-top: 20px;
  }

  .calm{
    text-align: left;
    .intense-only{
      display: none;
    }
  }

  .intense{
    text-align: right;
    .mix{
      text-align: right;
      .audio-controls{
        float: right;
      }
      .mix__details{
        margin-right: 50px;
        margin-left: 0;
      }
    }
  }
}

</style>
