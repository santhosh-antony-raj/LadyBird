<template>
    <the-header title="Remember Me"></the-header>
    <the-resources></the-resources>
</template>


<script>

import TheHeader from "./component/Layout/TheHeader.vue";
import TheResources from "./component/learning-resource/TheResources.vue";
export default {
    components:{
       TheResources,
        TheHeader,
    },
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>