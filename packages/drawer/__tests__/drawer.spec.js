import drawer from '../src/drawer.vue'
import { shallowMount } from '@vue/test-utils'

describe('li-drawer', () => {
  test('drawer title', () => {
    const wrapper = shallowMount(drawer, {
      propsData: {
        title: "basic drawer"
      }
    })
    expect(wrapper.html()).toContain('basic drawer')
  })

  test('drawer snapshot', () => {
    const wrapper = shallowMount(drawer, {
      propsData: {
        title: "basic drawer",
        visible: true
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})