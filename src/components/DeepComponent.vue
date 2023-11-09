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
        <div>
            <ComponentDeep2 />
        </div>
    </div>
</template>
<script>
    import ComponentDeep2 from './ComponentDeep2.vue'
    export default {
        inject : ['messageApp', 'arahaba', 'myProvideMessText2', 'depMsg'],
        data(){
            return {
                textMalagasy : this.arahaba
            }
        },
        components : {
            ComponentDeep2
        }
    }
</script>