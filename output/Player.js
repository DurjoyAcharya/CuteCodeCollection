export class Player {
    getName() {
        console.log(this._name);
    }
    set value(v) {
        this._name = v;
    }
}
export class Student {
    constructor() {
        this.s = "(+880)1876068550";
    }
    getNum() {
        return this.s;
    }
    getRand() {
        return 10 * Math.random();
    }
}
Student.value = 10;
