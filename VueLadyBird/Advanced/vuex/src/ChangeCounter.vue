<template>
    <div>
        <button @click="addOne">Add 2</button>
        
    </div>
</template>

<script>
export default {
     methods:{
    addOne(){
      this.$store.dispatch('increment')
    }
}
}
</script>