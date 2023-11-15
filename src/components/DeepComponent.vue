<template>
    <div>
        <h2>Deep component</h2>
        <p>
            {{ messageApp }}
        </p>
        <p>
            text malagasy : {{ textMalagasy }}
        </p>
        <p>
            Provide natao function satria nampiasa data ana component : {{ myProvideMessText2 }}
        </p>
        <p>
            Le message de App : {{ depMsg }}
        </p>
        <ComponentDeep2 v-slot="slotProps">
            <!-- <template #zero>
                Tena eto le slot, data de parent : {{ textMalagasy }} (slot default)
            </template>
            <template #one="sesData">
                Tena eto le slot, data de parent : {{ textMalagasy }} (slot default) , {{ sesData.x }}
            </template> -->
            {{ slotProps.text }}
        </ComponentDeep2>
    </div>
</template>
<script>
    import ComponentDeep2 from './ComponentDeep2.vue'
    import {useMouse} from './../assets/composables/mouse'
    export default {
        inject : ['messageApp', 'arahaba', 'myProvideMessText2', 'depMsg'],
        data(){
            return {
                textMalagasy : this.arahaba,
                x : 0,
                y : 0
            }
        },
        components : {
            ComponentDeep2:ComponentDeep2
        },
        
    }
</script>