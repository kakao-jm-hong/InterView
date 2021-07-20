const person = {
    name: 'Hong Jeong Min',
    age: 22,
    getAge() {
        return this.age;
    }
};

person.age;
person.getAge();

const age = person.getAge;

age.call(person);