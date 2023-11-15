<template>
    <div>
        <compo-age></compo-age>
    </div>
</template>
<script>
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
                isMety : true
            }
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