function Mystaticdecorator(
  target: Function, // the function itself and not the prototype
  propertyKey: string | symbol, // The name of the static method
  descriptor: TypedPropertyDescriptor<any>
  ) {
  console.log("Mystaticdecorator called on: ", target, propertyKey, descriptor);
}

class StaticMethodDecoratorExm {
  @Mystaticdecorator
  static staticMethod() {
  }
}