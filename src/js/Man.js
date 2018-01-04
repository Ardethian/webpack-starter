import Person from "./Person";

export default class Man extends Person {
    constructor(name, workplace) {
        super(name);
        this.workplace = workplace;

        return this;
    }

    getWorkplace() {
        return this.workplace;
    }
}