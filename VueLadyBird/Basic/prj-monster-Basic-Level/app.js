function randomValue(max, min){
return Math.floor(Math.random()*(max - min));
 }
const app = Vue.createApp({

    data(){
        return{
            playerHealth : 100,
            monsterHealth:100,
            counterRound:0,
            winner:null,
            logMessages:[],
        }
    },
    watch:{
        playerHealth(value){
            if(value<0 && this.monsterHealth<0){
                //it's Draw
                this.winner ='Draw Match'
            }else if(value<0){
                //player Lost
                this.winner ='Monster'
            }
        },
        monsterHealth(value){
            if(value<0 && this.playerHealth<0){
                //its' Draw
                this.winner ='Draw';
                
            }else if(value<0){
                //monster Lost
                this.winner= 'Player';
            }
        }
    },
    computed:{
        upPlayerHealth(){
            if(this.playerHealth<0){
                return {width: '0%'};
            }
            return {width: this.playerHealth+'%'};
        },
        upMonsterHealth(){
             if(this.monsterHealth<0){
                return {width: '0%'};
            }
            return {width: this.monsterHealth +'%'};
        },
        upSpecialAttack(){
            return (this.counterRound %3 !=0); 
        }
    },
    methods:{
        attackMonster(){
            this.counterRound++;
           console.log("attackMonster"+this.monsterHealth);
            console.log(this.counterRound);
           const attackValue = randomValue(15, 8);
           this.monsterHealth -=attackValue;
           this.addLogMessage('Player','Attack', attackValue);
           this.attackPlayer();
          
           
        },
        attackPlayer(){
            console.log("attackPLayer"+ this.playerHealth);
            const attackValue = randomValue(15, 8);
            this.playerHealth -= attackValue;
             this.addLogMessage('Monster','Attack', attackValue);
        },
        specialAttack(){
            this.counterRound++
            console.log("SpecialAttack"+ this.monsterHealth);
            console.log(this.counterRound);
            const attackValue = randomValue(50,20);
            this.monsterHealth -= attackValue;
             this.addLogMessage('Player','Attack', attackValue);
            
        },
        healPlayer(){
            const healValue = randomValue(7,3);
            if(this.playerHealth + healValue>100){
                this.playerHealth =100;
            }else{
                this.playerHealth += healValue;
            } 
            console.log("heal value"+ healValue);
            console.log("playerHealth"+ this.playerHealth);
             this.addLogMessage('Player','Heal', healValue);
            this.healMonster();
        },
        healMonster(){
            const healValue = randomValue(9,3);
            if(this.monsterHealth + healValue>100){
                this.monsterHealth=100;
            }
            else{
                this.monsterHealth += healValue;
            }
            this.addLogMessage('Monster','Heal', healValue);
        },
        surrender(){
            this.winner='Monster';
        },
        startNewGame(){
            this.playerHealth = 100;
            this.monsterHealth =100;
            this.counterRound=0;
            this.winner=null;
            this.logMessages=[];
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType : what,
                actionValue: value,

            })
        }

    }

});

app.mount("#game");