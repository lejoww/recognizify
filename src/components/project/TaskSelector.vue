<template>
    <div class="taskSelectorContainer">
        <button :class="isDone ? 'taskSelectorDone taskSelectorDoneConfirmed' : 'taskSelectorDone'" id="taskSelectorDone" @click="setDoneTask"></button>
        <span class="taskName">{{task}}</span>
        <p :class="isDone ? 'taskStatus taskStatusDone' : 'taskStatus' ">{{isDone ? 'Completada' : publisher}}</p>
    </div>
</template>
<style scoped>
    
    .taskSelectorContainer {
        width: 100%;
        padding: 12px 21px;
    }

    .taskSelectorContainer:hover {
        background: #f3f3f3;
    }

    .taskName {
        font-weight: 900;
        letter-spacing: -0.5px;
        font-size: 14px
    }

    .taskStatus {
        font-size: 12px;
        padding: 0;
        margin: 0;
        color: rgb(184, 190, 196);
    }

    .taskSelectorDone {
        width: 16px;
        height: 16px;
        border-radius: 9px;
        border: 1px solid #ccc;
        margin-right: 12px;
    }

    .taskSelectorDoneConfirmed {
        background: #00c954;
        border: none
    }

    .taskStatusDone {
        color: #00c954
    }

</style>
<script>

    import firebase from 'firebase'
    import { AddPoints } from '@/assets/scripts/addActivityPoints.js'
    export default {
        props: [
            'task',
            'publisher',
            'id',
            'isDone'
        ],
        mixins: [AddPoints],
        methods: {
            setDoneTask: function(){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('tasks')
                .doc(this.id)
                .update({
                    isDone: true
                })
                .then(() => {
                    document.getElementById('taskSelectorDone').classList.add('taskSelectorDoneConfirmed')
                    this.publisher = 'Completada'
                })
                .catch((err) => console.err(err))
            }
        }
    }

</script>