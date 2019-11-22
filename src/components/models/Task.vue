<template>
    <div class="taskCard">
        <p class="taskToDo">{{this.todo}}</p>
        <span class="taskPublisher">{{this.publisher}}</span>
    </div>
</template>
<script>
    
    export default {
        props: [
            'todo',
            'publisher'
        ]
    }

</script>