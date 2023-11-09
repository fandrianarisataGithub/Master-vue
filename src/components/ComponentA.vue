<template>
    <div>
        <p>
            {{ text }}
        </p>
    </div>
</template>
<script>
    export default {
        props : {
            text : {
                type : String,
                default : 'default value'
            }
        },
        data(){
            return {
                text2 : 'Voici un text du component global A test'
            }
        }
    }
</script>