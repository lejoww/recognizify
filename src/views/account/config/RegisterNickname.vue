<template>
    <div id="registerNick">
        <div class="wrapCenter">
            <h2>¿Cómo prefieres que te llamemos?</h2>
            <div>
                <div class="form-group"><br>
                    <label>Un apodo o alias</label>
                    <input type="text" 
                        class="form-control form-control-lg" 
                        v-on:keyup.enter="saveNickname" 
                        v-model="nickname" 
                        placeholder="p. ej. Chris" 
                        spellcheck="false"
                    >
                </div>
                <button class="btn btn-success btn-lg" @click="saveNickname">Guardar apodo</button>
            </div>
        </div>
    </div>
</template>
<style>

    .wrapCenter {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }

</style>
<script>

    import firebase from 'firebase'
    export default {
        data: function(){
            return {
                nickname: ''
            }
        },
        methods: {
            saveNickname: function() {
                firebase.auth().onAuthStateChanged(user => {
                    if(!user) {
                        this.$router.push('/')
                    } else {
                        firebase.firestore()
                        .collection('users')
                        .doc(user.uid)
                        .update({
                            nickname: this.nickname
                        })
                        .then(() => this.$router.push('/dashboard/select'))
                        .catch(err => console.error(err))
                    }
                })
            }
        }
    }

</script>