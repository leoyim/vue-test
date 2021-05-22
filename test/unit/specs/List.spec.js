import List from '@/components/List'
import Vue from 'vue'

describe('List.vue', () => {
  it('displays items from the list', () => {
    // our test goes here
    // build component
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    // assert that component text contains items from the list
    expect(ListComponent.$el.textContent).to.contain('play games')
  })

  it('adds a new item to list on click', () => {
    // our test goes here
    // build component
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    // set value of todoItem
    ListComponent.todoItem = 'brush my teeth'
    // find button
    const button = ListComponent.$el.querySelector('button')
    // simulate click event
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    // run the watcher
    ListComponent._watcher.run()
    // assert list contains new item
    expect(ListComponent.$el.textContent).to.contain('brush my teeth')
    expect(ListComponent.listItems).to.contain('brush my teeth')
  })
})
