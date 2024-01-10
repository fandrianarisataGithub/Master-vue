<template>
    <div>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
        <RouterView />
    </div>
</template>
<script>
import {
  RouterLink,
  RouterView,
} from 'vue-router';

export default {
        
}
</script>
<style scoped>
    .router-link-active{
        border : 2px solid red;
    }
</style>