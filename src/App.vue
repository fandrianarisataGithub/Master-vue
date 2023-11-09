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
    </div>
</template>
<script>
    export default {
        data(){
            return {
                question : '',
                answer : 'asio question mark ? :-) ',
                loading : false,
                gif : null
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