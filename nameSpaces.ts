namespace MyMath {
  const PI = 3.14

  function calculateCircumference(diameter: number): number {
    return diameter * PI
  }

  export function calculateRectangle(width: number, heigth: number): number {
    return width * heigth
  }
}

console.log(MyMath.calculateRectangle(10, 20))
