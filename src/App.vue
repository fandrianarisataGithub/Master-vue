<template>
    <div>
        <Parent1/>
        <div>
            <img v-bind:src="imageUrl" alt="">
        </div>
    </div>
</template>
<script>
import Parent1 from './components/Parent1.vue';

export default {
        data(){
            return{
                message : "Salama tompoko ô",
                imageUrl : 'https://picsum.photos/200/300'
            }
        },
        components:{
            Parent1
        },
        
        provide(){
            return{
                messApp:this.message,
                zavatra : 'zavatra kely'
            }
        }
    }
</script>