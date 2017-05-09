function MyMethodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("MyMethodDecorator called on: ", target, propertyKey, descriptor);
}

class MethodDecoratorExample {
    @MyMethodDecorator
    method() {
    }
}