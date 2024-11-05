let num=0;
let numPerClick=1;

const gameObject=document.getElementById('game-object');
const scoreDisplay=document.getElementById('score');

// ! +1 Score On Button Press
function addScore(){
    num+=numPerClick;
    scoreDisplay.textContent=num;
};
gameObject.addEventListener('click', addScore);

// ? Another way to write function
// gameObject.addEventListener('click', ()=>{
//     num+=numPerClick;
//     scoreDisplay.textContent=num;
// });

