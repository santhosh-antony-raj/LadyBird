export default{
  async  addContact(context,data){
        const addCon ={
            msg:data.msg,
            email:data.email,
        }
        console.log(data.id);
        console.log(addCon);
        
        console.log("called actions request");
     
     const response = await  fetch(`https://vuemaincoach-default-rtdb.firebaseio.com/requests/${data.id}.json`,{
            method:'POST',
            body: JSON.stringify(addCon)
    });
    const responseData =await response.json();
    if(!response.ok){
        //error
        const error = new Error(responseData.message || 'data error found in request fetch actions');
        throw error;
    }
        addCon.id = responseData.name // REFER FIREBASE DOCS IT RETURNS ID ---> responsedData.name
        addCon.coachId= data.id,
        context.commit("addContact",addCon);
    },
    async loadRequest(context){
        const coachId = context.rootGetters['userAuthMod/userId'];
         const token = context.rootGetters['userAuthMod/token'];  
        const response= await fetch(`https://vuemaincoach-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token);
        const responseData = await response.json();
        if(!response.ok){
            //error
            const error = new Error(responseData.message || 'loadRequest Error');
            throw error;
        }
        let requests =[];
        for(let key in responseData){
            const request = {
                id : key,
                coachId:coachId,
                msg: responseData[key].msg,
                email:responseData[key].email,
            }
            requests.push(request);
            console.log(request);
            
        }
        context.commit('setContact',requests);

    }
}