enum LEVEL {
    INFO,
    WARN,
    ERROR,
}

class Logger {
    private _name: string;
    private _level: LEVEL;
    constructor(name: string, level: LEVEL) {
        this._name = name;
        this._level = level;
    }

    get level(): LEVEL {
        return this._level;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    set level(level: LEVEL) {
        this._level = level;
    }
}

/**
 * classe simpleMath che calcola n funzioni che calcolano area e perimetro di n figure geometriche
 * type.ts contiene tutte le funzioni e index.ts richiama le funzioni
 */