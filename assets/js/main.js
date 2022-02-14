// lev1_1_1

let address = ["Hauptstraße", 12345, "Musterort", "Musterbundesland"];
let besteFreunde = ["Lara", "Lisa", "Tina", "Bibi"];
let person = ["Lara", "Croft", "Larifari", 18, "TombRaider", "Gotham City", "Bootcamp"];

console.log(address, besteFreunde, person);

person.push(address, besteFreunde);
console.log(person);
console.log("this is the array address and besteFreunde inside person: " + person[7] + person[8]);


// lev1_1_2
console.log("this is the length of person array: " + person.length);
console.log("this is the length of address array: " + address.length);
console.log("this is the length of besteFreunde array: " + besteFreunde.length);

//lev1_2
let meineTrainer1 = ["Eric", "Steffen", "Simon", "Ahmed"];
console.log(meineTrainer1);
let meineTrainer2 = new Array("Eric", "Steffen", "Simon", "Ahmed");
console.log(meineTrainer2);
let meineTrainer3 = new Array();
meineTrainer3[0] = "Eric";
meineTrainer3[1] = "Steffen";
meineTrainer3[2] = "Simon";
meineTrainer3[3] = "Ahmed";
console.log(meineTrainer3);

// lev1_3

let numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray);
console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);

// lev1_4

let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.";
let meinText2 = "Wie geht es dir heute?";
let meinText3 = "Heute ist ein großer Tag für uns.";

let split1, split2, split3;
split1 = meinText1.split(); //whole string to array
split2 = meinText1.split(""); //every letter as single array element
split3 = meinText1.split(" "); // every word as array elment
console.log(split1, split2, split3);


split1 = meinText2.split();
split2 = meinText2.split("");
split3 = meinText2.split(" ");
console.log(split1, split2, split3);

split1 = meinText3.split();
split2 = meinText3.split("");
split3 = meinText3.split(" ");
console.log(split1, split2, split3);

//lev1_5_1_1
let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
songs.push("Angry Chair", "Understand me", "Come together");
let totalSongs = songs;
console.log(songs, totalSongs);

let besteFussballerAllerZeiten = ["Matthäus", "Hoeneß", "Frings", "Effenberg", "Bierhoff"];

besteFussballerAllerZeiten.push("Kahn", "Neuer", "Lehmann");
console.log(besteFussballerAllerZeiten);

let stupidSongs = new Array;
stupidSongs[0] = "Last Christmas 1984";
stupidSongs[1] = "Last Christmas digitally remastered";
stupidSongs[2] = "Last Christmas - Matthias Reim";
stupidSongs[2] = "Atemlos ...";

console.log(stupidSongs);

let someCoaches = [];
someCoaches.push("Klinsmann", "Hitzfeld", "Rehhagel");
console.log(someCoaches);

// lev1_5_2
let heroUndEnemy = [["Batman", "The Joker"], ["Professor X", "Magneto"], ["Thor", "Loki"]];
console.log(heroUndEnemy);
heroUndEnemy.push(["Superman", "Lex Luthor"], ["Wolverine", "Sabretooth"], ["Ghost Rider", "Mephisto"]);
console.log(heroUndEnemy);

// lev1_6
let entfernterSong = totalSongs.pop();
console.log(entfernterSong, totalSongs);

let entfernterFussballer = besteFussballerAllerZeiten.pop();
console.log(entfernterFussballer, besteFussballerAllerZeiten);
besteFussballerAllerZeiten.pop();
besteFussballerAllerZeiten.pop();
besteFussballerAllerZeiten.pop();
console.log(besteFussballerAllerZeiten);

// lev1_7 

let dishes = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
console.log("das sind mein Dishes: " + dishes[0], dishes[1], dishes[2]);
dishes.unshift("Kaiserschmarrn", "Zwiebelrostbraten", "Schwarzwälder Kirsch", "Apfelmuß", "Käsekrainer");
console.log(dishes);

//lev1_8

let nichtgut = [dishes.shift()];
console.log(nichtgut);
nichtgut = [dishes.shift()];
console.log(nichtgut);
nichtgut = [dishes.shift()];
console.log(nichtgut);

//lev1_9 

let arr = [23, 54, 75];
arr.push(6, 7, 8);
console.log(arr);
arr.unshift(1, 2, 3, 4, 5)
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.shift();
console.log(arr);


// lev1_10 splice() (nicht zu verwechseln mit slice() - !!!!)

// Wird zum Hinzufügen/Entfernen von Elementen aus dem Array verwendet.
// Liefert ein Array mit entfernten Elementen.
// Ändert das Array.
// Für das Hinzufügen von Elementen: array.splice (Index, Anzahl der Elemente, Element).
// Zum Entfernen von Elementen: array.splice (Index, Anzahl der Elemente).
// Kann nur für Arrays verwendet werden.


let array01 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
console.log(array01);
let delImg1 = array01.splice(4, 4);
console.log(delImg1);
console.log(array01, delImg1);
console.log([delImg1]);

let delImg2 = array01.splice(6, 5);
console.log(delImg2, array01);

let delImg3 = array01.splice(2);
console.log(delImg3, array01);

// lev1_11
var array = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg"];
array.splice(2, 0, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg")
console.log(array);

array.splice(5, 0, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg", "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg", "imageTeilnehmer019supercode.jpg");
console.log(array);

array.splice(2, 0, "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg");
array.splice(11, 0, "imageTeilnehmer011supercode.jpg", "imageTeilnehmer012supercode.jpg", "imageTeilnehmer013supercode.jpg")
console.log(array);

// lev1_12

// slice() - kopiert einen Teil eines Arrays, ÄNDERT NICHT DAS URSPRÜNGLICHE ARRAY!!!!

let array03 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
console.log(array03);
let copyImg1 = array03.slice(6, 15);
console.log(copyImg1, array03);
let copyImg2 = array03.slice(5, 12);
console.log(copyImg2);








