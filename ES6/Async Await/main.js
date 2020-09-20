const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

// minhaPromise()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log('Error');
//     })

    /*SINTAXE ASYNC AWAIT */

  /*  async function executaPromise(){
        console.log('1ª', await minhaPromise()); // await = .then
        console.log('2ª',await minhaPromise());
        console.log('3ª',await minhaPromise());
    }

    executaPromise();
  */
 
    /*SINTAXE ASYNC AWAIT Arrow Funciton*/

    const executaPromise2 = async () => {
        console.log('4ª', await minhaPromise());
        console.log('5ª',await minhaPromise());
        console.log('6ª',await minhaPromise());
    }

    executaPromise2();