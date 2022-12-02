// TAKING ABOUT TYPES
// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

// Warned immediately that n is set to value of any
// function squareOf(n) {
//     return n * n
// }

// Type of n declared as a number
function squareOf(n : number) {
    return n * n
}

// Don't use type of any
let a: any = ['danger']

// Use unknown if a variables type is not known at the moment of compilation
let b: unknown = 10
b = 10 // it is now set to type of number
// b: number = 10 another way to declare type

// For booleans let the program infer that it is type boolean
const c = true
// while you can declare a boolean as type 'true' if it was ever switched to false it will throw an exception
// like so
// let c: true = false

// Numbers are similar to booleans, allow TypeScript to infer the type for you
let d = 1234
// if explicit is needed `let e: number = 1234`


// bigint (2^53) should be inferred via TypeScript, unsure if it is natively
// supported in all JS engines, so it's usage should be researched before
let e = 5678

// String
let f = 'hello'

// Symbols introduced recently is an alternative to the traditional the `keys` used in objects / maps
// Symbols even if given the same value will never be equal to each other, they are unique
let g = Symbol('e')
let h: symbol = Symbol('e')
// let h: unique symbol = Symbol('e') is the same as declaring the`let h` above

// Objects
let i: object = {
    b: 'x'
}

// However this object cannot be accessed normally with the `a.b` syntax, this a bit confusing to me but so this part will be longer
// a.b === Error: TS2339: Property 'b does not exist on type 'object'
// The `object` type is narrower than the `any` type so object does not actually tell you about the value it contains only that
// it is indeed the type of `object`
// Leave the explicit annotations off will allow one to use the traditional key/value pairing
let j = {
    b: 'x'
}
// j.b works
// If you want to explicitly set the value that an object contains
let k: { b: number } = {
    b: 12
} // {b: number}

// When using `const` on `object` declaration TypeScript does not assign the value that the object holds to a narrow type say like '12'
// in the code above, that is because it still treats the object which is non-primitive as mutable

let name: {
    firstName: string,
    lastName: string
} = {
    firstName: 'Jonathan',
    lastName: 'Eastin'
}

class Person {
    constructor(
        public firstName: string, // public essentially treats it like this.firstName = firstName
        public lastName: string
    ) {}
}
name = new Person('Jonathan', 'Eastin')

// Leaving properties that are required out of the initiation will lead to a `missing type` error, adding
// a new property will lead to a `not assignable` error

