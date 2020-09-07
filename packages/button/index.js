import LiButton from './src/button.vue'

LiButton.install = Vue => {
  Vue.component(LiButton.name, LiButton)
}

export default LiButton