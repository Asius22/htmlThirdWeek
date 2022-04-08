enum FIGURA {
    QUADRATO, RETTANGOLO, TRIANGOLO
}

export interface SimpleMath {       
   calcolaArea() : number;
   calcolaPerimetro() : number;
}

export abstract class FiguraGeometrica implements SimpleMath{
    protected figura : FIGURA;
    constructor(figura : FIGURA) {
        this.figura = figura;
    }
    abstract calcolaArea(): number
    abstract calcolaPerimetro(): number 
    
    public getFigura() : FIGURA {
        return this.figura;
    }

    public setFigura (figura : FIGURA){
        this.figura = figura
    }
}

export class Quadrato extends FiguraGeometrica {

    private lato : number;

    constructor(lato : number){
        super(FIGURA.QUADRATO)
        this.lato = lato;
    }

    calcolaArea(): number {
        return this.lato * this.lato;
    }

    calcolaPerimetro(): number {
        return this.lato * 4;
    }

}

export class Triangolo extends FiguraGeometrica {

    private base : number;
    private altezza : number;

    constructor(altezza : number, base : number){
        super(FIGURA.TRIANGOLO)
        this.base = base;
        this.altezza = altezza;
    }

    calcolaArea(): number {
        return (this.base * this.altezza) / 2;
    }

    calcolaPerimetro(): number {
        return this.base * 3;
    }
}

export class Rettangolo extends FiguraGeometrica {

    private base : number;
    private altezza : number;

    constructor(altezza : number, base : number){
        super(FIGURA.RETTANGOLO)
        this.base = base;
        this.altezza = altezza;
    }

    calcolaArea(): number {
        return (this.base * this.altezza);
    }

    calcolaPerimetro(): number {
        return (this.base + this.altezza) + 2;
    }

}