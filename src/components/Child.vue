<template>
    <div>
        <h2>{{ dataChild }}</h2>
        <div>
            <button @click="getCurrentDate">Get current date</button>
        </div>
    </div>
</template>
<script>
export default {
    props : ['dataChild'],
    data(){
        return {
            dateNow : new Date()
        }
    },
    methods : {
        getCurrentDate(){
            this.$emit('send-date-to-parent', this.dateNow);
        }
    }
}
</script>