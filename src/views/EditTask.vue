<template>
    <div class="container mt-5">
        <b-form>
            <b-form-group>
                <h3>Title</h3>
                <b-form-input class="mt-3" v-model="obj.title"></b-form-input>
                <h4>Description</h4>
                <b-form-textarea v-model="obj.description"></b-form-textarea>
                <b-button class="mt-3" size="big" variant="success" @click="editTask(obj)" to="/">Save changes</b-button>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name:'Edit',
    data(){
        return{
            obj:{
            id: 0,
            title: '',
            description: ''
            }
        }
    },
    computed:{
        ...mapState(['tasks'])
        
    },
    methods:{
        ...mapMutations(['editTask']),
    },
    mounted(){
        let task = this.tasks.filter((task)=> task.id === parseInt(this.$route.params.id))
        this.obj.title = task[0].title
        this.obj.description = task[0].description
        this.obj.id = task[0].id
    }
}
</script>