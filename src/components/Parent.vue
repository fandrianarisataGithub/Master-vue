<template>
    <div>
        <h1>HEllo parent</h1>
        <h1>{{ dateParent }}</h1>
        <Child @send-date-to-parent = "getDate" :data-child = "msg"/>
    </div>
</template>
<script>
import Child from './Child.vue';

export default {
    data(){
        return {
            msg : 'Hello child',
            dateParent : null
        }
    },
    components : {
        Child
    },
    methods : {
        getDate(data){
            this.dateParent = data;
        }
    }
}
</script>