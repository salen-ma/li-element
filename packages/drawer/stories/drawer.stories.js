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
        <li-button 
          type="primary"
          @click="open('top')">Top drawer</li-button>
        <li-button 
          type="primary"
          @click="open('right')">Right drawer</li-button>
        <li-button 
          type="primary"
          @click="open('bottom')">Bottom drawer</li-button>
        <li-button 
          type="primary"
          @click="open('left')">Left drawer</li-button>    
      </div>
      <li-drawer 
        title="basic drawer"
        :visible="visible"
        :placement="placement"
        :onClose="this.close"
        :footerStyle="{
          display: 'flex',
          flexDirection: 'row-reverse'
        }">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <template v-slot:footer>
          <li-button 
            type="primary"
            @click="close"
            :style="{
              marginLeft: '10px'
            }"
          >
            确认
          </li-button>     
          <li-button @click="close">取消</li-button>
        </template>    
      </li-drawer>  
    </div>
  `,
  data () {
    return {
      visible: false,
      placement: 'top',
    }
  },
  methods: {
    open (placement) {
      this.placement = placement
      this.visible = true
    },
    close () {
      this.visible = false
    }
  }
})