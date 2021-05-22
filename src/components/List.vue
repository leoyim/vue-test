<template>
    <div>
        <h1>TODO List</h1>
        <input v-model="todoItem" placeholder="todo"/><button @click="add">add</button>
        <ul>
            <li v-for="(item,index) in listItems" :key="item+index">{{ item }}<span @click="del(item)" style="color: red">×</span></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
      todoItem: ''
    }
  },
  methods: {
    add () {
      this.listItems.push(this.todoItem)
      this.todoItem = ''
      console.info('success')
    },
    del (value) {
      let index = this.listItems.indexOf(value)
      this.listItems = this.listItems.slice(0, index).concat(this.listItems.slice(index + 1, this.listItems.length))
    }
  }
}
</script>

<style>
li {
    width: 250px;
    margin: 3px auto;
    list-style: none;
}
</style>
