import LiDrawer from './src/drawer.vue'

LiDrawer.install = Vue => {
  Vue.component(LiDrawer.name, LiDrawer)
}

export default LiDrawer