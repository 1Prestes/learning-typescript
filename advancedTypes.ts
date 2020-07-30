// type Union (type | type)
function infoUser(uid: number | string, name: string) {
    console.log(`An user with ${uid} has a name as ${name}`);
}

infoUser(374, 'any_name');

// type aliases (type <name> = type | other type)
type Uid = number | string
type Plataform = 'Windows' | 'Mac OS' | 'Linux'

function newInfoUser (uid: Uid, name: string, plataform: Plataform) {
    console.log(`An user with ${uid} has a name as ${name} and use ${plataform}`);
}
newInfoUser(1, 'Aliases', 'Mac OS');
newInfoUser('1', 'Aliases', 'Linux');

