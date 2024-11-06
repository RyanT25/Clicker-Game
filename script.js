let num=0;
let numOfUpgrade1=0;
let numPerClick=1;
let upgrade1Cost=15;

let gameObject=document.getElementById('game-object');
let scoreDisplay=document.getElementById('score');
let upgrade1=document.getElementById('upgrade1');
let upgrade1Count=document.getElementById('num-of-upgrade1');

// ! +1 Score On Button Press
function addScore(){
    num+=numPerClick;
    scoreDisplay.innerHTML=Math.trunc(num);
};
gameObject.addEventListener('click', addScore);

// ! Upgrade 1
function addUpgrade1(){
    buyUpgrade1();
    numOfUpgrade1+=numPerClick;
    setInterval(function(){
        Upgrade1AddScore()
    }, 1000);
    upgrade1Count.innerHTML=numOfUpgrade1;
};
upgrade1.addEventListener('click', addUpgrade1);

// ! Upgrade 1 Auto Click
function Upgrade1AddScore(){
    num=num+(numOfUpgrade1*(numPerClick*0.2));
    scoreDisplay.innerHTML=Math.trunc(num);
};

// ! Upgrade 1 Purchase
function buyUpgrade1(){
    if(num>=upgrade1Cost){
        num=num-upgrade1Cost;
    }
    else{
        addUpgrade1()=false;
    };
    scoreDisplay.innerHTML=Math.trunc(num);
};
