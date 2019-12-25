<template>
    <div class="shortcutsContainer">
        <a :href="`/dashboard/project/${this.$route.params.projectId}/goals`" class="shortcutCard">
            <svg class="feather-shortcut">
                <use xlink:href="@/assets/svg/feather-sprite.svg#flag" />
            </svg>
            <h4>Goals</h4>
            <small>Sigue tus metas</small>
        </a>
        <a :href="`/dashboard/project/${this.$route.params.projectId}/tasks`" class="shortcutCard">
            <svg class="feather-shortcut">
                <use xlink:href="@/assets/svg/feather-sprite.svg#clock" />
            </svg>
            <h4>Tasks</h4>
            <small>Administra tareas</small>
        </a>
        <a :href="`/dashboard/project/${this.$route.params.projectId}/board`" class="shortcutCard">
            <svg class="feather-shortcut">
                <use xlink:href="@/assets/svg/feather-sprite.svg#message-square" />
            </svg>
            <h4>Boards</h4>
            <small>Comparte ideas</small>
        </a>
        <a :href="`/dashboard/project/${this.$route.params.projectId}/membership`" class="shortcutCard">
            <svg class="feather-shortcut">
                <use xlink:href="@/assets/svg/feather-sprite.svg#users" />
            </svg>
            <h4>Users</h4>
            <small>Invita amigos</small>
        </a>
    </div>
</template>
<script>

    import '@/assets/css/shortcuts.css';
    export default {}

</script>