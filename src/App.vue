<template>
    <div>
        <h1>Manontania : </h1>
        <div>
            <input type="text" v-model="question">
        </div>
        <div class="answer">{{ answer }}</div>
        <div v-if="gif" class="image">
            <img :src="gif" alt="">
        </div>
        <div>
            <h1>Component global</h1>
            <ComponentA text="Voici un text via component parent"/>
        </div>
        <div>
            <h1>Deep props reactive</h1>
            <input type="text" v-model="depMsg">
        </div>
    </div>
</template>
<script>
import { computed } from 'vue'
    export default {
        // provide : {
        //     messageApp : 'Hello from App parent',
        //     arahaba : 'manahoana ee!!!'
        // }, // modeo simple
        data(){
            return {
                question : '',
                answer : 'asio question mark ? :-) ',
                loading : false,
                gif : null,
                depMsg : ''
            }
        },
        provide(){
            return {
                messageApp : 'Hello from App parent',
                arahaba : 'manahoana ee!!!',
                depMsg : computed(() => this.depMsg)
            }
        },
        watch : {
            question(newQuestion){
                if(newQuestion.includes('?')){
                    this.getAnswer()
                }
            }
        },
        methods: {
            async getAnswer(){
                this.loading = true;
                this.answer = "Aoka aloha an ... :D";
                try {
                    const  res = await fetch('https://yesno.wtf/api');
                    const _dataRes = await res.json()
                    this.answer = _dataRes.answer
                    this.gif = _dataRes.image
                    
                } catch (error) {
                    this.answer = 'Error! tsy misy valiny yes or no'
                } finally{
                    this.loading = false
                }
            }
        },
        
    }
</script>