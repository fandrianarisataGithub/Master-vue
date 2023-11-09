<template>
    <div>
        <p>
            {{ text }}
        </p>
        <div>
            <DeepComponent />
        </div>
    </div>
</template>
<script>
    import DeepComponent from './DeepComponent.vue'
    export default {
        inject : ['messageApp'],
        created(){
            console.log('message de main dans compoA : ' + this.messageApp)
        },
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
        },
        provide(){
            return {
                myProvideMessText2 : this.text2
            }
        },
        components : {
            DeepComponent : DeepComponent
        }
    }
</script>