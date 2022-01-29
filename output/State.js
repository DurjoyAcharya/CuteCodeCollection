"use strict";
//https://refactoring.guru/design-patterns/state/typescript/example
class Context {
    constructor(state) {
        this.transitionTo(state);
    }
    transitionTo(state) {
        console.log(`Context: Transition to ${state.constructor.name}`);
        this.state = state;
        this.state.setContext(this);
    }
    Request1() {
        this.state.handle1();
    }
    Request2() {
        this.state.handle2();
    }
}
class State {
    setContext(context) {
        this.context = context;
    }
}
class ConcreteStateA extends State {
    handle1() {
        console.log("ConcreateStateA handle request1");
        console.log("ConcreteStateA wants to changes the state of context");
        this.context.transitionTo(new ConcreteStateB());
    }
    handle2() {
        console.log("ConcreteStateA handles request2");
    }
}
class ConcreteStateB extends State {
    handle1() {
        console.log("ConcreateStateB handle request1");
        console.log("ConcreateStateB wants to changes the state of context");
        this.context.transitionTo(new ConcreteStateA());
    }
    handle2() {
        console.log("ConcreteStateB handles request2");
    }
}
const context = new Context(new ConcreteStateA());
context.Request1();
context.Request2();
