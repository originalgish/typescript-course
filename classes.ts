class Person {
  name: string
  private type: string = 'type'
  protected age: number = 27

  constructor(name: string, public username: string) {
    this.name = name
  }

  printAge() {
    console.log(this.age)
  }
}

const person = new Person('Max', 'max')

class Den extends Person {
  constructor(username: string) {
    super('Den', username)
  }
  name = 'Den'
}

// Getters & Setters

class Plant {
  private _species: string = 'Default'

  get species() {
    return this._species
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value
    } else {
      this._species = 'Default'
    }
  }
}

let plant = new Plant()
console.log(plant.species)
plant.species = 'AB'
console.log(plant.species)
plant.species = 'Green Plant'
console.log(plant.species)

class Helpers {
  static PI: number = 3.14
  static calcCircumference(diameter: number): number {
    return this.PI * diameter
  }
}
console.log(2 * Helpers.PI)
console.log(2 * Helpers.calcCircumference(8))

abstract class Project {
  public projectName: string = 'Default'
  budget: number = 1000

  abstract changeName(name: string): void

  calcBudget(): number {
    return this.budget * 2
  }
}

class ITProjects extends Project {
  changeName(name: string): void {
    this.projectName = name
  }
}

let newProject = new ITProjects()
console.log(newProject)
newProject.changeName('Super IT Project')
console.log(newProject)
