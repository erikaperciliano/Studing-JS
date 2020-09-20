/*                                  === Métodos staticos ===
    Esses métodos podem ser chamados apenas na classe em que são definidos. Se você criar uma instância dessa classe e tentar chamar algum método estático nessa instância, o JavaScript retornará TypeError.
*/

class Matematica {
    static soma(a, b){
       return console.log(`A soma de ${a} + ${b} = ${a + b}`);
    }
}

Matematica.soma(1, 2);