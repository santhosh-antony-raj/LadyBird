export default{
    addCoach(state,payload){
        state.coaches.push(payload);
    },
    loadCoach(state,payload){
        state.coaches = payload;
    },
    setFetchTimeStamp(state){
        state.lastFetch = new Date().getTime();
    }
}