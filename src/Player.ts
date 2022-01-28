export class Player {
  private _name!: string;
  public getName() {
    console.log(this._name);
  }
  public set value(v: string) {
    this._name = v;
  }
}
export class Student {
  readonly s = "(+880)1876068550";
  private static value = 10;
  public getNum() {
    return this.s;
  }
  public getRand(): any {
    return 10 * Math.random();
  }
}
