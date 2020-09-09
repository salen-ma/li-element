import LiDrawer from '../'
import LiButton from '../../button'

export default {
  title: 'LiDrawer',
  component: LiDrawer
}

export const Drawer = () => ({
  components: { LiDrawer, LiButton },
  template: `
    <div>
      <div class="row li-button">
        <li-button type="primary"
          @click="open">Open drawer</li-button>
      </div>
      <li-drawer :visible="visible" />
    </div>
  `,
  data () {
    return {
      visible: false
    }
  },
  methods: {
    open () {
      this.visible = true
    }
  }
})