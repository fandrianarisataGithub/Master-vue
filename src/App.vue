<template>
    <div>
        <h1>Bonjour tout le monde</h1>
        <h2>{{ message }}</h2>
        <p>
            la surface est : {{ surface }}
        </p>
        <p>
            {{ list[1].qte }}
        </p>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                message : "Salama tompoko ô!",
                surface : '100 m2',
                list : [
                    {
                        nom : 'Pomme',
                        qte : 22
                    },
                    {
                        nom : 'Banane',
                        qte : 120
                    }
                ]
            }
        }
    }
</script>