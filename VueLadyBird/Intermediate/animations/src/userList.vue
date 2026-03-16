<template>
    <transition-group tag="ul" name="user-list" mode="out-in">
        <li v-for="user of users" :key="user" @click="removeUser(user)">{{user}}</li>
    </transition-group>
    <div>
        <input type="text" name="addUser" id="addUser" ref="addUser">
  <button type="submit" class="btn" @click="addUser">Submit</button>
  </div>
</template>
    
    

<script>
export default {
    data(){
        return{
            users:['Azar','billu','raj','kanna','santhosh']
        }
    },
    methods:{
        addUser(){
            const addUser = this.$refs.addUser.value;
            this.users.unshift(addUser);
        },
        removeUser(user){
            this.users = this.users.filter(usr=>usr!==user);
        }
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
}
li{
    padding: 1rem;
    border: 1px solid #ccc;
    text-align: center;
}
.user-list-enter-from,
.user-list-leave-to{
    opacity:0;
    transform: translateX(-30px);
}
.user-list-enter-active{
    transition: all 1s ease-in;
    
}
.user-list-leave-active{
    transition:all 1s ease-out;
    position: absolute;
}
.user-list-enter-to,
.user-list-leave-from{
    opacity: 1;
    transform: translateX(0);
}
.user-list-move{
    transition: transform 0.8s ease;
}
</style>