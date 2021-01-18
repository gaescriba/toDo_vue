<template>
    <div class="container text-center">
        <b-card-group deck style="justify-content:center">
            <b-row v-for="(task) in tasks" :key="task.id">
                <b-card
                :bg-variant='setBgVariant(task.isCompleted)'
                :text-variant="setTxtVariant(task.isCompleted)"
                :header="task.title"
                style="max-width: 20rem;"
                class="mb-2 text-center m-4">
                    <b-card-text>{{task.description}}<br/>[ {{markAsComplete(task.isCompleted)}} ]</b-card-text>
                    <b-button 
                    pill 
                    variant="warning" 
                    size ="sm" 
                    class ="m-1" 
                    :to="{name: 'Edit', params: {id:task.id}}">
                        Edit
                    </b-button>
                    <b-button 
                    pill 
                    :variant="setBtnVariant(task.isCompleted)" 
                    size ="sm" 
                    class ="m-1" 
                    @click="toggleCompletion(task.id)">
                        {{completion(task.isCompleted)}}
                    </b-button>
                    <b-button 
                    pill 
                    variant="danger"  
                    size ="sm" 
                    class ="m-1" 
                    @click="deleteTask(task.id)">
                        Delete
                    </b-button>
                </b-card>
            </b-row>
        </b-card-group>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    name: 'Task',
    data(){
        return{
            completed:''
        }
    },
    methods: {
        ...mapMutations(['deleteTask','toggleCompletion']),
        setBgVariant(isCompleted){
            let bgVariant = ''
            !isCompleted? bgVariant = 'light' : bgVariant = 'dark'
            return bgVariant
        },
        setTxtVariant(isCompleted){
            let bgVariant = ''
            !isCompleted? bgVariant = 'dark' : bgVariant = 'light'
            return bgVariant
        },
        setBtnVariant(isCompleted){
            let bgVariant = ''
            isCompleted? bgVariant = 'light' : bgVariant = 'dark'
            return bgVariant
        },
        completion(isCompleted){
            let wrd = ''
            isCompleted ? wrd = 'In progress' : wrd = 'Done'
            return wrd
        },
        markAsComplete(isCompleted){
            let wrd = ''
            !isCompleted ? wrd = 'In progress' : wrd = 'Done'
            return wrd
        }
    },
    computed:{
        ...mapState(['tasks']),

    },
}
</script>