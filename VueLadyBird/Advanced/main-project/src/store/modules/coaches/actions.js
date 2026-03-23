export default{
   async  addCoach(context,data){
        const userId =context.rootGetters['userAuthMod/userId'];
        const coachData ={
            //id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            areas: data.areas,
            description: data.desc,
            hourlyRate: data.rate,
        }
        const token = context.rootGetters['userAuthMod/token'];
        console.log(token);
        
      const response = await  fetch(`https://vuemaincoach-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=`+ token,{
            method:'PUT',
            body: JSON.stringify(coachData)
        });
        //const responseData = response.json();
        if(!response.ok){
            //error
        }
        context.commit('addCoach',{
            ...coachData,
            id:userId
        });
    },
    async loadCoach(context, data){//payload
        if(!data.forceRefresh && !context.getters.shouldUpdate){
            return ;
        }
        const response = await fetch(`https://vuemaincoach-default-rtdb.firebaseio.com/coaches.json`);
          const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'fetching data for load coaches failed');
            throw error;
        }
      
        
         let CoachData=[];
        for(const key in responseData){
            const coach ={
            id:key,
            firstName: responseData[key].firstName,
            lastName: responseData[key].lastName,
            areas: responseData[key].areas || [],
            description: responseData[key].description,
            hourlyRate: responseData[key].hourlyRate,
            }
            CoachData.push(coach)
            console.log(coach);
        }
        
        
        context.commit('loadCoach',CoachData);
        context.commit('setFetchTimeStamp');
    }
}