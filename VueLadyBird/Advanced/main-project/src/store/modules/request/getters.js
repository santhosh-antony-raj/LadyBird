export default{
    contacts(state, getters, rootState, rootGetters){
        console.log('ROOT GETTERS:', rootGetters);
        console.log('COACH ID:', rootGetters['userAuthMod/userId']);
        const coachId = rootGetters['userAuthMod/userId'];
        return state.contacts.filter(contact => contact.coachId === coachId);
    }
}