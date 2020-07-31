interface Game {
    title: string;
    description: string;
    readonly genre: string;
    plataform: string[];
    getSimilars?: (title: string) => void;
}

const cabal: Game = {
    title: 'Cabal Online',
    description: 'The best MMORPG',
    genre: 'MMORPG',
    plataform: ['Windows', 'Android'],
    getSimilars: (title: string) => {
        console.log(`Similars games to ${title}: Aika, Perfect World`);
    }
}

console.table(cabal);
console.log(cabal.title);

if (cabal.getSimilars) {
    cabal.getSimilars(cabal.title);
}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const cabal2: DLC = {
    title: 'Cabal 2',
    description: 'Continuation for the best MMORPG',
    genre: 'MMORPG',
    plataform: ['Windows'],
    originalGame: cabal,
    newContent: ['New world', 'New races'],
}

console.log(cabal2);

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;
    plataform: string[];

    constructor(title: string, description: string, genre: string, plataform: string[]) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.plataform = plataform;
    }
}
