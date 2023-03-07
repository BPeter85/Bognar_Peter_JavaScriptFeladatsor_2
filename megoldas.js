const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]

//1.Feladat
function hosszEllenor(ellSzoveg) {
    let ellenor = false;
    document.write(`"${ellSzoveg}" kevesebb vagy több mint 8 karakterből áll? A teszt eredménye:  `);
    if (Number(ellSzoveg.length) >= 8) {
        ellenor = true;
        document.write(ellenor + "<br>");
    }
    else {
        document.write(ellenor + "<br>");
    }
    return ellenor;
}

//2.Feladat
function tajSzamEllenor(szamsor) {
    if (szamsor.length > 9 || szamsor.length < 9) {
        document.write(`A megadott TAJ-szám nem jó! A megadott rossz TAJ-szám ${szamsor}<br>`);
    }
    else {
        let tajSzamTomb = [];
        tajSzamEll = false;
        for (let i = 0; i < szamsor.length; i++) {
            tajSzamTomb.push(Number(szamsor[i]));
        }
        let parosSzamok = (tajSzamTomb[1] + tajSzamTomb[3] + tajSzamTomb[5] + tajSzamTomb[7]) * 7;
        let paratlanSzamok = (tajSzamTomb[0] + tajSzamTomb[2] + tajSzamTomb[4] + tajSzamTomb[6]) * 3;
        if ((parosSzamok + paratlanSzamok) % 10 == tajSzamTomb[8]) {
            tajSzamEll = true;
            document.write(szamsor + " = " + tajSzamEll + "<br>");
        }
        else {
            document.write(szamsor + " = " + tajSzamEll + "<br>");
        }
    }
    return tajSzamEll;
}
//3.Feladat
function tombTerjedelem(atadottTomb) {

    let atadottTombSzam = atadottTomb.map(Number);

    let minErtek = atadottTombSzam[0];
    let maxErtek = atadottTombSzam[0];

    for (let i = 1; i < atadottTombSzam.length; i++) {
        if (atadottTombSzam[i] < minErtek) {
            minErtek = atadottTombSzam[i];
        }
    }
    for (let i = 1; i < atadottTombSzam.length; i++) {
        if (atadottTombSzam[i] > maxErtek) {
            maxErtek = atadottTombSzam[i];
        }
    }
    return (maxErtek - minErtek);
}

//4.Feladat
function legidosebbDolgozo(vizsgaltObjektum) {
    let legidosebbDolgozoIndex = 0;
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
        let aktlegidosebbDolgozoEv = Number(vizsgaltObjektum[i].kor);
        let legidosebbDolgozoEv = Number(vizsgaltObjektum[legidosebbDolgozoIndex].kor);
        if (aktlegidosebbDolgozoEv > legidosebbDolgozoEv) {
            legidosebbDolgozoIndex = i;
        }
    }
    return legidosebbDolgozoIndex;
}
//5.Feladat
function fizetesEmeles(fizetesObjektum) {
    let atlagFizetes = 0;
    let atlagOsszeg = 0;
    let atlagEmelesOsszege = 0.1;
    let dolgozokUjFizeteseTomb = [];


    for (let i = 0; i < fizetesObjektum.length; i++) {
        atlagFizetes += fizetesObjektum[i].fizetes;
    }

    atlagOsszeg = Math.round(atlagFizetes / fizetesObjektum.length);


    for (let j = 0; j < fizetesObjektum.length; j++) {
        if (atlagOsszeg > fizetesObjektum[j].fizetes) {
            let dolgozokUjFizeteseSegedObj = {};
            dolgozokUjFizeteseSegedObj.nev = fizetesObjektum[j].nev;
            dolgozokUjFizeteseSegedObj.kor = fizetesObjektum[j].kor;
            dolgozokUjFizeteseSegedObj.fizetes = (fizetesObjektum[j].fizetes * atlagEmelesOsszege) + Number(fizetesObjektum[j].fizetes);
            dolgozokUjFizeteseSegedObj.beosztas = fizetesObjektum[j].beosztas;
            dolgozokUjFizeteseTomb.push(dolgozokUjFizeteseSegedObj);
        }
    }


    for (let k = 0; k < dolgozokUjFizeteseTomb.length; k++) {
        document.write(`Dolgozó neve: ${dolgozokUjFizeteseTomb[k].nev}, életkora: ${dolgozokUjFizeteseTomb[k].kor}, emelt fizetése: ${dolgozokUjFizeteseTomb[k].fizetes}, beosztása: ${dolgozokUjFizeteseTomb[k].beosztas}.<br>`);
    }
    console.log(dolgozokUjFizeteseTomb);
    //return dolgozokUjFizeteseTomb;
}





document.write("1. Feladat<br>");
hosszEllenor("feladatteszt");
hosszEllenor("teszt");
hosszEllenor("karakterlánc");
document.write("<hr>");

document.write("2. Feladat<br>");
tajSzamEllenor("040655330");
tajSzamEllenor("037687210");
tajSzamEllenor("03768721012");
tajSzamEllenor("019536646");
tajSzamEllenor("0195");
tajSzamEllenor("111111111");
document.write("<hr>");

document.write("3. Feladat<br>");
let vizsgaltTomb = [3, 5, 10, 16, 9];
let vizsgaltTomb2 = ["3", "5", "10", "16", "9"];
document.write(`A tömben "${vizsgaltTomb}" ezek az elemek vannak, a tömb külömbsége:  ${tombTerjedelem(vizsgaltTomb)}`);
document.write(`<br>A tömben "${vizsgaltTomb2}" ezek az elemek vannak, a tömb külömbsége:  ${tombTerjedelem(vizsgaltTomb2)}`);
document.write("<hr>");

document.write("4. Feladat<br>");
document.write(`A legidősebb objektum elem indexe: ${legidosebbDolgozo(Dolgozok)}`);
document.write("<hr>");

document.write("5. Feladat<br>");
fizetesEmeles(Dolgozok);
document.write("<hr>");