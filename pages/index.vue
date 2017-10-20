<template lang="pug">
  section
    Navigation
    Hero
    Waves
    Mixes
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Hero from '../components/Hero.vue';
import Waves from '../components/Waves.vue';
import Mixes from '../components/Mixes.vue';

export default {
  components: {
    Navigation,
    Hero,
    Waves,
    Mixes,
  },
};
</script>

<style lang="scss">
@import '../assets/scss/_variables';

body {
  width: 100%;
  height: 100%;
  color: white;
  background-color: black;
  -webkit-tap-highlight-color: rgba(white, 0.2);
}

html {
  width: 100%;
  height: 100%;
}

body,
{
  font-family: "Lora","Helvetica Neue",Helvetica,Arial,sans-serif;
}

h1,h2,h3,h4,h5,h6,
.mix,
.navbar-custom,
.btn,
.downloads,
.bottom-bar {
  font-family: "Montserrat","Helvetica Neue",Helvetica,Arial,sans-serif;
}


h1,h2,h3,h4,h5,h6{
  margin: 0 0 35px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
}

p {
  margin: 0 0 25px;
  font-size: 18px;
  line-height: 1.5;
  @media(min-width:768px) {
    margin: 0 0 35px;
    font-size: 20px;
    line-height: 1.6;
  }
}

a {
  color: $primary;
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  &:hover,
  &:focus {
    text-decoration: none;
    color: darken($primary,20%);
  }
}

.light {
  font-weight: 400;
}

.content-section {
  padding-top: 200px;
  &#mixes{
    padding-top: 40px;
  }
}

.section-gradient{
  position:absolute;
  left: 0;
  width: 100%;
  height: 160px;
  &.top-gradient{
    top: 0;
    background: -moz-linear-gradient(top,  rgba(0,0,0,1) 0%, rgba(0,0,0,0.02) 99%, rgba(0,0,0,0.01) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(0,0,0,1) 0%,rgba(0,0,0,0.02) 99%,rgba(0,0,0,0.01) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(0,0,0,1) 0%,rgba(0,0,0,0.02) 99%,rgba(0,0,0,0.01) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
  &.bottom-gradient{
    bottom: 0;
    background: -moz-linear-gradient(top,  rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 1%, rgba(0,0,0,0.99) 99%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(0,0,0,0.01) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.99) 99%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(0,0,0,0.01) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.99) 99%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
}

.no-gutter > [class*='col-'] {
  padding-right:0;
  padding-left:0;
}

</style>
