<template>
    <div>
        <h1>{{ message }}</h1>
        <h1>{{ age }}</h1>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                message : 'Bonjour tout le monde',
                age : 25
            }
        }
    }
</script>