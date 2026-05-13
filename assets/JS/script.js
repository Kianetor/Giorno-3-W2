const colori = ['rosso', 'giallo', 'verde', 'blu', 'viola'];

for (const colore of colori) {
    console.log(colore);
}

const persona={
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 30,
    ospite: true,
    professione: 'Sviluppatore',
    dataArrivo: '20/07/2206',
    dataPartenza: '30/07/2206',
    stanza: 101
};

for (const chiave in persona) {
    console.log(`${chiave}: ${persona[chiave]}`);
}

console.log('------------------');

//while - do while

let x = 11;
while (x <= 10) {
    console.log(x);
    x++;
}

let y = 11;
do {
    console.log(y);
    y++;
} while (y <= 10);

//condizione di blocco non numerica

const names = ['Mario', 'Luigi', 'Peach', 'Bowser', 'Yoshi']
