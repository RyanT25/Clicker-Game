// ! Variables
let num=0;
let numPerClick=1;
// * Upgrade 1 --
let numOfUpgrade1=0;
let upgrade1Cost=15;
// * Upgrade 2 --
let numOfUpgrade2=0;
let upgrade2Cost=150;

let gameObject=document.getElementById('game-object');
let scoreDisplay=document.getElementById('score');
// * Upgrade 1 --
let upgrade1=document.getElementById('upgrade1-button');
let upgrade1Count=document.getElementById('num-of-upgrade1');
let upgrade1CostUpdate=document.getElementById('upgrade1-cost');
// * Upgrade 2 --
let upgrade2=document.getElementById('upgrade2-button');
let upgrade2Count=document.getElementById('num-of-upgrade2');
let upgrade2CostUpdate=document.getElementById('upgrade2-cost');

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

//  ! Upgrade 2 Function
function addUpgrade2(){
    buyUpgrade2();
    numOfUpgrade2+=numPerClick;
    upgrade2CostIncrease();
    setInterval(function(){
        Upgrade2AddScore()
    }, 1000);
    upgrade2Count.innerHTML=numOfUpgrade2;
};
upgrade2.addEventListener('click', addUpgrade2);

// * Upgrade 2 Auto Click --
function Upgrade2AddScore(){
    num=num+(numOfUpgrade2*(numPerClick*1));
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 2 Purchase --
function buyUpgrade2(){
    if(num>=upgrade2Cost){
        num=num-upgrade2Cost;
    }
    else{
        addUpgrade2()=false;
    };
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 2 Cost Increase --
function upgrade2CostIncrease(){
    upgrade2Cost=upgrade2Cost*1.25;
    upgrade2CostUpdate.innerHTML=Math.round(upgrade2Cost);
};

