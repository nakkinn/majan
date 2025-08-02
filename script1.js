let score1 = 25000;
let score2 = 25000;
let score3 = 25000;
let score4 = 25000;
let score5 = 0; // リー棒の点数

let name1 = "プレイヤー1";
let name2 = "プレイヤー2";
let name3 = "プレイヤー3";
let name4 = "プレイヤー4";

let player1_riichi = false;
let player2_riichi = false;
let player3_riichi = false;
let player4_riichi = false;

let oya = 1; // 1: プレイヤー1, 2: プレイヤー2, 3: プレイヤー3, 4: プレイヤー4
let hora_oya = false; // 親の和了フラグ
let hora_player;


const player1_oya_flag = document.getElementById("player1_oya_flag");
const player2_oya_flag = document.getElementById("player2_oya_flag");
const player3_oya_flag = document.getElementById("player3_oya_flag");
const player4_oya_flag = document.getElementById("player4_oya_flag");
const player1_name = document.getElementById("player1_name");
const player2_name = document.getElementById("player2_name");
const player3_name = document.getElementById("player3_name");
const player4_name = document.getElementById("player4_name");
const player1_score = document.getElementById("player1_score");
const player2_score = document.getElementById("player2_score");
const player3_score = document.getElementById("player3_score");
const player4_score = document.getElementById("player4_score");
const ba_score = document.getElementById("ba_score");
const player1_riichi_button = document.getElementById("player1_riichi_button");
const player2_riichi_button = document.getElementById("player2_riichi_button");
const player3_riichi_button = document.getElementById("player3_riichi_button");
const player4_riichi_button = document.getElementById("player4_riichi_button");
const player1_agari_button = document.getElementById("player1_agari_button");
const player2_agari_button = document.getElementById("player2_agari_button");
const player3_agari_button = document.getElementById("player3_agari_button");
const player4_agari_button = document.getElementById("player4_agari_button");

const modal1 = document.getElementById("modal1");





const modal2 = document.getElementById("modal2");
const modal1_close_button = document.getElementById("modal1_close_button");



const btn_setting = document.getElementById("btn_setting");

updateElements();





//#########################################
//和了
//#########################################

const idou_score = document.getElementById("idou_score");
const check_tsumo = document.getElementById("check_tsumo");
const check_player1_ron = document.getElementById("check_player1_ron");
const check_player2_ron = document.getElementById("check_player2_ron");
const check_player3_ron = document.getElementById("check_player3_ron");
const check_player4_ron = document.getElementById("check_player4_ron");
const container_player1_ron = document.getElementById("container_player1_ron");
const container_player2_ron = document.getElementById("container_player2_ron");
const container_player3_ron = document.getElementById("container_player3_ron");
const container_player4_ron = document.getElementById("container_player4_ron");
const check_han1 = document.getElementById("check_han1");
const check_han2 = document.getElementById("check_han2");
const check_han3 = document.getElementById("check_han3");
const check_han4 = document.getElementById("check_han4");
const check_han5 = document.getElementById("check_han5");
const check_han6 = document.getElementById("check_han6");
const check_han8 = document.getElementById("check_han8");
const check_han11 = document.getElementById("check_han11");
const check_han13 = document.getElementById("check_han13");
const modal1_submit_button = document.getElementById("modal1_submit_button");


player1_agari_button.addEventListener("click", () => {
    modal1.style.display = "block";
    hora_oya = oya === 1; // プレイヤー1が親の場合、和了フラグを立てる
    hora_player = 1; // 和了したプレイヤーを記録
    resetModal();
    container_player1_ron.style.display = "none";
});

player2_agari_button.addEventListener("click", () => {
    modal1.style.display = "block";
    hora_oya = oya === 2; // プレイヤー2が親の場合、和了フラグを立てる
    hora_player = 2; // 和了したプレイヤーを記録
    resetModal();
    container_player2_ron.style.display = "none";
});

player3_agari_button.addEventListener("click", () => {
    modal1.style.display = "block";
    hora_oya = oya === 3; // プレイヤー3が親の場合、和了フラグを立てる
    hora_player = 3; // 和了したプレイヤーを記録
    resetModal();
    container_player3_ron.style.display = "none";
});

player4_agari_button.addEventListener("click", () => {
    modal1.style.display = "block";
    hora_oya = oya === 4; // プレイヤー4が親の場合、和了フラグを立てる
    hora_player = 4; // 和了したプレイヤーを記録
    resetModal();
    container_player4_ron.style.display = "none";
});

modal1_close_button.addEventListener("click", () => {
    modal1.style.display = "none";
});


check_tsumo.addEventListener("change", () => {
    updateIdouScore();
});
check_player1_ron.addEventListener("change", () => {
    updateIdouScore();
});
check_player2_ron.addEventListener("change", () => {
    updateIdouScore();
});
check_player3_ron.addEventListener("change", () => {
    updateIdouScore();
});
check_player4_ron.addEventListener("change", () => {
    updateIdouScore();
});
check_han1.addEventListener("change", () => {
    updateIdouScore();
});
check_han2.addEventListener("change", () => {
    updateIdouScore();
});
check_han3.addEventListener("change", () => {
    updateIdouScore();
});
check_han4.addEventListener("change", () => {
    updateIdouScore();
});
check_han5.addEventListener("change", () => {
    updateIdouScore();
});
check_han6.addEventListener("change", () => {
    updateIdouScore();
});
check_han8.addEventListener("change", () => {
    updateIdouScore();
});
check_han11.addEventListener("change", () => {
    updateIdouScore();
});
check_han13.addEventListener("change", () => {
    updateIdouScore();
});


modal1_submit_button.addEventListener("click", () => {
    let han;
    if(check_han1.checked) han = 1;
    if(check_han2.checked) han = 2;
    if(check_han3.checked) han = 3;
    if(check_han4.checked) han = 4;
    if(check_han5.checked) han = 5;
    if(check_han6.checked) han = 6;
    if(check_han8.checked) han = 8;
    if(check_han11.checked) han = 11;
    if(check_han13.checked) han = 13;

    if(check_tsumo.checked){
        let [scorea, scoreb] = calc_score_tsumo(hora_oya, han);
        if(hora_player == 1)    score1 += scorea + scoreb * 2 + score5;
        if(hora_player == 2)    score2 += scorea + scoreb * 2 + score5;
        if(hora_player == 3)    score3 += scorea + scoreb * 2 + score5;
        if(hora_player == 4)    score4 += scorea + scoreb * 2 + score5;
        if(hora_player != 1){
            if(oya == 1)    score1 -= scorea;
            else score1 -= scoreb;
        }
        if(hora_player != 2){
            if(oya == 2)    score2 -= scorea;
            else score2 -= scoreb;
        }
        if(hora_player != 3){
            if(oya == 3)    score3 -= scorea;
            else score3 -= scoreb;
        }
        if(hora_player != 4){
            if(oya == 4)    score4 -= scorea;
            else score4 -= scoreb;
        }
    }else{
        let scorea = calc_score_ron(hora_oya, han);
        if(hora_player == 1)    score1 += scorea + score5;
        if(hora_player == 2)    score2 += scorea + score5;
        if(hora_player == 3)    score3 += scorea + score5;
        if(hora_player == 4)    score4 += scorea + score5;
        if(check_player1_ron.checked)    score1 -= scorea;
        if(check_player2_ron.checked)    score2 -= scorea;
        if(check_player3_ron.checked)    score3 -= scorea;
        if(check_player4_ron.checked)    score4 -= scorea;
    }

    player1_riichi = false;
    player2_riichi = false;
    player3_riichi = false;
    player4_riichi = false;
    score5 = 0;

    if(hora_player != oya)  oya = (oya % 4) + 1; // 親を次のプレイヤーに移す

    updateElements();
    modal1.style.display = "none";

});




function resetModal() {
    check_tsumo.checked = true;
    check_han1.checked = true;
    container_player1_ron.style.display = "block";
    container_player2_ron.style.display = "block";
    container_player3_ron.style.display = "block";
    container_player4_ron.style.display = "block";

    if(hora_oya) idou_score.textContent = "500点 ALL";
    else idou_score.textContent = "500点 / 300点";
}


function updateIdouScore() {
    let han;
    if(check_han1.checked) han = 1;
    if(check_han2.checked) han = 2;
    if(check_han3.checked) han = 3;
    if(check_han4.checked) han = 4;
    if(check_han5.checked) han = 5;
    if(check_han6.checked) han = 6;
    if(check_han8.checked) han = 8;
    if(check_han11.checked) han = 11;
    if(check_han13.checked) han = 13;

    if(check_tsumo.checked){
        let [scorea, scoreb] = calc_score_tsumo(hora_oya, han);
        if(hora_oya)    idou_score.textContent = scorea + "点 ALL";
        else idou_score.textContent = scorea + "点 / " + scoreb + "点";
    }else{
        let scorea = calc_score_ron(hora_oya, han);
        idou_score.textContent = scorea + "点";
    }
}



//#########################################
//立直
//#########################################

player1_riichi_button.addEventListener("click", () => {
    if (!player1_riichi) {
        player1_riichi = true;
        score1 -= 1000; // リーチをかけるために1000点支払う
        score5 += 1000; // リー棒を増やす
        updateElements();
    } else {
        player1_riichi = false;
        score1 += 1000; // リーチを取り消すために1000点戻す
        score5 -= 1000; // リー棒を減らす
        updateElements();
    }
});

player2_riichi_button.addEventListener("click", () => {
    if (!player2_riichi) {  
        player2_riichi = true;
        score2 -= 1000; // リーチをかけるために1000点支払う
        score5 += 1000; // リー棒を増やす
        updateElements();
    } else {
        player2_riichi = false;
        score5 -= 1000; // リー棒を減らす
        updateElements();
    }
});

player3_riichi_button.addEventListener("click", () => {
    if (!player3_riichi) {
        player3_riichi = true;
        score3 -= 1000; // リーチをかけるために1000点支払う
        score5 += 1000; // リー棒を増やす
        updateElements();
    } else {
        player3_riichi = false;
        score3 += 1000; // リーチを取り消すために1000点戻す
        score5 -= 1000; // リー棒を減らす
        updateElements();
    }
});

player4_riichi_button.addEventListener("click", () => {
    if (!player4_riichi) {
        player4_riichi = true;
        score4 -= 1000; // リーチをかけるために1000点支払う
        score5 += 1000; // リー棒を増やす
        updateElements();
    } else {
        player4_riichi = false;
        score4 += 1000; // リーチを取り消すために1000点戻す
        score5 -= 1000; // リー棒を減らす
        updateElements();
    }
});



//#########################################
//流局
//#########################################

const btn_ryukyoku = document.getElementById("btn_ryukyoku");
const btn_ryukyoku_submit = document.getElementById("btn_ryukyoku_submit");
const btn_ryukyoku_cancel = document.getElementById("btn_ryukyoku_cancel");

const check_player1_tenpai = document.getElementById("check_player1_tenpai");
const check_player2_tenpai = document.getElementById("check_player2_tenpai");
const check_player3_tenpai = document.getElementById("check_player3_tenpai");
const check_player4_tenpai = document.getElementById("check_player4_tenpai");

btn_ryukyoku.addEventListener("click", () => {
    modal2.style.display = "block";
    check_player1_tenpai.checked = player1_riichi;
    check_player2_tenpai.checked = player2_riichi;
    check_player3_tenpai.checked = player3_riichi;
    check_player4_tenpai.checked = player4_riichi;
});

btn_ryukyoku_submit.addEventListener("click", () => {
    
    let tenpai_count = 0;
    if(check_player1_tenpai.checked) tenpai_count++;
    if(check_player2_tenpai.checked) tenpai_count++;
    if(check_player3_tenpai.checked) tenpai_count++;
    if(check_player4_tenpai.checked) tenpai_count++;

    if(tenpai_count == 1){
        if(check_player1_tenpai.checked)    score1 += 3000;
        else    score1 -= 1000;
        if(check_player2_tenpai.checked)    score2 += 3000;
        else    score2 -= 1000;
        if(check_player3_tenpai.checked)    score3 += 3000;
        else    score3 -= 1000;
        if(check_player4_tenpai.checked)    score4 += 3000;
        else    score4 -= 1000;
    }

    if(tenpai_count == 2){
        if(check_player1_tenpai.checked)    score1 += 1500;
        else    score1 -= 1500;
        if(check_player2_tenpai.checked)    score2 += 1500;
        else    score2 -= 1500;
        if(check_player3_tenpai.checked)    score3 += 1500;
        else    score3 -= 1500;
        if(check_player4_tenpai.checked)    score4 += 1500;
        else    score4 -= 1500;
    }

    if(tenpai_count == 3){
        if(check_player1_tenpai.checked)    score1 += 1000;
        else    score1 -= 3000;
        if(check_player2_tenpai.checked)    score2 += 1000;
        else    score2 -= 3000;
        if(check_player3_tenpai.checked)    score3 += 1000;
        else    score3 -= 3000;
        if(check_player4_tenpai.checked)    score4 += 1000;
        else    score4 -= 3000;
    }

    if((oya === 1 && !check_player1_tenpai.checked) ||
       (oya === 2 && !check_player2_tenpai.checked) ||
       (oya === 3 && !check_player3_tenpai.checked) ||
       (oya === 4 && !check_player4_tenpai.checked)) {
        oya = (oya % 4) + 1; // 親を次のプレイヤーに移す
    }

    player1_riichi = false;
    player2_riichi = false;
    player3_riichi = false;
    player4_riichi = false;

    updateElements(); 
    modal2.style.display = "none";  
});


btn_ryukyoku_cancel.addEventListener("click", () => {
    modal2.style.display = "none";
});




//########################################
//設定
//########################################

const modal3 = document.getElementById("modal3");
const player1_name_input = document.getElementById("player1_name_input");
const player2_name_input = document.getElementById("player2_name_input");
const player3_name_input = document.getElementById("player3_name_input");
const player4_name_input = document.getElementById("player4_name_input");
const player1_score_input = document.getElementById("player1_score_input");
const player2_score_input = document.getElementById("player2_score_input");
const player3_score_input = document.getElementById("player3_score_input");
const player4_score_input = document.getElementById("player4_score_input");
const ba_score_input = document.getElementById("ba_score_input");
const player1_oya_input = document.getElementById("player1_oya_input");
const player2_oya_input = document.getElementById("player2_oya_input");
const player3_oya_input = document.getElementById("player3_oya_input");
const player4_oya_input = document.getElementById("player4_oya_input");


btn_setting.addEventListener("click", () => {
    modal3.style.display = "block";

    player1_name_input.value = name1;
    player2_name_input.value = name2;
    player3_name_input.value = name3;
    player4_name_input.value = name4;

    const ba_score_input = document.getElementById("ba_score_input");
    player1_score_input.value = score1;
    player2_score_input.value = score2;
    player3_score_input.value = score3;
    player4_score_input.value = score4;
    ba_score_input.value = score5;

    player1_oya_input.checked = (oya === 1);
    player2_oya_input.checked = (oya === 2);
    player3_oya_input.checked = (oya === 3);
    player4_oya_input.checked = (oya === 4);

});

const modal3_submit_button = document.getElementById("modal3_submit_button");
const modal3_close_button = document.getElementById("modal3_close_button");

modal3_submit_button.addEventListener("click", () => {
    if(player1_name_input.value.trim()=="" || player2_name_input.value.trim()=="" || player3_name_input.value.trim()=="" || player4_name_input.value.trim()=="") {
        alert("プレイヤー名を入力してください。");
        return;
    }
    if(player1_score_input.value.trim()=="" || player2_score_input.value.trim()=="" || player3_score_input.value.trim()=="" || player4_score_input.value.trim()=="") {
        alert("点数を入力してください。");
        return;
    }

    name1 = player1_name_input.value;
    name2 = player2_name_input.value;
    name3 = player3_name_input.value;
    name4 = player4_name_input.value;

    score1 = parseInt(player1_score_input.value);
    score2 = parseInt(player2_score_input.value);
    score3 = parseInt(player3_score_input.value);
    score4 = parseInt(player4_score_input.value);
    score5 = parseInt(ba_score_input.value);

    if(player1_oya_input.checked) {
        oya = 1;
    }else if(player2_oya_input.checked) {
        oya = 2;
    }else if(player3_oya_input.checked) {
        oya = 3;
    }else if(player4_oya_input.checked) {
        oya = 4;
    }

    updateElements();
    modal3.style.display = "none";
});

modal3_close_button.addEventListener("click", () => {
    modal3.style.display = "none";
});




function calc_score_ron(oya, han){
    if(han == 1){
        if(oya) return 1500;
        else return 1000;
    }
    if(han == 2){
        if(oya) return 2900;
        else return 2000;
    }
    if(han == 3){
        if(oya) return 5800;
        else return 3900;
    }
    if(han == 4){
        if(oya) return 11600;
        else return 7700;
    }
    if(han == 5){
        if(oya) return 12000;
        else return 8000;
    }
    if(han == 6 || han == 7){
        if(oya) return 18000;
        else return 12000;
    }
    if(han==8 || han == 9 || han == 10){
        if(oya) return 24000;
        else return 16000;
    }
    if(han == 11 || han == 12){
        if(oya) return 36000;
        else return 24000;
    }
    if(han == 13){
        if(oya) return 48000;
        else return 32000;
    }
}


function calc_score_tsumo(oya, han){
    if(han == 1){
        if(oya) return [500, 500];
        else return [500, 300];
    }
    if(han == 2){
        if(oya) return [1000, 1000];
        else return [1000, 500];
    }
    if(han == 3){
        if(oya) return [2000, 2000];
        else return [2000, 1000];
    }
    if(han == 4){
        if(oya) return [3900, 3900];
        else return [4000, 2000];
    }
    if(han == 5){
        if(oya) return [4000, 4000];
        else return [4000, 1800];
    }
    if(han == 6 || han == 7){
        if(oya) return [6000, 6000];
        else return [6000, 3000];
    }
    if(han==8 || han == 9 || han == 10){
        if(oya) return [8000, 8000];
        else return [8000, 4000];
    }
    if(han == 11 || han == 12){
        if(oya) return [12000, 12000];
        else return [12000, 6000];
    }
    if(han == 13){
        if(oya) return [16000, 16000];
        else return [16000, 8000];
    }
}




function updateElements() {
    player1_score.textContent = score1 + "点";
    player2_score.textContent = score2 + "点";
    player3_score.textContent = score3 + "点";
    player4_score.textContent = score4 + "点";
    ba_score.textContent = score5 + "点";

    if(player1_riichi) {
        player1_riichi_button.style.backgroundColor = "orange";
    } else {
        player1_riichi_button.style.backgroundColor = "";
    }

    if(player2_riichi) {
        player2_riichi_button.style.backgroundColor = "orange";
    } else {
        player2_riichi_button.style.backgroundColor = "";
    }

    if(player3_riichi) {
        player3_riichi_button.style.backgroundColor = "orange";
    } else {
        player3_riichi_button.style.backgroundColor = "";
    }

    if(player4_riichi) {
        player4_riichi_button.style.backgroundColor = "orange";
    } else {
        player4_riichi_button.style.backgroundColor = "";
    }

    if(oya === 1){
        player1_oya_flag.textContent = "親";
        player1_oya_flag.style.color = "red";
        player2_oya_flag.textContent = "子";
        player2_oya_flag.style.color = "black";
        player3_oya_flag.textContent = "子";
        player3_oya_flag.style.color = "black";
        player4_oya_flag.textContent = "子";
        player4_oya_flag.style.color = "black";
    }
    else if(oya === 2){
        player1_oya_flag.textContent = "子";
        player1_oya_flag.style.color = "black";
        player2_oya_flag.textContent = "親";
        player2_oya_flag.style.color = "red";
        player3_oya_flag.textContent = "子";
        player3_oya_flag.style.color = "black";
        player4_oya_flag.textContent = "子";
        player4_oya_flag.style.color = "black";
    }
    else if(oya === 3){
        player1_oya_flag.textContent = "子";
        player1_oya_flag.style.color = "black";
        player2_oya_flag.textContent = "子";
        player2_oya_flag.style.color = "black";
        player3_oya_flag.textContent = "親";
        player3_oya_flag.style.color = "red";
        player4_oya_flag.textContent = "子";
        player4_oya_flag.style.color = "black";
    }
    else if(oya === 4){
        player1_oya_flag.textContent = "子";
        player1_oya_flag.style.color = "black";
        player2_oya_flag.textContent = "子";
        player2_oya_flag.style.color = "black";
        player3_oya_flag.textContent = "子";
        player3_oya_flag.style.color = "black";
        player4_oya_flag.textContent = "親";
        player4_oya_flag.style.color = "red";
    }

    player1_name.textContent = name1 + "（東）";
    player2_name.textContent = name2 + "（南）";
    player3_name.textContent = name3 + "（西）";
    player4_name.textContent = name4 + "（北）";

    document.getElementById("label_player1_ron").textContent = name1 + "（東）" + "　ロン";
    document.getElementById("label_player2_ron").textContent = name2 + "（南）" + "　ロン";
    document.getElementById("label_player3_ron").textContent = name3 + "（西）" + "　ロン";
    document.getElementById("label_player4_ron").textContent = name4 + "（北）" + "　ロン";

    document.getElementById("label_player1_tenpai").textContent = name1 + "（東）" + "　テンパイ";
    document.getElementById("label_player2_tenpai").textContent = name2 + "（南）" + "　テンパイ";
    document.getElementById("label_player3_tenpai").textContent = name3 + "（西）" + "　テンパイ";
    document.getElementById("label_player4_tenpai").textContent = name4 + "（北）" + "　テンパイ";

    console.log(score1 + score2 + score3 + score4 + score5);
}