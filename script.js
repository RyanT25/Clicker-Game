// ! Variables
// *
let num=0;
let numPerClick=1;

// * Upgrades
let numOfUpgrades={
    upg1: 0,
    upg2: 0,
    upg3: 0,
    upg4: 0,
    upg5: 0
};
let upgradeCosts=[15,150,1500,15000,150000];

// *
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

// * Upgrade 3 --
let upgrade3=document.getElementById('upgrade3-button');
let upgrade3Count=document.getElementById('num-of-upgrade3');
let upgrade3CostUpdate=document.getElementById('upgrade3-cost');

// * Upgrade 4 --
let upgrade4=document.getElementById('upgrade4-button');
let upgrade4Count=document.getElementById('num-of-upgrade4');
let upgrade4CostUpdate=document.getElementById('upgrade4-cost');

// * Upgrade 5 --
let upgrade5=document.getElementById('upgrade5-button');
let upgrade5Count=document.getElementById('num-of-upgrade5');
let upgrade5CostUpdate=document.getElementById('upgrade5-cost');

///////////////////////////////////////////////////////

// ! Press Button Function
function addScore(){
    num+=numPerClick;
    scoreDisplay.innerHTML=Math.trunc(num);
};
gameObject.addEventListener('click', addScore);

///////////////////////////////////////////////////////

// ! Upgrade 1 Function
function addUpgrade1(){
    buyUpgrade1();
    numOfUpgrades.upg1+=numPerClick;
    upgrade1CostIncrease();
    setInterval(function(){
        Upgrade1AddScore()
    }, 1000);
    upgrade1Count.innerHTML=numOfUpgrades.upg1;
};
upgrade1.addEventListener('click', addUpgrade1);

// * Upgrade 1 Auto Click --
function Upgrade1AddScore(){
    num=num+(numOfUpgrades.upg1*(numPerClick*0.1));
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 1 Purchase --
function buyUpgrade1(){
    if(num>=upgradeCosts[0]){
        num=num-upgradeCosts[0];
    }
    else{
        addUpgrade1()=false;
    };
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 1 Cost Increase --
function upgrade1CostIncrease(){
    upgradeCosts[0]=upgradeCosts[0]*1.25;
    upgrade1CostUpdate.innerHTML=Math.round(upgradeCosts[0]);
};

///////////////////////////////////////////////////////

//  ! Upgrade 2 Function
function addUpgrade2(){
    buyUpgrade2();
    numOfUpgrades.upg2+=numPerClick;
    upgrade2CostIncrease();
    setInterval(function(){
        Upgrade2AddScore()
    }, 1000);
    upgrade2Count.innerHTML=numOfUpgrades.upg2;
};
upgrade2.addEventListener('click', addUpgrade2);

// * Upgrade 2 Auto Click --
function Upgrade2AddScore(){
    num=num+(numOfUpgrades.upg2*(numPerClick*1));
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 2 Purchase --
function buyUpgrade2(){
    if(num>=upgradeCosts[1]){
        num=num-upgradeCosts[1];
    }
    else{
        addUpgrade2()=false;
    };
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 2 Cost Increase --
function upgrade2CostIncrease(){
    upgradeCosts[1]=upgradeCosts[1]*1.25;
    upgrade2CostUpdate.innerHTML=Math.round(upgradeCosts[1]);
};

///////////////////////////////////////////////////////

// ! Upgrade 3 Function
function addUpgrade3(){
    buyUpgrade3();
    numOfUpgrades.upg3+=numPerClick;
    upgrade3CostIncrease();
    setInterval(function(){
        Upgrade3AddScore()
    }, 1000);
    upgrade3Count.innerHTML=numOfUpgrades.upg3;
};
upgrade3.addEventListener('click', addUpgrade3);

// * Upgrade 3 Auto Click --
function Upgrade3AddScore(){
    num=num+(numOfUpgrades.upg3*(numPerClick*10));
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 3 Purchase --
function buyUpgrade3(){
    if(num>=upgradeCosts[2]){
        num=num-upgradeCosts[2];
    }
    else{
        addUpgrade3()=false;
    };
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 3 Cost Increase --
function upgrade3CostIncrease(){
    upgradeCosts[2]=upgradeCosts[2]*1.25;
    upgrade3CostUpdate.innerHTML=Math.round(upgradeCosts[2]);
};

///////////////////////////////////////////////////////

// ! Upgrade 4 Function
function addUpgrade4(){
    buyUpgrade4();
    numOfUpgrades.upg4+=numPerClick;
    upgrade4CostIncrease();
    setInterval(function(){
        Upgrade4AddScore()
    }, 1000);
    upgrade4Count.innerHTML=numOfUpgrades.upg4;
};
upgrade4.addEventListener('click', addUpgrade4);

// * Upgrade 4 Auto Click --
function Upgrade4AddScore(){
    num=num+(numOfUpgrades.upg4*(numPerClick*50));
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 4 Purchase --
function buyUpgrade4(){
    if(num>=upgradeCosts[3]){
        num=num-upgradeCosts[3];
    }
    else{
        addUpgrade4()=false;
    };
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 4 Cost Increase --
function upgrade4CostIncrease(){
    upgradeCosts[3]=upgradeCosts[3]*1.25;
    upgrade4CostUpdate.innerHTML=Math.round(upgradeCosts[3]);
};

///////////////////////////////////////////////////////

// ! Upgrade 5 Function
function addUpgrade5(){
    buyUpgrade5();
    numOfUpgrades.upg5+=numPerClick;
    upgrade5CostIncrease();
    setInterval(function(){
        Upgrade5AddScore()
    }, 1000);
    upgrade5Count.innerHTML=numOfUpgrades.upg5;
};
upgrade5.addEventListener('click', addUpgrade5);

// * Upgrade 5 Auto Click --
function Upgrade5AddScore(){
    num=num+(numOfUpgrades.upg5*(numPerClick*250));
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 5 Purchase --
function buyUpgrade5(){
    if(num>=upgradeCosts[4]){
        num=num-upgradeCosts[4];
    }
    else{
        addUpgrade5()=false;
    };
    scoreDisplay.innerHTML=Math.trunc(num);
};

// * Upgrade 5 Cost Increase --
function upgrade5CostIncrease(){
    upgradeCosts[4]=upgradeCosts[4]*1.25;
    upgrade5CostUpdate.innerHTML=Math.round(upgradeCosts[4]);
};
