
<template>
    <div>
    <base-dialog :show="!!error" title="An Signup Error occurred" @close="handleError">
   <p> {{ error }} </p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating...." fixed>
        <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
    <form @submit.prevent="onSubmitData">
        <div class="form-control" :class="{invalid:!formIsValid}">
            <label for="email">Email</label>
            <input type="email" id="email" v-model.trim="email">
            <p v-if="!formIsValid">Email Should Be in Proper format</p>
        </div>
        <div class="form-control" :class="{invalid: !formIsValid}">
            <label for="password">Password</label>
            <input type="password" id="password" v-model.trim="password">
             <p v-if="!formIsValid">password Should Be atleast 8 alpanumeric characters</p>
        </div>
        <div>
            <base-button>{{ submitButtonCaption }}</base-button>
            <base-button mode="flat" type="button" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
        </div>
    </form>
    </base-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            formIsValid:true,
            mode:'login',
            isLoading:false,
            error:null,
        }
    },
    computed:{
        submitButtonCaption(){
            if(this.mode==='login'){
                return 'Login';
            }else{
                return 'signup';
            }
        },
        switchModeButtonCaption(){
            if(this.mode==='login'){
                return 'signup instead';
            }else{
                return 'login';
            }
        }
    },
    methods:{
      async  onSubmitData(){
            this.formIsValid=true;
            if(this.email===''|| !this.email.includes('@')){
                this.formIsValid=false;
                return;
            }
            if(this.password.length<6){
                this.formIsValid=false;
                return;
            }
            //send http request
            const payloadAction ={
                email:this.email,
                password:this.password,
            }
            this.isLoading=true;
            try{
                if(this.mode==='login'){
                    await this.$store.dispatch('userAuthMod/login', payloadAction)
          }else{
           await this.$store.dispatch('userAuthMod/signup',payloadAction)
          }
          const redirectUrl = '/'+ (this.$route.query.redirect || 'coaches')
          this.$router.replace(redirectUrl);
            }catch(err){
                console.log(err);
                this.error=err.message || 'signup failed'
               
                
                
            }
            //loading
            this.isLoading=false;
          
        },
        switchAuthMode(){
            if(this.mode==='login'){
                this.mode='signup';
            }else{
                this.mode='login';
            }
        },
        handleError(){
            this.error=null;
        },
    
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>