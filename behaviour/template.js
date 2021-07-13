class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} do ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} salary is ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'create programms'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'tests'
  }
}

const dev = new Developer('Daniel', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Samuel', 90000)
console.log(tester.getPaid())
console.log(tester.work())
