"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    someBusinessLogic() {
        console.log('Metodo del singleton');
    }
}
exports.Singleton = Singleton;
//# sourceMappingURL=Singleton.js.map