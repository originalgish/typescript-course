// Exercise 1
class Car {
  public name: string
  public acceleration = 5

  constructor(name: string) {
    this.name = name
  }

  honk(): void {
    console.log('Toooooooooot!')
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed
  }
}
var car = new Car('BMW')
car.honk()
console.log(car.acceleration)
car.accelerate(10)
console.log(car.acceleration)

// Exercise 2
class BaseObject {
  public width: number
  public height: number
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
  calcSize(): number {
    return this.width * this.height
  }
}

const rectangle = new BaseObject(5, 8)
console.log(rectangle.calcSize())

// Exercise 3
class Person {
  private _firstName: string = ''

  get firstName() {
    return this._firstName
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value
    } else {
      this._firstName = ''
    }
  }
}

const person = new Person()

console.log(person.firstName)
person.firstName = 'Ma'
console.log(person.firstName)
person.firstName = 'Maximilian'
console.log(person.firstName)
