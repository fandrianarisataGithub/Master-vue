<template>
    <div>
        <Titre :age = "age" :date-annif = "annif" />
    </div>
</template>
<script>
import Titre from '../components/Titre.vue';

export default {
    data(){
        return {
            msg : 'Hello world, from home',
            age : 29,
            annif : new Date('2000-02-15 00:00:00')
        }
    },
    components : {
        Titre : Titre
    }
}
</script>