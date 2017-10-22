<template lang="pug">
section#about.content-section.text-center
  .about-section
    .section-gradient.top-gradient
    .section-gradient.bottom-gradient
    .inside-about
      .container
        .col-lg-8.col-lg-offset-2
          h2 About
          p Playing all sorts of bleeding edge EDM
          p From #[span.progressive deep house] to #[span.progressive trap] and from #[span.progressive tropical house] to #[span.progressive drum &amp; bass]

</template>

<style lang="scss">
@import '../assets/scss/_variables';

.about-section {
  position: relative;
  padding-top:  110px;
  width: 100%;
  color: white;
  background: url(/imgs/star-nebula-bg.jpg) no-repeat bottom center scroll;
  background-color: black;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;

  .inside-about{
    padding: 80px 0;
  }
}

@media(min-width:767px) {
  .inside-about {
      padding: 240px 0;
  }
}

</style>
