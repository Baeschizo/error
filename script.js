

const no = document.getElementById("btn2");
const yes = document.getElementById("btn1");
//group1 or btts

const btt1 = document.getElementById('btt1');
const btt2 = document.getElementById('btt1');
const btt3 = document.getElementById('btt1');
const btt4 = document.getElementById('btt1');
const btt5 = document.getElementById('btt1');
const btt6 = document.getElementById('btt1');
const btt7 = document.getElementById('btt1');
const btt8 = document.getElementById('btt1');
const btt9 = document.getElementById('btt1');
const btt10 = document.getElementById('btt1');
const btt11 = document.getElementById('btt1');
const btt12 = document.getElementById('btt1');

//second group of btts
const bbtt1 = document.getElementById('bbtt1');
const bbtt2 = document.getElementById('bbtt2');
const bbtt3 = document.getElementById('bbtt3');
const bbtt4 = document.getElementById('bbtt4');
const bbtt5 = document.getElementById('bbtt5');
const bbtt6 = document.getElementById('bbtt6');
const bbtt7 = document.getElementById('bbtt7');
const bbtt8 = document.getElementById('bbtt8');
const bbtt9 = document.getElementById('bbtt9');
const bbtt10 = document.getElementById('bbtt10');
const bbtt11 = document.getElementById('bbtt11');
const bbtt12 = document.getElementById('bbtt12');

no.addEventListener("click", function(){
    btt12.style.opacity= "1";
    no.style.opacity= "0";
});

btt12.addEventListener("click", function(){
    btt12.style.opacity= "0";
    bbtt3.style.opacity= "1";
});

bbtt3.addEventListener("click", function(){
btt1.style.opacity= "1";
bbtt3.style.opacity= "0";
});

btt1.addEventListener("click", function(){
    btt1.style.opacity= "0";
    btt4.style.opacity= "1";
});

btt4.addEventListener("click", function(){
    btt2.style.opacity= "0";
    btt4.style.opacity= "1";
});

btt2.addEventListener("click", function(){
    btt2.style.opacity= "0";
    bbtt1.style.opacity= "1";

});

btt3.addEventListener("click", function(){
    bbtt6.style.opacity= "1";
    btt1.style.opacity= "1";
    btt4.style.opacity= "1";
    btt3.style.opacity= "1";
    btt2.style.opacity= "1";
    btt5.style.opacity= "1";
    btt6.style.opacity= "1";
    btt9.style.opacity= "1";
    btt11.style.opacity= "1";
    btt10.style.opacity= "1";
    bbtt1.style.opacity= "1";
    bbtt2.style.opacity= "2";
    bbtt3.style.opacity= "3";
    bbtt4.style.opacity= "4";
    bbtt5.style.opacity= "5";
    bbtt7.style.opacity= "7";
    bbtt9.style.opacity= "9";
});