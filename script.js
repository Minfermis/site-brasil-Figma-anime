// Seleciona o container roler
const roler = document.querySelector(".roler");

// Transforma os filhos (palavras) em array
const words = Array.from(roler.children);

// Controla o índice atual da palavra visível
let current = 0;

// Cria um container interno para empilhar as palavras
const inner = document.createElement('div');
inner.style.transition = 'transform 0.5s ease-in-out';
inner.style.display = 'flex';
inner.style.flexDirection = 'column';

// Move as palavras para dentro do novo container
while (roler.firstChild) {
  inner.appendChild(roler.firstChild);
}

// Clona a primeira palavra e adiciona no final para loop infinito
inner.appendChild(inner.children[0].cloneNode(true));

// Adiciona o container dentro da área visível
roler.appendChild(inner);

// Conta total de palavras (incluindo a clonada)
const total = inner.children.length;

// Troca de palavra a cada 2.5 segundos
setInterval(() => {
  current++;
  inner.style.transition = 'transform 0.5s ease-in-out';
  inner.style.transform = `translateY(-${current * 1.2}em)`;

  // Quando atinge a última (clone), reseta sem transição
  if (current === total - 1) {
    setTimeout(() => {
      inner.style.transition = 'none';
      inner.style.transform = 'translateY(0)';
      current = 0;
    }, 500); // espera a transição antes de resetar
  }
}, 1500); // regulagem do tempo para troca das letras 