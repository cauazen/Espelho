let F = '';  // Modifique conforme necessário
let P = '';   // P = distância entre o objeto e o espelho
let Y =  42;   // Y = Altura do objeto

// Se F for igual a 0, o programa encerra
if (F === 0) {
    console.log("Espelho plano. Encerrando o programa.");
    process.exit(0); // Encerra o programa no Node.js
}

// Verificando o tipo de espelho
if (F > 0) {
    console.log("Espelho côncavo");
} else if (F < 0) {
    console.log("Espelho convexo");
} else {
    console.log("Espelho plano");
}

// Verificando a distância do objeto ao espelho
if (P > 0) {
    console.log("Distância do objeto ao espelho é positiva");
} else {
    console.log("A distância entre o objeto e o espelho precisa ser positiva");
}

// Verificando a posição do objeto
if (Y > 0) {
    console.log("Objeto para cima");
} else if (Y === 0) {
    console.log("Ponto");
} else {
    console.log("Objeto para baixo");
}

// Calculando o tipo de imagem
let p1 = (F * P) / (F - P);

p1 = (F*P)/(F-P)
if (p1 > 0) {
    console.log("Imagem real (fora do espelho)");
} else if (p1 < 0) {
    console.log("Imagem virtual (dentro do espelho)");
} else {
    console.log("Imagem imprópria");
}


A = -30 / 15;

// Verificando se a imagem é direita ou invertida
if (A > 0) {
    console.log("Imagem direita ao objeto");
} else if (A < 0) {
    console.log("Imagem invertida");
}

// Verificando o tamanho da imagem em relação ao objeto
if (A > 0) {
    console.log("A imagem é " + A + " maior que o objeto (ampliada)");
} else if (A < 0) {
    console.log("A imagem é " + A +  " menor que o objeto (reduzida)");
} else {
    console.log("A imagem tem o mesmo tamanho que o objeto");
}


// Calculando e exibindo a altura da imagem

let alturaImagem = Math.abs(A) * Y;
console.log("A altura da imagem é " + alturaImagem);
