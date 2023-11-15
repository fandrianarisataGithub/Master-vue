<template>
    <div>
       <button @click="afficherBonjour">Bonjour</button>
        <button @click="afficherBonjourArg($event, 'RAsoa')">Bonjour iiii!!!</button>
        <button @click.prevent="afficherBonjourArg($event, name)">Bonjour data</button>
        <form action="">
            <input type="text">
            <button @click.prevent="afficherBonjourArg($event, name)">Bonjour data</button>
        </form>
    </div>
</template>
<script>
import { computed } from 'vue'
    export default {
        /*
            nom d'evènement : @click, @submit, @input (keyup, keydown), @keyup, @mouseenter, @mouseleave
        */
       data(){
            return {
                longueur : 15,
                name : 'Andry'
            }
       },
       methods:{
            afficherBonjour(){
                alert('Bonjour tout le monde')
            },
            afficherBonjourArg(event, name){

                alert('bonjour ' + name)
                //event.preventDefault();
                
            }
       }
    }
</script>