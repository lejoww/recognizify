<template>
    <div class="taskCard">
        <p class="taskToDo">{{this.todo}}</p>
        <div class="taskBottom">
            <div class="taskPublisher">
                <div class="taskPublisherProfile" id="taskPublisherProfile"></div>
                <span class="">{{this.publisher}}</span>
            </div>
            <span>
                <svg class="feather-like-options">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#thumbs-up" />
                </svg>

                <svg class="feather-like-options">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#thumbs-down" />
                </svg>
            </span>
        </div>
    </div>
</template>
<script>
    
    export default {
        props: [
            'todo',
            'publisher'
        ],
    }

</script>