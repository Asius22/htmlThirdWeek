enum LEVEL {
    INFO,
    WARN,
    ERROR,
}

class Logger {
    name: string;
    level: LEVEL;
    constructor(name: string, level: LEVEL) {
        this.name = name;
        this.level = level;
    }

    getLevel(): LEVEL {
        return this.level;
    }

    getName(): string {
        return this.name;
    }
}
