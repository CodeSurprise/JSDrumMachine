const pad1 = document.getElementById('pad1');
const pad2 = document.getElementById('pad2');
const pad3 = document.getElementById('pad3');
const pad4 = document.getElementById('pad4');
const pad5 = document.getElementById('pad5');
const pad6 = document.getElementById('pad6');
const pad7 = document.getElementById('pad7');
const pad8 = document.getElementById('pad8');

const hit1 = new Audio("AmenKick.wav");
const hit2 = new Audio("AmenSnare1.wav");
const hit3 = new Audio("AmenSnare2.wav");
const hit4 = new Audio("AmenRev.wav");
const hit5 = new Audio("AmenHat1.wav");
const hit6 = new Audio("AmenHat2.wav");
const hit7 = new Audio("AmenRim1.wav");
const hit8 = new Audio("AmenRim2.wav");

function play1() {
    hit1.play();
}

function play2() {
    hit2.play();
}

function play3() {
    hit3.play();
}

function play4() {
    hit4.play();
}

function play5() {
    hit5.play();
}

function play6() {
    hit6.play();
}

function play7() {
    hit7.play();
}  

function play8() {
    hit8.play();
}  

pad1.addEventListener('mousedown', play1, false);
pad2.addEventListener('mousedown', play2, false);
pad3.addEventListener('mousedown', play3, false);
pad4.addEventListener('mousedown', play4, false);
pad5.addEventListener('mousedown', play5, false);
pad6.addEventListener('mousedown', play6, false);
pad7.addEventListener('mousedown', play7, false);
pad8.addEventListener('mousedown', play8, false);


const trigPad = function(key) {
    if (key.keyCode == "81"){
        play1();
    } else if (key.keyCode == "87"){
        play2();
    } else if (key.keyCode == "69"){
        play3();
    } else if (key.keyCode == "82"){
        play4();
    } else if (key.keyCode == "65"){
        play5();
    } else if (key.keyCode == "83"){
        play6();
    } else if (key.keyCode == "68"){
        play7();
    } else if (key.keyCode == "70"){
        play8();
    }
}

window.addEventListener("keydown", trigPad, false);