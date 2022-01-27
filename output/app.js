"use strict";
class Sample {
    constructor(val) {
        this.msg = val;
    }
    Bangladesh() {
        console.log("This is Bangladesh");
    }
    India() {
        console.log("This is India");
    }
    sms() {
        console.log(this.msg);
    }
}
var obj = new Sample("Durjoy Acharya");
obj.sms();
obj.Bangladesh();
obj.India();
