type AccountInfo = {
    id: number;
    name: string;
    email?: string;
};

const account: AccountInfo = {
    id: 1,
    name: 'any_name',
    email: 'foo@bar.ts',
}

type CharInfo = {
    nickname: string;
    level: number;
};

const char: CharInfo = {
    nickname: 'any_nick',
    level: 200,
};

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 1,
    name: 'any_name',
    nickname: 'any_nick',
    level: 200
};
