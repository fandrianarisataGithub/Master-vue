<template>
    <div>
        Hello word Parent3 {{msg}}
    </div>
</template>
<script>
export default {
        data(){
            return{
                msg : this.messApp
            }
        },
        inject:["messApp"]
       
    }
</script>
