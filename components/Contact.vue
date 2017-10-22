<template lang="pug">
  section#contact.container.content-section.text-center
    h2 Contact
    p Chat with me to book a party
    p
      a(href="tel:6046524660") 604-652-4660
    ul.list-inline.banner-social-buttons
      li
        a.btn.btn-default.btn-lg(href="https://www.soundcloud.com/djmountainous/")
          i.fa.fa-soundcloud.fa-fw
          span.network-name SoundCloud
      li
        a.btn.btn-default.btn-lg(href="https://facebook.com/djmountainous")
          i.fa.fa-facebook.fa-fw
          span.network-name Facebook
</template>

<style lang="scss">
@import '../assets/scss/_variables';

.btn {
  text-transform: uppercase;
  font-family: "Montserrat","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 400;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
  border-radius: 0;
}

.btn-default {
  border: 1px solid $primary;
  color: $primary;
  background-color: transparent;
  &:hover,
  &:focus {
    border: 1px solid $primary;
    outline: none;
    color: black;
    background-color: $primary;
  }
}

ul.banner-social-buttons {
  margin-top: 0;
  margin-bottom: 10px;

  li{
    margin-bottom: 16px;
  }

  @media(max-width:1199px) {
      margin-top: 15px;
  }
  @media(max-width:1000px) {
    li {
      display: block;
      margin-bottom: 20px;
      padding: 0;
      &:last-child {
          margin-bottom: 0;
      }
    }
  }
}

</style>
