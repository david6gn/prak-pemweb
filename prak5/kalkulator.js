// David Gunawan
// 121140062
// Praktikum Pemweb RB 

var numcontainer = []
var angka1 = null
var angka2 = null
var jenisoperasi = null
var lanjut = false

function nol () {
    numcontainer.unshift(0);    
    displaynum()
}

function satu () {
    numcontainer.unshift(1);
    displaynum();
}

function dua () {
    numcontainer.unshift(2);
    displaynum();
}

function tiga () {
    numcontainer.unshift(3);
    displaynum();
}

function empat () {
    numcontainer.unshift(4);
    displaynum();
}

function lima () {
    numcontainer.unshift(5);
    displaynum();
}

function enam () {
    numcontainer.unshift(6);
    displaynum();
}

function tujuh () {
    numcontainer.unshift(7);
    displaynum();
}

function delapan () {
    numcontainer.unshift(8);
    displaynum();
}

function sembilan () {
    numcontainer.unshift(9);
    displaynum();
}

function clearinput () {
    numcontainer = [];
    angka1 = null
    angka2 = null
    jenisoperasi = null
    displaynum();
}

function deleteangka () {
    numcontainer.shift();
    displaynum();
}

function optambah() {
    if (jenisoperasi == null) {
        jenisoperasi = document.getElementById("tambah").textContent;
    }
    checkangka()
}

function opkurang() {
    if (jenisoperasi == null) {
        jenisoperasi = document.getElementById("kurang").textContent;
    }
    checkangka()
}

function opkali() {
    if (jenisoperasi == null) {
        jenisoperasi = document.getElementById("kali").textContent;
    }
    checkangka()
}
function opbagi() {
    if (jenisoperasi == null) {
        jenisoperasi = document.getElementById("bagi").textContent;
    }
    checkangka()
}

function checkangka() {
    if (angka1 == null) {
        angka1 = ambilangka()
        numcontainer = []
        displayoperasi();
    } else if (angka2 == null) {
        angka2 = ambilangka()
        alert("hitung hasil terlebih")
        numcontainer = []
    } else if (angka1 != null && angka2 != null && jenisoperasi != null) {
        numcontainer = []
        alert("hitung hasil terlebih")
    }
}

function hitung () {
    if (angka1 == null) {

    }
    if (angka2 == null && numcontainer.length !=0) {
        angka2 = ambilangka()
    }

    if (angka1 != null && angka2 != null && jenisoperasi != null) {
        var hasil = 0
        if(jenisoperasi == "+") {
            hasil = angka1 + angka2
        } else if (jenisoperasi == "-") {
            hasil = angka1 - angka2
        } else if (jenisoperasi == "x") {
            hasil = angka1*angka2
        } else {
            hasil = angka1/angka2
        }
        numcontainer = Array.from(String(hasil), Number);
        numcontainer = numcontainer.reverse()
        if (hasil<0) {
            numcontainer.pop()
            numcontainer.push("-")
        }
        angka1 = null
        angka2 = null
        jenisoperasi = null
        lanjut = true
        document.getElementById("input").innerHTML = hasil;
    } else {

    }
    
}

function displayoperasi () {
    document.getElementById("input").innerHTML = jenisoperasi;
}

function displaynum () {
    if (lanjut && jenisoperasi == null) {
        numcontainer = []
        angka1 = null
        lanjut = false
    }
    var angka = ambilangka()
    document.getElementById("input").innerHTML= angka;
}

function ambilangka() {
    var angka = 0;
    var length = numcontainer.length
    var negatif = false

    if (numcontainer[numcontainer.length-1] == "-") {
        length-=1
        negatif = true
    }
    
    for(i = 0; i<length; i++) {
        var temp = numcontainer[i]* Math.pow(10, i);
        angka+=temp;
    }
    
    if (negatif){
        angka*=-1;
    }
    return angka;
}


