<template>
    <div class="card-container">
        <template v-for="(item, index) in blogs" :key="index">
           <card v-bind:data-prop="item" :mp="message"/>
        </template>
        
    </div>
</template>
<script>
    import Card from './components/Card.vue'
    export default {
        data(){
            return {
                message : 'Bonjour tout le monde',
                age : 25,
                users : [
                    {
                        name : 'Fenitra',
                        id : 1,
                        isConnected : false
                    },
                    {
                        name : 'Tojo',
                        id : 2,
                        isConnected : true
                    },
                    {
                        name : 'Hary',
                        id : 3,
                        isConnected : true
                    },
                    {
                        name : 'Andry Bihary',
                        id : 4,
                        isConnected : false
                    }
                ],
                blogs : [
                    {
                        img : 'https://picsum.photos/400/300',
                        url : 'https://picsum.photos/',
                        text : `
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                                sed?
                            </p>
                        `
                    },
                    {
                        img : 'https://picsum.photos/200/400',
                        url : 'http://192.168.8.1/html/home.html',
                        text : `
                            <p>
                               2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                                sed?
                            </p>
                        `
                    },
                    {
                        img : 'https://picsum.photos/200/300',
                        url : 'https://vuejs.org/guide/essentials/watchers.html',
                        text : `
                            <p>
                                 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                                sed?
                            </p>
                        `
                    }
                ],
                isMety : true
            }
        },
        components : {
            'card' : Card
        },
        computed: {
            isAdult(){
                if(this.age >= 18){
                    return true
                }else{
                    return false
                }
            },
        },
        methods: {
            toUpperCaseString(str){
                return str.toUpperCase();
            },
            DisplayIfAdult(){
                if(this.isAdult){
                    alert("c'est une personne adulte")
                }else{
                    alert("c'est une personne mineure")
                }
            }
        }
    }
</script>
<style>
    .card-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>