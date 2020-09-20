/* 2º exercício - Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

        function pares(x, y) {
        // código aqui
        }
        pares(32, 321);

*/


function exibePar(n1,n2){
    while(n1<=n2){
      if((n1 % 2)==0){
          console.log(n1);
      }
      n1++    
    }
  }
  exibePar(32,321);
