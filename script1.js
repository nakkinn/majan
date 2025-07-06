let mode = -1;
let to = -1;
let score1 = 25000, score2 = 25000, score3 = 25000, score4 = 25000;

const area1 = document.getElementById("area1");
const area2 = document.getElementById("area2");
const area3 = document.getElementById("area3");
const area4 = document.getElementById("area4");
const score1p = document.getElementById("score1");
const score2p = document.getElementById("score2");
const score3p = document.getElementById("score3");
const score4p = document.getElementById("score4");

const input1 = document.getElementById("input1");
const btn1 = document.getElementById("btn1");


area1.addEventListener("pointerdown", ()=>{
    mode = 1;
    score1p.textContent = "999";
});

area2.addEventListener("pointerdown", ()=>{
    mode = 2;
});

area3.addEventListener("pointerdown", ()=>{
    mode = 3;
});

area4.addEventListener("pointerdown", ()=>{
    mode = 4;
});


area1.addEventListener("pointerup", ()=>{
    score1p.textContent = "888";
    if(mode!=-1 && mode!=1){
        to = 1;
        input1.focus();
    }
});

area2.addEventListener("pointerup", ()=>{
    if(mode!=-1 && mode!=2){
        to = 2;
        input1.focus();
    }
});

area3.addEventListener("pointerup", ()=>{
    if(mode!=-1 && mode!=3){
        to = 3;
        input1.focus();
    }
});

area4.addEventListener("pointerup", ()=>{
    if(mode!=-1 && mode!=4){
        to = 4;
        input1.focus();
    }
});



//文字の更新
function update_text(){
    score1p.textContent = score1;
    score2p.textContent = score2;
    score3p.textContent = score3;
    score4p.textContent = score4;
}



btn1.addEventListener("click", ()=>{
    input1.focus();
});

input1.addEventListener("change", ()=>{
    if(mode==1) score1 -= Number(input1.value);
    if(mode==2) score2 -= Number(input1.value);
    if(mode==3) score3 -= Number(input1.value);
    if(mode==4) score4 -= Number(input1.value);
    if(to==1)   score1 += Number(input1.value);
    if(to==2)   score2 += Number(input1.value);
    if(to==3)   score3 += Number(input1.value);
    if(to==4)   score4 += Number(input1.value);
    input1.value = "";
    update_text();
    mode = -1;
});