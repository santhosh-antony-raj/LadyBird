<template>
    <base-dialog title="Invalid Input" v-if="inputVaildData" @close='confirmError'>
    <template #default>
        <p>Some of the fields are invalid . Make sure that all the fields values are entered correctly</p>
    </template>
    <template #action>
        <base-button @click="confirmError">Okay</base-button>
    </template>
    </base-dialog>
    <base-card>
   <form @submit.prevent="submitData">
    <div>
        <label for="title" class="form-control" >Title</label>
        <input type="text" id="title" name="title" ref="inpTitle">
    </div>
    <div>
        <label for="description" class="form-control" >Description</label>
        <textarea name="description" id="description"  rows="3" ref="inpDesc"></textarea>
    </div>
    <div>
         <label for="link" class="form-control">link</label>
        <input type="url" id="link" name="link" ref="inpLink">
    </div>
    <div>
        <base-button type="submit">Add Resource</base-button>
    </div>
   </form>
    </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
    inject:['addResource'],
    data(){
        return{
           inputVaildData:false, 
            
        }
    },

    methods:{
        submitData(){
            const enterdTitle = this.$refs.inpTitle.value;
           const enterdDesc = this.$refs.inpDesc.value;
           const enterdLink = this.$refs.inpLink.value;
           if(enterdTitle.trim()==="" || enterdDesc.trim()==="" || enterdLink.trim()===""){
           this.inputVaildData=true;
            return;
           }
            this.addResource(enterdTitle,enterdDesc,enterdLink)
        },
        confirmError(){
            this.inputVaildData =false;
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
#link{
    margin-bottom: 1.4rem;
}
</style>