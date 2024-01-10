<template>
    <div>
        <h1>Salut Diary {{ dateAnnif.toLocaleString('fr') }}</h1>
    </div>
</template>
<script>
export default {
    props : ['age', 'dateAnnif'],
    computed : {
        getDateAnnif(){
            return this.dateAnnif.getDay() + '-' + this.dateAnnif.getMonth() + '-' + this.dateAnnif.getFullYear();
        }
    }
}
</script>