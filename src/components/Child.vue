<template>
    <header>
        Hollo from child, {{ name }}
        <div>
            <button @click="changeName">Manova</button>
        </div>
    </header>
</template>
<script>
import { nextTick } from 'vue';

export default {
   props : ['text'],
   data(){
        return {
            name : 'Fenitra'
        }
   },
   beforeCreate(){
        console.log(this.text)
        console.log(this.name)
        this.name = "Rakoto"; // tsy misy dikany
        console.log('/beforeCreate')
   },
   created(){
        console.log('created')
        console.log(this.text)
        console.log(this.name) 
        console.log(this.$el) // mbola null
        console.log('/created')
   },
    beforeMount(){
            console.log('beforeMount')
            console.log(this.$el) 
            console.log('/beforeMount')
    },
    mounted(){
            console.log('mounted')
            console.log(this.$el) 
            console.log('/mounted')
    }, 
    beforeUpdate(){
        console.log('beforeUpdate')
        console.log('alohan ny niova , name = ' + this.name)
        console.log('/beforeUpdate')
    },
    updated(){
        
    },
    methods : {
        changeName(){
            this.name = 'Tojo Richel'
        }
    }
}
</script>
