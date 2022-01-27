interface Face {
  Bangladesh(): any;
  India(): any;
}
class Sample implements Face {
  private msg: any;
  constructor(val: any) {
    this.msg = val;
  }
  Bangladesh() {
    console.log("This is Bangladesh");
  }
  India() {
    console.log("This is India");
  }
  public sms(): void {
    console.log(this.msg);
  }
}
var obj = new Sample("Durjoy Acharya");
obj.sms();
obj.Bangladesh();
obj.India();
