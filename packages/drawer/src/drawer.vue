<template>
  <transition
    name="el-drawer-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    <div
      v-show="visible"
      class="li-drawer"
      :class="[
        `li-drawer--${placement}`,
        {
          'li-drawer--open': visible
        }
      ]"
    >
      <div 
        class="li-drawer-mask"
        :style="maskStyle"
        @click.self="close"
      ></div>
      <div 
        class="li-drawer-content" 
        :style="{
          ...contentStyle,
          ...drawerStyle
        }"
      >
        <div v-if="title"
          class="li-drawer-header"
          :style="headerStyle"
        >
          {{ title }}
        </div>
        <slot name="title"></slot>
        <div
          class="li-drawer-body"
          :style="bodyStyle"
        >
          <slot></slot>
        </div>
        <div
          v-if="this.$slots.footer"
          class="li-drawer-footer"
          :style="footerStyle"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>  
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
      default: 300
    },
    height: {
      type: Number,
      default: 220
    },
    onClose: {
      type: Function
    },
    title: {
      type: String
    },
    maskStyle: {
      type: Object,
      default: () => {}
    },
    headerStyle: {
      type: Object,
      default: () => {}
    },
    bodyStyle: {
      type: Object,
      default: () => {}
    },
    drawerStyle: {
      type: Object,
      default: () => {}
    },
    footerStyle: {
      type: Object,
      default: () => {}
    },
  },

  computed: {
    contentStyle () {
      if (this.placement === 'left' || this.placement === 'right') {
        return {
          width: this.width + 'px',
          height: '100%',
        }
      }

      if (this.placement === 'top' || this.placement === 'bottom') {
        return {
          width: '100%',
          height: this.height + 'px',
        }
      }
    }
  },

  methods: {
    afterEnter() {
      this.$emit('opened');
    },
    afterLeave() {
      this.$emit('closed');
    },
    close () {
      this.$emit('update:visible', false);
      this.onClose && this.onClose()	
    }
  }
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
    height: 100%;
    .li-drawer-mask {
      height: 100%;
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
  transition: opacity .3s;
  pointer-events: none;
}
.li-drawer-content {
  position: absolute;
  background: #ffffff;
  height: 100%;
  transition: all .3s;
  .li-drawer-header {
    padding: 16px 24px;
    border-bottom: 1px solid #f0f0f0;
  }
  .li-drawer-body {
    padding: 16px 24px;
  }
  .li-drawer-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 16px 24px;
    border-top: 1px solid #f0f0f0;
  }
}

.el-drawer-fade-enter-active, .el-drawer-fade-leave-active {
  transition: .3s;
  .li-drawer-mask {
    opacity: 1;
  }
  &.li-drawer--right {
    .li-drawer-content {
      transform: translateX(0) translateY(0);
    }
  }
}
.el-drawer-fade-enter, .el-drawer-fade-leave-to {
  .li-drawer-mask {
    opacity: 0;
  }
  &.li-drawer--top {
    .li-drawer-content {
      transform: translateY(-100%);
    }
  }
  &.li-drawer--right {
    .li-drawer-content {
      transform: translateX(100%);
    }
  }
  &.li-drawer--bottom {
    .li-drawer-content {
      transform: translateY(100%);
    }
  }
  &.li-drawer--left {
    .li-drawer-content {
      transform: translateX(-100%);
    }
  }
}
</style>
