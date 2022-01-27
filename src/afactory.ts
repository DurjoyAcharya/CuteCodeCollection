//design pattern abstract factory
//https://refactoring.guru/design-patterns/factory-method/typescript/example
abstract class Creator {
  public abstract factoryMethod(): Product;
  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator code has just working with ${product.Operation()}`;
  }
}
interface Product {
  Operation(): string;
}
class ConcreteProduct1 implements Product {
  Operation(): string {
    return "{This is Result of ConcreteProduct1}";
  }
}
class ConcreteProduct2 implements Product {
  Operation(): string {
    return "{This is Result of ConcreteProduct2}";
  }
}
class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}
class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
var cc1 = new ConcreteCreator1();
var cc2 = new ConcreteCreator2();
console.log(cc1.someOperation());
console.log(cc2.someOperation());
