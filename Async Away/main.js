// == PROMISE (Assincrona) ==

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

 minhaPromise().then(response => {
     console.log(response);
 }).catch(err => {
     console.log('Deu ruim!');
});



// == A partir do ES8 a sintaxe async await passou a ser mais utilizada | await funciona como o .then

const minhaPromise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Async Await') }, 2000);
});

// async function executaPromise(){
//     //depois do await, passa o nome da função que retornará a promise
//     console.log("1ª: ", await minhaPromise2());
//     console.log("2ª: ",await minhaPromise2());
//     console.log("3ª: ",await minhaPromise2());
// }

// == Arrow Function ==

const executaPromise = async() => {
    console.log("1ª: ", await minhaPromise2());
    console.log("2ª: ",await minhaPromise2());
    console.log("3ª: ",await minhaPromise2());
}


executaPromise();