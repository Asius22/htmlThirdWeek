
enum FIGURA {
    QUADRATO, RETTANGOLO, TRIANGOLO
}
class SimpleMath {       
    public areaQuadrato(figura: FIGURA, obj: FiguraGeometrica): number {
        if (figura == FIGURA.QUADRATO)
            return obj.getBase() * obj.getBase();
        return -1;
    }

    public perimetroQuadrato(figura: FIGURA, obj: FiguraGeometrica): number {
        if (figura == FIGURA.QUADRATO)
            return obj.getBase() * 4;
        return -1;
    }

    public areaRettangolo(figura: FIGURA, obj: FiguraGeometrica): number {
        if (figura == FIGURA.RETTANGOLO)
            return obj.getBase() * obj.getAltezza();
        return -1;
    }

    public perimetroRettangolo(figura: FIGURA, obj: FiguraGeometrica): number {
        if (figura == FIGURA.RETTANGOLO)
            return (obj.getBase() + obj.getAltezza()) * 2;
        return -1;
    }
    
    public areaTriangolo(figura: FIGURA, obj: FiguraGeometrica): number {
        if (figura == FIGURA.TRIANGOLO)
            return obj.getBase() * obj.getAltezza();
        return -1;
    }

    public perimetroTriangolo(figura: FIGURA, obj: FiguraGeometrica): number {
        if (figura == FIGURA.TRIANGOLO)
            return obj.getBase() * 3;
        return -1;
    }    
}

class FiguraGeometrica {
    private altezza: number;
    private base: number;
    private figura : FIGURA;
    constructor(base: number, altezza: number, figura : FIGURA) {
        this.base = base;
        this.altezza = altezza;
        this.figura = figura;
    }

    public getBase(): number {
        return this.base;
    }

    public getAltezza(): number {
        return this.altezza;
    }

    public setBase(base : number) {
        this.base = base;
    }

    public setAltezza(altezza : number) {
         this.altezza = altezza;
    }

    public getFigura() : FIGURA {
        return this.figura;
    }
}

export {FIGURA, FiguraGeometrica, SimpleMath}
