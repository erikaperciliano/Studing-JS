const nome = 'Erika';
const idade = 25;

const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Rocketseat'
};

console.log(`Normal:  ${usuario.nome}`);

// === OBJECT SHORT SYNTAX ==

const usuario2 = {
    nome,
    idade,
    empresa: 'Rocketseat'
}; 

console.log(`Short Syntax:  ${usuario2.nome}`);