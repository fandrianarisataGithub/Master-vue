<template>
    <div>
        <h1>{{ toUpperCaseMessage }}</h1>
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
        computed : { // propriété calculé
            toUpperCaseMessage(){ 
                return this.message.toUpperCase();
            }
        },
    }
</script>