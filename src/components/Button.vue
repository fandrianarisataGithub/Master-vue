<template>
    <div>
        <button>Bouton-ako</button>
        <button @click="mandefaCounter">
           Increment parent counter
        </button>
    </div>
</template>
<script>
    export default {
        methods : {
            mandefaCounter(){
                this.$emit('manaoIncrementation');
            }
        }
    }
</script>