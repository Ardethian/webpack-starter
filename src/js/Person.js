export default class Person {
    constructor(name) {
        this.name = name;
        
        return this;
    }

    getName() {
        return this.name;
    }
}