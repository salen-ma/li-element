import LiButton from '../'

export default {
  title: 'LiButton',
  component: LiButton
}

export const Button = () => ({
  components: { LiButton },
  template: `
    <div>
      <div class="row li-button">
        <li-button type="primary">按钮</li-button>
        <li-button type="success">按钮</li-button>
        <li-button type="info">按钮</li-button>
        <li-button type="warning">按钮</li-button>
        <li-button type="danger">按钮</li-button>
      </div>
      <div class="row">
        <li-button plain>按钮</li-button>
        <li-button plain type="primary">按钮</li-button>
        <li-button plain type="success">按钮</li-button>
        <li-button plain type="info">按钮</li-button>
        <li-button plain type="warning">按钮</li-button>
        <li-button plain type="danger">按钮</li-button>
      </div>
      <div class="rowbu">
        <li-button round plain>按钮</li-button>
        <li-button round plain type="primary">按钮</li-button>
        <li-button round plain type="success">按钮</li-button>
        <li-button round plain type="info">按钮</li-button>
        <li-button round plain type="warning">按钮</li-button>
        <li-button round plain type="danger">按钮</li-button>
      </div>
      <div class="row">
        <li-button icon="el-icon-check" circle plain></li-button>
        <li-button icon="el-icon-check" circle plain type="primary"></li-button>
        <li-button icon="el-icon-check" circle plain type="success"></li-button>
        <li-button icon="el-icon-check" circle plain type="info"></li-button>
        <li-button icon="el-icon-check" circle plain type="warning"></li-button>
        <li-button icon="el-icon-check" circle plain type="danger"></li-button>
      </div>
    </div>
  `
})