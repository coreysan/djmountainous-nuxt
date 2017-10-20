<template lang="pug">
  nav.navbar.navbar-custom.navbar-fixed-top(role='navigation')
    .container
      .navbar-header
        button.navbar-toggle(
          type='button'
          data-toggle='collapse'
          data-target='.navbar-main-collapse') Menu
          i.fa.fa-bars
        a.navbar-brand.page-scroll(href='#mixes')
          .name-wrapper
            svg.svg-m.svg-logo-shadow(version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='172px' height='113px' viewBox='0 0 172 113' enable-background='new 0 0 172 113' xml:space='preserve')
              path(
                fill='#000000'
                d='M38.086,66.989l10,8.69L9.285,103.787l41.212-92.271l44.646,64.421l-8.438-19.11l32.479-45.311 l41.213,92.271l-38.873-27.842l10.123-8.865L84.839,93.943L38.086,66.989z')
            svg.svg-m.svg-logo(version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='172px' height='113px' viewBox='0 0 172 113' enable-background='new 0 0 172 113' xml:space='preserve')
              path(
                fill='#FFFFFF'
                d='M38.086,66.989l10,8.69L9.285,103.787l41.212-92.271l44.646,64.421l-8.438-19.11l32.479-45.311 l41.213,92.271l-38.873-27.842l10.123-8.865L84.839,93.943L38.086,66.989z')
            .name-text #[span.light DJ] Mountainous
            .video-wrapper
              video.name-waves(autoplay loop muted controls='false')
                source(src='/videos/waves.mp4' type='video/mp4')
      .collapse.navbar-collapse.navbar-right.navbar-main-collapse
        ul.nav.navbar-nav
          li.hidden
            a(href='#page-top')
          li
            a.page-scroll(href='#mixes') Mixes
          li
            a.page-scroll(href='#about') About
          li
            a.page-scroll(href='#contact') Contact
</template>


<style lang="scss">

@import '../assets/scss/_variables';

.navbar-custom {
  margin-bottom: 0;
  border-bottom: 1px solid rgba(white, 0.3);
  text-transform: uppercase;
  font-family: "Montserrat","Helvetica Neue",Helvetica,Arial,sans-serif;
  background-color: black;

  .navbar-toggle {
    margin-top: 10px;
    padding: 4px 6px;
    font-size: 16px;
    color: white;
    &:focus,
    &:active {
      outline: none;
    }
  }
  .navbar-brand{
    font-weight: 700;
    padding: 12px 15px;

    &:focus {
      outline: none;
    }

    .name-wrapper{
      position: relative;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
      font-size: 20px;
      line-height: 29px;

      .svg-m{
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: auto;
        &.svg-logo-shadow{
          opacity: 0.8;
          top: 2px;
          left: 4px;
        }
      }

      .name-text{
        margin-left: 48px;
        letter-spacing: 1px;
      }

      .video-wrapper{
        position: absolute;
        top: -1px;
        left: 13px;
        z-index: -1;

        video.name-waves{
          max-width: 236px;
        }
      }
    }
  }

  a {
    color: white;
  }

  .nav {
    li {
      a {
        -webkit-transition: background .3s ease-in-out;
        -moz-transition: background .3s ease-in-out;
        transition: background .3s ease-in-out;
        &:hover {
          color: rgba(white, 0.8);
          outline: none;
          background-color: transparent;
        }
        &:focus,
        &:active {
          outline: none;
          background-color: transparent;
        }
      }
      &.active {
        outline: none;
        a {
          background-color: rgba(white, 0.3);
          &:hover {
            color: white;
          }
        }
      }
    }
  }

  @media(min-width:768px) {
    // padding: 20px 0;
    border-bottom: 1px solid rgba(black, 0.3);
    letter-spacing: 1px;
    // background: transparent;
    -webkit-transition: background .5s ease-in-out,padding .5s ease-in-out, border .5s ease-in-out;
    -moz-transition: background .5s ease-in-out,padding .5s ease-in-out, border .5s ease-in-out;
    transition: background .5s ease-in-out,padding .5s ease-in-out, border .5s ease-in-out;
    &.top-nav-collapse {
      padding: 0;
      background: black;
      border-bottom: 1px solid rgba(white, 0.3);
    }
  }
}

</style>
