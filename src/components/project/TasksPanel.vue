<template>
    <div class="tasksPanel">
        <div class="tasksPanelWrapper">
            <span class="tasksPanelTitle">Tareas de tu equipo</span>
            <div class="tasksPanelList">
                <Task todo="Manejar los eventos del renderizado corriente en la aplicación para móvil." publisher="por Andrés Mendozas"/>
            </div>
        </div>
        <div class="taskSetting">
            <input type="text" class="taskSettingInput" placeholder="Agrega una nueva tarea para tu equipo...">
            <button class="btn btn-success btn-sm">Publicar tarea</button>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/tasksPanel.css'
    import Task from '@/components/models/Task.vue'

    export default {
        components: {
            Task
        }
    }

</script>