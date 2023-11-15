<template>
	<div class="card-item">
		<img :src="dataProp.img" alt="" />
		<div v-html="dataProp.text">
		</div>
		<a :href="dataProp.url">Voir détail</a>
        <div>
            {{ mp }}
        </div>
	</div>
</template>
<style>
    .card-item {
        border: 1px solid red;
        width: 250px;
        margin: 10px;
    }
</style>
<script>
    export default {
        props : ['dataProp', 'mp']
    }
</script>
