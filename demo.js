let lamp1 = document.querySelector(".Lamp1");
let lamp2 = document.querySelector(".Lamp2");
let lamp3 = document.querySelector(".Lamp3");
let lamp4 = document.querySelector(".Lamp4");
let lamp5 = document.querySelector(".Lamp5");
let lamp6 = document.querySelector(".Lamp6");
let lamp7 = document.querySelector(".Lamp7");
let lamp8 = document.querySelector(".Lamp8");
let lamp9 = document.querySelector(".Lamp9");
let Numbera1 = document.querySelector(".Number1");
let Numbera2 = document.querySelector(".Number2");
let Numbera3 = document.querySelector(".Number3");
let Numbera4 = document.querySelector(".Number4");
let Numbera5 = document.querySelector(".Number5");
let Numbera6 = document.querySelector(".Number6");
let Numbera7 = document.querySelector(".Number7");
let Numbera8 = document.querySelector(".Number8");
let Numbera9 = document.querySelector(".Number9");

//指定したID(start)のドキュメント要素を取得
const set = document.getElementById('Set');

//イベント処理(+ボタンまたはSetボタンがクリックされたら)
set.addEventListener('click' , () => {

    lamp1.style.backgroundColor = "Gray"
    lamp2.style.backgroundColor = "Gray"
    lamp3.style.backgroundColor = "Gray"
    lamp4.style.backgroundColor = "Gray"
    lamp5.style.backgroundColor = "Gray"
    lamp6.style.backgroundColor = "Gray"
    lamp7.style.backgroundColor = "Gray"
    lamp8.style.backgroundColor = "Gray"
    lamp9.style.backgroundColor = "Gray"

    var cnt = 0;
    //処理を1000ms後に実行する
    var timer = setInterval(function() {
        cnt += 1;
        switch (cnt) {
            case 1:
                lamp1.style.backgroundColor = "Green"
                Numbera1.style.visibility="visible"
                Numbera2.style.visibility="hidden"
                Numbera3.style.visibility="hidden"
                Numbera4.style.visibility="hidden"
                Numbera5.style.visibility="hidden"
                Numbera6.style.visibility="hidden"
                Numbera7.style.visibility="hidden"
                Numbera8.style.visibility="hidden"
                Numbera9.style.visibility="hidden"
                break;
            case 2:
                lamp2.style.backgroundColor = "Green"
                Numbera1.style.visibility="hidden"
                Numbera2.style.visibility="visible"
                Numbera3.style.visibility="hidden"
                Numbera4.style.visibility="hidden"
                Numbera5.style.visibility="hidden"
                Numbera6.style.visibility="hidden"
                Numbera7.style.visibility="hidden"
                Numbera8.style.visibility="hidden"
                Numbera9.style.visibility="hidden"
                break;
            case 3:
                lamp3.style.backgroundColor = "Green"
                Numbera1.style.visibility="hidden"
                Numbera2.style.visibility="hidden"
                Numbera3.style.visibility="visible"
                Numbera4.style.visibility="hidden"
                Numbera5.style.visibility="hidden"
                Numbera6.style.visibility="hidden"
                Numbera7.style.visibility="hidden"
                Numbera8.style.visibility="hidden"
                Numbera9.style.visibility="hidden"
                break;
            case 4:
                lamp4.style.backgroundColor = "Green"
                Numbera1.style.visibility="hidden"
                Numbera2.style.visibility="hidden"
                Numbera3.style.visibility="hidden"
                Numbera4.style.visibility="visible"
                Numbera5.style.visibility="hidden"
                Numbera6.style.visibility="hidden"
                Numbera7.style.visibility="hidden"
                Numbera8.style.visibility="hidden"
                Numbera9.style.visibility="hidden"
                break;
            case 5:
                lamp5.style.backgroundColor = "Green"
                Numbera1.style.visibility="hidden"
                Numbera2.style.visibility="hidden"
                Numbera3.style.visibility="hidden"
                Numbera4.style.visibility="hidden"
                Numbera5.style.visibility="visible"
                Numbera6.style.visibility="hidden"
                Numbera7.style.visibility="hidden"
                Numbera8.style.visibility="hidden"
                Numbera9.style.visibility="hidden"
                break;  
            case 6:
                lamp6.style.backgroundColor = "Green"
                Numbera1.style.visibility="hidden"
                Numbera2.style.visibility="hidden"
                Numbera3.style.visibility="hidden"
                Numbera4.style.visibility="hidden"
                Numbera5.style.visibility="hidden"
                Numbera6.style.visibility="visible"
                Numbera7.style.visibility="hidden"
                Numbera8.style.visibility="hidden"
                Numbera9.style.visibility="hidden"
                break;
            case 7:
                lamp7.style.backgroundColor = "Green"
                Numbera1.style.visibility="hidden"
                Numbera2.style.visibility="hidden"
                Numbera3.style.visibility="hidden"
                Numbera4.style.visibility="hidden"
                Numbera5.style.visibility="hidden"
                Numbera6.style.visibility="hidden"
                Numbera7.style.visibility="visible"
                Numbera8.style.visibility="hidden"
                Numbera9.style.visibility="hidden"
                break;
            case 8:
                lamp8.style.backgroundColor = "Green"
                Numbera1.style.visibility="hidden"
                Numbera2.style.visibility="hidden"
                Numbera3.style.visibility="hidden"
                Numbera4.style.visibility="hidden"
                Numbera5.style.visibility="hidden"
                Numbera6.style.visibility="hidden"
                Numbera7.style.visibility="hidden"
                Numbera8.style.visibility="visible"
                Numbera9.style.visibility="hidden"
                break;
            case 9:
                lamp9.style.backgroundColor = "Green"
                lamp8.style.backgroundColor = "Green"
                Numbera1.style.visibility="hidden"
                Numbera2.style.visibility="hidden"
                Numbera3.style.visibility="hidden"
                Numbera4.style.visibility="hidden"
                Numbera5.style.visibility="hidden"
                Numbera6.style.visibility="hidden"
                Numbera7.style.visibility="hidden"
                Numbera8.style.visibility="hidden"
                Numbera9.style.visibility="visible"
                break;
            default:
            clearTimeout(timer);
        }
        
    },1000)
    
})
