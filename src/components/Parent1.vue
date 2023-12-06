<template>
    <div>
        <p>formulaire</p>
        <form @submit="send($event)" action="">
            <input type="text" v-model="pers.name"> 
            <input type="number" v-model="pers.age"> 
            <button type="submit">Envoyer</button>
        </form>
        <Parent2/>
    </div>
</template>

<script>
import Parent2 from './Parent2.vue';

export default {
        data(){
            return{
                pers : {
                    name : 'Tojo',
                    age : 12
                }
            }
        },
        methods : {
            send(ev){
                ev.preventDefault();
                console.log(this.pers)
            }
        },
        components:{
            Parent2
        }
    }
</script>

