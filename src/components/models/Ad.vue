<template>
    <div class="taskCard">
        <p class="taskToDo">{{this.todo}}</p>
        <div class="taskBottom">
            <div class="taskPublisher">
                <div class="taskPublisherProfile">
                    <img src="@/assets/ilustrations/profile.png" class="taskPublisherProfilePicture" id="taskPublisherProfilePicture">
                </div>
                <span class="">{{this.publisher}}</span>
            </div>
            <!-- <span>
                <svg class="feather-like-options">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#thumbs-up" />
                </svg>

                <svg class="feather-like-options">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#thumbs-down" />
                </svg>
            </span> -->
        </div>
    </div>
</template>
<script>
    
    import firebase from 'firebase';
    export default {
        props: [
            'todo',
            'publisher',
            'id'
        ],
        created: function(){
            firebase.storage().ref(`/profile_photos/${this.id}`).getDownloadURL()
                .then(url => document.getElementById('taskPublisherProfilePicture').setAttribute('src', url))
        }
    }

</script>