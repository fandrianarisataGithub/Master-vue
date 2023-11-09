<template>
    <div>
        <slot :text="greetingMessage">base slot zero</slot> <br>
        <slot name="one" :sesData="oneData">contenu par défaut de slot1</slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                greetingMessage: 'hello ve dddd',
                oneData : {x : 2}
            }
        }
    }
</script>