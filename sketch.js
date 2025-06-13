function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["🧑‍🌾", "🚜", "🚚", "🛻"];
let velocidades = []; // Array para armazenar velocidades individuais
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  movimentaJogadores(); // Chamada da função de movimento automático
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("green");
  }
  
  // Inicializa velocidades aleatórias para cada jogador
  if (velocidades.length === 0) {
    for (let i = 0; i < quantidade; i++) {
      velocidades.push(random(1, 3)); // Velocidade inicial aleatória
    }
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      textSize(60);
      text(jogador[i] + " venceu!", 80, 200);
      noLoop(); // para o jogo quando alguém vencer
    }
  }
}

// Função para movimentar os jogadores automaticamente
function movimentaJogadores() {
  for (let i = 0; i < quantidade; i++) {
    // Move cada jogador com sua velocidade própria
    xJogador[i] += velocidades[i];
    
    // Adiciona um pouco de variação aleatória para tornar mais dinâmico
    if (random() > 0.95) { // 5% de chance de mudar a velocidade
      velocidades[i] = random(0.5, 3.5);
    }
  }
}