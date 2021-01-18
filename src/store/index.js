import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[
      {id: 0, title: 'Learn Vue', description: 'Get on the laptop and learn',  isCompleted: false},
      {id: 1, title: 'Excercise', description: 'Grab the bike, start riding', isCompleted: false},
      {id: 2, title: 'Fishing', description: 'Try to not catch a cold', isCompleted: false}
    ],
    obj:{
    newId: -1,
    newTitle: '',
    newDescription: '',
    isCompleted:false
    } 
  },
  mutations: {
    deleteTask(state,id){
      console.log()
      state.tasks = state.tasks.filter((task)=> task.id != id)
    },
    toggleCompletion(state,id){
      let task = state.tasks.filter((task)=> task.id === id)
      task[0].isCompleted = !task[0].isCompleted
    },
    addTask(state,obj){
      let lastTask = state.tasks.slice(-1)
      let newId = lastTask[0].id + 1
      obj.newId = newId
      obj.isCompleted === 'true' ? obj.isCompleted = true : obj.isCompleted = false
      state.tasks.push({
        id: obj.newId,
        title: obj.newTitle,
        description: obj.newDescription,
        isCompleted: obj.isCompleted
      })
      obj.newTitle = ''
      obj.newDescription = ''
    },
    getTask(state,id){
      let task = state.tasks.filter((task)=> task.id === id)
      return task
    },
    editTask(state,obj){
      console.log('in edit function')
      let task = state.tasks.filter((task)=> task.id === obj.id)
      console.log(obj.id)
      console.log(obj.title)
      console.log(obj.description)
      task[0].title = obj.title
      task[0].description = obj.description
    }

  },
  actions: {
  },
  modules: {
  }
})
