<template>
    <div>
        <h1>{{ toUpperCaseString(message) }}</h1>
        <h1>{{ age }}</h1>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                message : 'Bonjour tout le monde',
                age : 25,
                users : []
            }
        },
        methods: {
            toUpperCaseString(str){
                return str.toUpperCase();
            },
            isAdult(){
                if(this.age >= 18){
                    return true
                }else{
                    return false
                }
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