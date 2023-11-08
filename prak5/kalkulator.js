// David Gunawan
// 121140062
// Praktikum Pemweb RB 

var numcontainer = []
var angka1 = null
var angka2 = null
var jenisoperasi = null
var lanjut = false
var koma = false

function addangka(angka) {
    if (angka == '.' && koma) {
        
    } else if (angka == '.') {
        numcontainer.unshift(angka);
        koma = true
    } else {
        numcontainer.unshift(angka);
    }
    displaynum();
}

function addoperasi(parameter) {
    if (jenisoperasi == null) {
        jenisoperasi = parameter
        displayoperasi();
    }
    checkangka()
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

function checkangka() {
    if (angka1 == null) {
        angka1 = ambilangka()
        numcontainer = []
        koma = false
        displayoperasi();
    } else if (angka2 == null) {
        angka2 = ambilangka()
        alert("hitung hasil terlebih")
        numcontainer = []
        koma = false
    } else if (angka1 != null && angka2 != null && jenisoperasi != null) {
        numcontainer = []
        koma = false
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

        if(numcontainer.includes(NaN)){
            var index = numcontainer.findIndex(Number.isNaN)
            numcontainer[index] = "."
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
    if (numcontainer[0] == ".") {
        document.getElementById("input").innerHTML = angka + "."
    } else {
        document.getElementById("input").innerHTML= angka;
    }
}

function ambilangka() {
    var angka = 0;
    var length = numcontainer.length
    var negatif = false
    var i = 0
    if (numcontainer[numcontainer.length-1] == "-") {
        length-=1
        negatif = true
    }

    if (numcontainer[0] == ".") {
        i+=1
    }

    if(numcontainer.includes(".") && numcontainer[0] != ".") {
        max = numcontainer.indexOf(".")
        for (j = 0; j< max; j++) {
            var temp = numcontainer[j] * Math.pow(10, j);
            angka+=temp
        }
        i = max+1
        angka/= Math.pow(10, j)
    }

    var k = 0
    for(i; i<length; i++) {
        var temp = numcontainer[i]* Math.pow(10, k);
        angka+=temp;
        k+=1;
    }
    
    if (negatif){
        angka*=-1;
    }
    return angka;
}


