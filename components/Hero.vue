<template lang="pug">
  header.intro
    img.hero.img-responsive(
      src='/imgs/mountainous-banner-1.3.jpg'
      al='dj mountainous banner image')
    .section-gradient.bottom-gradient
      #mix.mix-bar
</template>

<style lang="scss">

header .section-gradient{
  height: 140px;
}

.intro {
  display: table;
  position: relative;
  margin-top: 50px;
  width: 100%;
  text-align: center;
  color: white;

  #mix{
    height: 10px;
    width: 100%;
    top: 150px;
    position: absolute;
  }

  @media(min-width:768px) {
    padding: 0;
    .intro-body {
      .brand-heading {
        font-size: 100px;
      }
      .intro-text {
        font-size: 26px;
      }
    }
  }
}

</style>
