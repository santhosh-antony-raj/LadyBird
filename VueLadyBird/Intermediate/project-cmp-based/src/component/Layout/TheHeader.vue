<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
   props:['title']
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rempx;
    background-color: brown;
    margin: 0;
    padding: 0;
}
header>h1{
    color: white;
    
}
</style>