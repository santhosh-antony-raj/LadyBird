Vue.createApp({
  data: function(){
    return  {
        goals:[],
        goalValue: ""
    }
  },
  methods: {
      addGoal(){
          this.goals.push(this.goalValue);
          this.goalValue="";
      },
      removeGoal(){
        this.goals.pop();
      }
  }
}).mount('#app')

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);