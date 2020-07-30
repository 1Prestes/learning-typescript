abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    readonly race: string;
    level: number;

    constructor(name: string, age: number, nickname: string, race: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.race = race;
        this.level = level;
    }

    logCharDetails(): void {
        console.log(
            `The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`
        );
    }

    get getLevel() {
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level
    }
}

// const goku = new UserAccount('Goku', 45);
// console.table(goku);
// goku.logDetails();

const vegeta = new CharAccount('Vegeta', 48, 'Son Vegeta', 'Sayajin', 199);
vegeta.logCharDetails();
console.log('---- GET ----');
console.log(vegeta.getLevel);

console.log('---- SET ----');
vegeta.setLevel = 198;

console.table(vegeta);
