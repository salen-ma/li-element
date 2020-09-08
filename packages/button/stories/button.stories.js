import LiButton from '../'

export default {
  title: 'LiButton',
  component: LiButton
}

export const Button = () => ({
  components: { LiButton },
  template: `
    <lg-button>默认按钮</lg-button>
  `
})