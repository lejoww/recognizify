<template>
    <div class="tasksTableContainer">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Tarea</th>
                    <th scope="col">Creador</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="taskTableField">
                            <span class="taskTitle">Agregar usuarios a la lista de compensación</span>
                        </div>
                    </td>
                    <td>
                        <div class="taskTableField">
                            <div class="taskCreatorProfile" data-toggle="tooltip" data-placement="bottom" title="Ale Rodríguez">
                                <img src="https://lh3.googleusercontent.com/a-/AAuE7mC2NIQ4xTmjrd04qP84O4rLumcqI1GyOPO8FwR0=s96-cc-rg" width="100%">
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="taskTableField">
                            <div class="taskOptions">
                                <a href="">
                                    <svg class="feather-like-options">
                                        <use xlink:href="@/assets/svg/feather-sprite.svg#trash" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

    import '@/assets/css/tasksTable.css'

    import firebase from 'firebase'
    export default {
        created: function(){
            // firebase
        }
    }

</script>