let myName: string = "Den"
let myAge = 11
let hasHobbies: boolean = true

let myRealAge: number

let hobbies: any[] = ["Cooking", "Sports"]
hobbies = [0]

let address: [string, number] = ["Street", 0]
address = ["1", 0]

enum Color {
  Gray,
  Green,
  Blue
}

let myColor: Color = Color.Green

function returnMyName() {
  return myAge
}

function multiply(value1: number, value2: number) {
  return value1 * value2
}

let myMultiply

let userData: { name: string; age: number } = {
  name: "Max",
  age: 12
}

type Complex = { data: number[]; output: (all: boolean) => number[] }

let complex: Complex = {
  data: [10, 10],
  output: () => {
    return [0]
  }
}

complex.output(false)
console.log(complex.output(false))

let myRealRealAge: number | string = 27
myRealRealAge = "27"

function neverReturn(): never {
  throw new Error("error")
}

let canBeNull: number | null = 12
canBeNull = null
let canThisBeAny = null
canThisBeAny = 12
