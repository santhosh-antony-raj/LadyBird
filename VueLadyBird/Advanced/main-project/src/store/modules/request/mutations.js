export default{
    addContact(state, payload){
        console.log("called addcontact mutation");
        
        state.contacts.push(payload)
    },
    setContact(state,payload){
        console.log("setContact mutation called");
        state.contacts= payload
        
        
        
    }
}