<template>
    <div>
        <h2>Cette personne n'est pas une adulte car son age est : {{ age }}</h2>
        <div>Counter = {{ counter }}</div>
        <div>
            <button-special @manaoIncrementation="counting"></button-special>
        </div>
    </div>
</template>
<script>
    import Button from './Button.vue'
    export default {
        data(){
            return {
                age : 12, 
                counter : 0
            }
        },
        components : {
            'button-special' : Button
        },
        methods : {
            counting(){
                this.counter++;
            }
        }
    }
</script>