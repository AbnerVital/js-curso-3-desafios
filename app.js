// 1. Crie uma fun��o que calcule o �ndice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que ser�o recebidos como par�metro.
function calculaIMC(altura, peso){

    let imc = peso / (alturaMetros * alturaMetros);
  }

// 2. Crie uma fun��o que calcule o valor do fatorial de um n�mero passado como par�metro.
// Define uma fun��o chamada 'calcularFatorial' que recebe um par�metro 'numero'
function calcularFatorial(numero) {
  
  // Se 'numero' for 0 ou 1, retorna 1, pois o fatorial de 0 e 1 � sempre 1
  if (numero === 0 || numero === 1) {
    return 1;
  }

  // Inicializa a vari�vel 'fatorial' com 1, que servir� para armazenar o resultado do c�lculo
  let fatorial = 1;

  // Loop 'for' que come�a em 2 e vai at� 'numero'
  // Multiplica 'fatorial' pelo valor de 'i' em cada itera��o
  for (let i = 2; i <= numero; i++) {
    fatorial *= i; // Multiplica 'fatorial' pelo n�mero atual de 'i' e armazena o resultado
  }

  // Retorna o valor final do fatorial calculado
  return fatorial;
}

console.log(calcularFatorial(5)); // Sa�da: 120 (5! = 5 � 4 � 3 � 2 � 1)


// 3. Crie uma fun��o que converte um valor em d�lar, passado como par�metro, e retorna o valor equivalente em reais. Para isso, considere a cota��o do d�lar igual a R$ 4,80.
function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} d�lares equivalem a R$ ${valorEmReais}`);

// 4.Crie uma fun��o que mostre na tela a �rea e o per�metro de uma sala retangular, utilizando altura e largura que ser�o dadas como par�metro.
function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`�rea da sala: ${area} metros quadrados`);
  console.log(`Per�metro da sala: ${perimetro} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);

// 5. Crie uma fun��o que mostre na tela a �rea e o per�metro de uma sala circular, utilizando seu raio que ser� fornecido como par�metro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`�rea da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Per�metro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// Exemplo de uso
let raio = 4; // em metros
calcularAreaPerimetroSalaCircular(raio);

// 6. Crie uma fun��o que mostre na tela a tabuada de um n�mero dado como par�metro.
function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numero = 7;
mostrarTabuada(numero);



