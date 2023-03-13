class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
    this.compareAge = function (u2) {
      if (this.age > u2.age) {
        return this.firstName + " è più vecchio di " + u2.firstName;
      } else if (this.age < u2.age) {
        return this.firstName + " è più giovane di " + u2.firstName;
      } else {
        return this.firstName + " hanno la stessa età " + u2.firstName;
      }
    };
  }
}

const utente1 = new User("Marco", "Biondi", 33, "Siena");
const utente2 = new User("Pippo", "Rossi", 32, "Lucca");

console.log(utente1.compareAge(utente2));
