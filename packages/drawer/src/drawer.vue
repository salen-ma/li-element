<template>
  <div
    class="li-drawer"
    :class="[
      `li-drawer--${placement}`,
      {
        'li-drawer--open': visible
      }
    ]"
  >
    <div class="li-drawer-mask"></div>
    <div 
      class="li-drawer-content" 
      :style="{
        width: width + 'px'
      }"
    >
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LiDrawer',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'right'
    },
    width: {
      type: Number,
      default: 500
    }
  },
}
</script>

<style lang='scss'>
.li-drawer {
  position: fixed;
  z-index: 1000; 
  &--top {
    top: 0;
    .li-drawer-content {
      top: 0;
    }
  }
  &--right {
    right: 0;
    .li-drawer-content {
      right: 0;
    }
  }
  &--bottom {
    bottom: 0;
    .li-drawer-content {
      bottom: 0;
    }
  }
  &--left {
    left: 0;
    .li-drawer-content {
      left: 0;
    }
  }
  &--left, &--right{
    top: 0;
    height: 100%;
  }
  &--top, &--bottom{
    left: 0;
    width: 100%;
  }
  &--open {
    width: 100%;
    .li-drawer-mask {
      height: 100%;
      opacity: 1;
      -webkit-transition: none;
      transition: none;
      -webkit-animation: antdDrawerFadeIn .3s cubic-bezier(.7,.3,.1,1);
      animation: antdDrawerFadeIn .3s cubic-bezier(.7,.3,.1,1);
      pointer-events: auto;
    }
  }
}
.li-drawer-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: rgba(0,0,0,.45);
  opacity: 0;
  filter: alpha(opacity=45);
  -webkit-transition: opacity .3s linear,height 0s ease .3s;
  transition: opacity .3s linear,height 0s ease .3s;
  pointer-events: none;
}
.li-drawer-content {
  position: absolute;
  background: #ffffff;
  height: 100%;
}
</style>
