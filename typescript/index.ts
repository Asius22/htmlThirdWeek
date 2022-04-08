import { Rettangolo, SimpleMath, Quadrato, Triangolo } from "./type";

const index = () => {
    const figura = prompt("dimmi quale figura instanziare", "r, q, t")
    let math: SimpleMath;
    switch (figura) {
        case 'r': math = new Rettangolo(10, 5); break;
        case 'q': math = new Quadrato(10); break;
        case 't': math = new Triangolo(10, 5); break;
        default: alert("valore inserito non valido"); math = new Quadrato(100);
    }

    const scelta = prompt("cosa vuoi calcolare?", "a,p");
    switch (scelta) {
        case 'a': alert(math.calcolaArea()); break;
        case 'p': alert(math.calcolaPerimetro()); break;
    }
}