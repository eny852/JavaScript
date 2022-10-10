export class Telo{
    constructor(paHlava, paRuky, paNohy){
        this.hlava = paHlava;
        this.ruky = paRuky;
        this.nohy = paNohy;
    }

    printTelo(){
        return "Telo> "+this.hlava+ "hlava "+this.ruky+"ruky "+this.nohy+"nohy.";
    }
}