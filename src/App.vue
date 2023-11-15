<template>
    <div>
        <input v-model="name" type="text">
        <input v-model="pers.age" type="text">
    </div>
</template>
<script>
import { computed } from 'vue'
    export default {
        data(){
            return {
                name : 'Tojo',
                pers : {
                    name : 'Rakoto',
                    age : 10
                }
            }
        },
        watch : {
            name(newValue, prevValue){
                if(newValue !== prevValue){
                    console.log('Vous avez changé de nom')
                }
            },
            'pers.age'(newValue, prevValue){
                if(newValue !== prevValue){
                    console.log('Vous avez changé d\'age')
                }

            }
        }
    }
</script>