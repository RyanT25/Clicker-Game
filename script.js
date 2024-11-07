// ! Variables
let num=0;
let numPerClick=1;
// * Upgrade 1 --
let numOfUpgrade1=0;
let upgrade1Cost=15;

let gameObject=document.getElementById('game-object');
let scoreDisplay=document.getElementById('score');
// * Upgrade 1 --
let upgrade1=document.getElementById('upgrade1-button');
let upgrade1Count=document.getElementById('num-of-upgrade1');
let upgrade1CostUpdate=document.getElementById('upgrade1-cost');

// ! Press Button Function
function addScore(){
    num+=numPerClick;
    scoreDisplay.innerHTML=Math.trunc(num);
};
gameObject.addEventListener('click', addScore);

// ! Upgrade 1 Function
function addUpgrade1(){
    buyUpgrade1();
    numOfUpgrade1+=numPerClick;
    upgrade1CostIncrease();
    setInterval(function(){
        Upgrade1AddScore()
    }, 1000);
    upgrade1Count.innerHTML=numOfUpgrade1;
};
upgrade1.addEventListener('click', addUpgrade1);

// * Upgrade 1 Auto Click --
function Upgrade1AddScore(){
    num=num+(numOfUpgrade1*(numPerClick*0.1));
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 1 Purchase --
function buyUpgrade1(){
    if(num>=upgrade1Cost){
        num=num-upgrade1Cost;
    }
    else{
        addUpgrade1()=false;
    };
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 1 Cost Increase --
function upgrade1CostIncrease(){
    upgrade1Cost=upgrade1Cost*1.25;
    upgrade1CostUpdate.innerHTML=Math.round(upgrade1Cost);
};

