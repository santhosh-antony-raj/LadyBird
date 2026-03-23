<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{errors: !email.isValid}">
            <label for="email">Email</label>
            <input type="email" v-model.trim="email.value" @blur="clearValidity('message')">
            <p v-if="!email.isValid">Email should be proper format </p>
        </div>
        <div class="form-control" :class="{errors: !message.isValid}">
            <label for="message">Message</label>
            <textarea  rows="5" v-model.trim="message.value" @blur="clearValidity('email')"></textarea >
            <p v-if="!message.isValid">Message should not be empty</p>
        </div>
        <div>
            <p v-if="!formIsValid">Enter Valid Details!</p>
        </div>
        <div class="actions">
            <base-button>Submit</base-button>
        </div>
    </form>
</template>

<script>
export default {
    //emit:['contact-data'],
    data(){
        return{
            message:{
                value:'',
                isValid:true
            },
            email:{
                value:'',
                isValid:true
            },
            formIsValid: true,
        }
    },
    methods:{
        clearValidity(input){
            this[input].isValid= true;
            this.formIsValid=true;
        },
        formValidity(){
            this.formIsValid=true;
            if(this.message.value===""){
                this.message.isValid=false,
                this.formIsValid=false;
            }
            if(this.email.value===""||!this.email.value.includes('@')){
                this.email.isValid=false;
                this.formIsValid=false;
            }
        },
        submitForm(){
            this.formValidity();

            if(!this.formIsValid){
                return;
            }
            alert("Viswaroopam");
            const formData ={
                msg:this.message.value,
                email: this.email.value,
            }
            console.log(formData);
            
            //this.$emit('contact-data', formData);
            this.$store.dispatch('contactMod/addContact',{
                msg: this.message.value,
                email: this.email.value,
                id : this.$route.params.id,
            });
            this.$router.replace('/request');
        }
    }
}
</script>


<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>