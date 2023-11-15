<template>
    <div>
        <h1 v-bind:style="'background: ' + bgColor">Bonjour</h1>
        <div :class="isPrimary ? 'primary-div' : 'secondary-div'">
            <div v-html="content"></div>
            <img :src="url" alt="">
        </div>
        <div>
            <p>{{ piece  }}</p>
            <input v-model="piece" type="text" name="" id="">
        </div>
    </div>
</template>
<script>
import { computed } from 'vue'
    export default {
        data(){
            return {
                bgColor : 'red',
                piece : '',
                isPrimary : true,
                url : 'https://picsum.photos/200/300',
                content : `
                     <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora temporibus ratio
                ne dolores, sit vel totam quaerat eligendi vero quas rerum.
            </p>
                `
            }
        }
    }
</script>
<style>
    .primary-div{
        background: lightblue;
        color: white;
    }
    .secondary-div{
        color: white;
        background: green;
    }
</style>