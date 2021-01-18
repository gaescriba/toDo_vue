<template>
  <div class="home container auto mx-auto mt-5">
    <div>
      <h3>Task name:</h3>
      <b-form-input  v-model="obj.newTitle"></b-form-input>
      <h4>Description:</h4>
      <b-form-input  v-model="obj.newDescription"></b-form-input>
      <b-form-group >
        <b-form-radio v-model="obj.isCompleted" value="true">Done</b-form-radio>
        <b-form-radio v-model="obj.isCompleted" value="false" checked="">In Progress</b-form-radio>
      </b-form-group>
      <b-button block variant="primary mt-3" @click="addTask(obj)">Add task</b-button>
    </div>
    <h1>Tasks:</h1>
    <Task/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>

import Task from '@/components/Task.vue'
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    Task
  },
  computed:{
    ...mapState(['obj'])
  },
  methods:{
    ...mapMutations(['addTask'])
  }
}
</script>
