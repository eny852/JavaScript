import {Clovek} from './clovek.mjs';
import {Telo} from "./telo.mjs";
//import {userInput} from "./helpers.mjs";

const t1 = new Telo(1,2,2);
const t2 = new Telo(2,1,1);

const jurko = new Clovek("Jurko",180,25,80,t2);

const sona = new Clovek("Sona",177,20,60,t1);

let arr = [sona,jurko];

for(const i in arr){
    console.log(arr[i].printClovek());
    const li = document.createElement("li");
    li.textContent = arr[i].printClovek();
    document.getElementById("ol1").appendChild(li);
}

//console.log(userInput());