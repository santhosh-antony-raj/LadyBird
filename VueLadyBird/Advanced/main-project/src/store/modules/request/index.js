import mutations from "../request/mutations";
import getters from "../request/getters";
import actions from "../request/actions";



export default{
    namespaced:true,
    mutations,
    getters,
    actions,
    state(){
        return{
            contacts:[],
        }
    }
}