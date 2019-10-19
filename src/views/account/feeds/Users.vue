<template>
    <div id="users">
        <UserNavbar/>
        <div class="table-field">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Nombre completo</th>
                    <th scope="col">Apodo</th>
                    <th scope="col">Papel en el equipo</th>
                    <th scope="col">Última acción</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/main.css'
    import '@/assets/scripts/setRegisteredUsers.js'
    import UserNavbar from '@/components/UserNavbar.vue'

    export default {
        components: {
            UserNavbar
        }
    }

</script>