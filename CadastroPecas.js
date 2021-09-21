let readlineSync = require('readline-sync');
var nomePeca;
var pesoPeca;
var capacidade = 10;

nomePeca = readlineSync.question("Digite o nome da peça: ");
console.log(nomePeca);

pesoPeca = readlineSync.question("Digite o peso da peça: ");
console.log(pesoPeca);
if (pesoPeca > 100)
{
    if (capacidade > 10) //O if sempre testará a condição VERDADEIRA.
    {
         console.log("Não cadastrar. Capacidade máxima atingida.");        
    }

    else if (nomePeca.length < 3)
    {
        console.log("Não cadastrar. Nome inválido.");
    }

    else
    {
        console.log("Peça cadastrada com sucesso.");
    }
}

else
{
    console.log("Pêso insuficiente.");
}





