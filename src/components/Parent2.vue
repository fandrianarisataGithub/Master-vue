<template>
    <div>
        <p>{{ zavatra }}</p>
        <Parent3/>
    </div>
</template>

<script>
import Parent3 from './Parent3.vue';

export default {
        inject : ['zavatra'],
        data(){
            return{
              
            }
        },
        components:{
            Parent3
        }
    }
</script>
