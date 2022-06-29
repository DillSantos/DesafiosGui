//INFORME NA VARIAVEL 'SAQUE', O VALOR QUE DESEJA SACAR
var saque = 60;

//POSSIVEIS CEDULAS DISPONIVEIS PARA OPERAÇÃO
var cedulas = [100, 50, 20, 10, 5, 2];
console.log(`PARA SAQUE DE R$${saque},00`);

for (i = 0; i < cedulas.length; i++) {//FOR PERCORRE O ARRAY DE CEDULAS
    var conta1 = parseInt([saque / cedulas[i]]);
    if (conta1 % cedulas[i] > 0) {
        console.log(`OPÇÕES DE CEDULAS PARA OPERAÇÃO : ${conta1} DE R$${cedulas[i]},00`)
    }
}



