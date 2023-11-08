<template>
    <div>
        <h1>{{ toUpperCaseString(message) }}</h1>
        <div v-if="isAdult">
            <h2>Cette personne est adulte car son age est : {{ age }}</h2>
        </div>
        <div v-else>
            <h2>Cette personne n'est pas une adulte car son age est : {{ age }}</h2>
        </div>
        <div v-show="isMety">
            <h2>Tena mety le izy</h2>
        </div>
        <div class="list-users">
            <ul>
                <li v-for="(user, i) in users" :key="i">
                    <div>Nom : {{ user.name }}</div>
                    <div>
                        Connecté: {{ user.isConnected ? 'en ligne' : 'Déconnecté' }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                message : 'Bonjour tout le monde',
                age : 25,
                users : [
                    {
                        name : 'Fenitra',
                        id : 1,
                        isConnected : false
                    },
                    {
                        name : 'Tojo',
                        id : 2,
                        isConnected : true
                    },
                    {
                        name : 'Hary',
                        id : 3,
                        isConnected : true
                    },
                    {
                        name : 'Andry Bihary',
                        id : 4,
                        isConnected : false
                    }
                ],
                isMety : true
            }
        },
        computed: {
            isAdult(){
                if(this.age >= 18){
                    return true
                }else{
                    return false
                }
            },
        },
        methods: {
            toUpperCaseString(str){
                return str.toUpperCase();
            },
            DisplayIfAdult(){
                if(this.isAdult){
                    alert("c'est une personne adulte")
                }else{
                    alert("c'est une personne mineure")
                }
            }
        }
    }
</script>