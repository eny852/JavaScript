export class Clovek{
    constructor(paName, paHight, paAge, paWeight, paTelo){
        this.name = paName;
        this.height = paHight;
        this.age = paAge;
        this.weight = paWeight;
        this.telo = paTelo;
    }

    printClovek(){
        return `${this.name} ${this.height} ${this.age} ${this.weight} ${this.telo.printTelo()}`
    }
}