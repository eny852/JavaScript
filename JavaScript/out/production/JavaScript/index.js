import {Clovek} from './clovek.mjs';
import {Telo} from "./telo.mjs";

function createNewClovek(paName, paHight, paAge, paWeight, paTelo){
    return {
        name : paName,
        height : paHight,
        age : paAge,
        weight : paWeight,
        telo : paTelo,
        printClovek : function (){
            return `${this.name} ${this.height} ${this.age} ${this.weight} ${this.telo.printTelo()}`;
        }
    }
}

const t1 = new Telo(1,2,2);
const t2 = new Telo(2,1,1);

const jurko = createNewClovek("Jurko",180,25,80,t2);

const sona = new Clovek("Sona",177,20,60,t1);

let arr = [sona,jurko];

for(const i in arr){
    console.log(arr[i].printClovek());
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
});