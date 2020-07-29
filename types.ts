// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "bar", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xfff

// array (type[])
let city: string[]
city = ['Ilhabela', 'Piedade']

let values: Array<number>
values = [1, 2, 3]

// tuple ([type, type...])
let user: [number, string]
user = [1, 'any_user']

// enum (key and value)
enum UF {
    'São Paulo' = 'SP',
    'Rio de Janeiro' = 'RJ'
}

// any (anything)
let it: any
it = [1, 2]

// void (empty returns)
function logger(): void {
    console.log('foo')
}

// null | undefined
type bla = null | undefined

// never
function error(): never {
    throw new Error('Error');
}

// object
let game: object
game = {
    name: 'Cabal',
    genre: 'MMORPG'
}
