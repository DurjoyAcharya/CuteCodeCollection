//https://refactoring.guru/design-patterns/state/typescript/example
class Context {
  private state: State;
  constructor(state: State) {
    this.transitionTo(state);
  }
  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}`);
    this.state = state;
    this.state.setContext(this);
  }
  public Request1(): void {
    this.state.handle1();
  }
  public Request2(): void {
    this.state.handle2();
  }
}
abstract class State {
  protected context: Context;
  public setContext(context: Context) {
    this.context = context;
  }
  public abstract handle1(): void;
  public abstract handle2(): void;
}
class ConcreteStateA extends State {
  public handle1(): void {
    console.log("ConcreateStateA handle request1");
    console.log("ConcreteStateA wants to changes the state of context");
    this.context.transitionTo(new ConcreteStateB());
  }
  public handle2(): void {
    console.log("ConcreteStateA handles request2");
  }
}
class ConcreteStateB extends State {
  public handle1(): void {
    console.log("ConcreateStateB handle request1");
    console.log("ConcreateStateB wants to changes the state of context");
    this.context.transitionTo(new ConcreteStateA());
  }
  public handle2(): void {
    console.log("ConcreteStateB handles request2");
  }
}
const context = new Context(new ConcreteStateA());
context.Request1();
context.Request2();
