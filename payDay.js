let saque = 24;

let _notas = [100, 50, 20, 10, 5, 2];

let saqAuxiliar = saque;

var texto = " "

for (opcao of ["A", "B"]) {

    if (opcao === "B") {

        _notas = [2, 50, 100, 5, 20, 10];
        saque = saqAuxiliar;
        texto = " "
    }

    for (i = 0; i < _notas.length; i++) {
        if (saque % _notas[i] === saque) {
            continue;
        }

        qtdNotas = parseInt(saque / _notas[i]);
        saque -= _notas[i] * qtdNotas;
        texto += `${qtdNotas} X R$${_notas[i]}, 00`
    }

    if (saqAuxiliar > 0) {
        try {

        } catch (error) {
            'VALOR PARA SAQUE INVALIDO'

        }
    }
    console.log(`OPÇÃO ${opcao}`);
    console.log(texto)
    console.log()
}



