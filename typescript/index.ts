import { FIGURA, FiguraGeometrica, SimpleMath } from "./type"; 

const index = () => {
    let triangolo = new FiguraGeometrica(5, 5, FIGURA.TRIANGOLO);
    let quadrato = new FiguraGeometrica(5, 5, FIGURA.QUADRATO);
    let rettangolo = new FiguraGeometrica(2, 5, FIGURA.RETTANGOLO);
    const math = new SimpleMath();
    alert("perimetro triangolo: "
        + math.perimetroTriangolo(
            triangolo.getFigura(),
            triangolo
        )
    );

    alert("area triangolo: "
        + math.areaTriangolo(
            triangolo.getFigura(),
            triangolo
        )
    );

    alert("perimetro quadrato: "
        + math.perimetroQuadrato(
            triangolo.getFigura(),
            triangolo
        )
    );

    alert("area quadrato: "
        + math.areaQuadrato(
            quadrato.getFigura(),
            quadrato
        )
    ); alert("perimetro rettangolo: "
        + math.perimetroRettangolo(
            rettangolo.getFigura(),
            rettangolo
        )
    );

    alert("area rettangolo: "
        + math.areaRettangolo(
            rettangolo.getFigura(),
            rettangolo
        )
    );


}