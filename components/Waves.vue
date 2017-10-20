<template lang="pug">
  section#waves
    div.row.no-gutter.wave-row
      div.col-xs-6
        div.wave-wrapper
          video#video-left.section-waves.left(autoplay loop muted)
            source(src='/videos/waves.mp4' type='video/mp4')
          div.wave-gradient.left-gradient
      div.col-xs-6
        div.wave-wrapper
          video#video-right.section-waves.right.rev(autoplay loop muted)
            source(src='/videos/waves.mp4' type='video/mp4')
          div.wave-gradient.right-gradient
      h2.mixes-title Mixes
</template>

<style lang="scss">

section#waves{
  position: relative;

  .mixes-title{
    position: absolute;
    width: 100%;
    top: 45%;
    transform: translateY(-50%);

    text-align: center;
    margin-bottom: 0;
  }

  .wave-row{
    width: 100%;
    margin: 0;
    .wave-wrapper{
      overflow: hidden;
      position: relative;

      .wave-gradient{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
      .left-gradient{
        background: -moz-linear-gradient(left,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 99%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 30%,rgba(0,0,0,1) 99%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 30%,rgba(0,0,0,1) 99%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }
      .right-gradient{
        background: -moz-linear-gradient(left,  rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  rgba(0,0,0,1) 0%,rgba(0,0,0,0) 70%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  rgba(0,0,0,1) 0%,rgba(0,0,0,0) 70%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }

      video.section-waves{
        width: 100% !important;
        height: auto;

        &.left{
          left: 3px;
        }
        &.right{
          left: -3px;
        }
        &.rev{
          -moz-transform: scaleX(-1);
          -o-transform: scaleX(-1);
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
          filter: FlipH;
          -ms-filter: "FlipH";
        }
      }
    }
  }
}
</style>
