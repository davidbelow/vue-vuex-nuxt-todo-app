<template>
  <div>
    <form class="pa3 pa5-ns" @submit.prevent="add(task)">
      <input v-model="task" type="text">
      <input type="submit" value="Add">
    </form>

    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Todos</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="flex items-center ph3 pv3 bb b--light-silver">
          <span v-bind:class="{strike: todo.complete}" class="flex-auto">{{todo.id}}. {{todo.task}}</span>
          <button @click="toggle(todo)"><img src="https://icon.now.sh/check" alt=""></button>
          <button @click="remove(todo)"><img src="https://icon.now.sh/trash" alt=""></button>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import axios from 'axios'

export default {
  // the expierence is everything is ready
  // async fetch ({store, redirect}) {
  //   try {
  //     const res = await axios.get('https://todos-cuvsmolowg.now.sh/todos')
  //     store.commit('init', res.data)
  //   } catch (error) {
  //     // store.commit('init', [])
  //     redirect('/error')
  //   }
  // },

  async fetch ({store, redirect, error}) {
    try {
      const res = await axios.get('https://todos-cuvsmolowg.now.sh/todos')
      store.commit('init', res.data)
    } catch (err) {
      error({statusCode: 500, message: 'Oops, try again'})
    }
  },

  // the expierence is to see first todos and then the data is loaded
  // async created () {
  //   const res = await axios.get('https://todos-cuvsmolowg.now.sh/todos')
  //   // use `this.$store` because the context isn't passed to `created()`
  //   this.$store.commit('init', res.data)
  // },

  // fetch: init,

  data () {
    return {
      task: 'some task'
    }
  },

  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },

  methods: {
    ...mapActions([
      'add',
      'remove',
      'toggle'
    ])
  }
}
</script>
