<template>
    <div>
        <Child :text = "textData"/>
    </div>
</template>
<script>
import Child from './components/Child.vue';

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
                ],
                textData : 'Tojo Master 1'
            }
        },
        components : {
            Child : Child
        },
    }
</script>